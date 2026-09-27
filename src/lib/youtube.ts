import { createServerFn } from "@tanstack/react-start";

export interface YouTubeVideo {
  id: string;
  title: string;
  link: string;
  published: string;
  thumbnail: string;
}

export const YOUTUBE_CHANNEL_ID = "UCpF3h3pQOyZbIOno0TmsoRw";
export const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@marcostra7236";

export const FALLBACK_YOUTUBE_VIDEOS: YouTubeVideo[] = [
  {
    id: "zVHjE1y5ekY",
    title: "Masterclass Alessio Di Ponzio - MS Dance Factory",
    link: "https://www.youtube.com/watch?v=zVHjE1y5ekY",
    published: "2026-09-19T14:29:55+00:00",
    thumbnail: "https://i3.ytimg.com/vi/zVHjE1y5ekY/hqdefault.jpg",
  },
  {
    id: "HYxP7eMio8o",
    title: "River (King Kavalier Remix) - Bishop Briggs | Heels Class by Emy Codebo’ | MS Dance Factory",
    link: "https://www.youtube.com/watch?v=HYxP7eMio8o",
    published: "2026-06-09T05:31:20+00:00",
    thumbnail: "https://i1.ytimg.com/vi/HYxP7eMio8o/hqdefault.jpg",
  },
  {
    id: "6tHuokkec6w",
    title: "CAFè CON RON - Bad Bunny | Baby Latin Class by Eliana | MS Dance Factory",
    link: "https://www.youtube.com/watch?v=6tHuokkec6w",
    published: "2026-06-03T11:55:12+00:00",
    thumbnail: "https://i3.ytimg.com/vi/6tHuokkec6w/hqdefault.jpg",
  },
  {
    id: "jwx_V2f6CCg",
    title: "Mi Refe - Beèle, Ovy On The Drums | Reggaeton Heels by Marco Stra | MS Dance Factory",
    link: "https://www.youtube.com/watch?v=jwx_V2f6CCg",
    published: "2026-05-19T16:11:24+00:00",
    thumbnail: "https://i3.ytimg.com/vi/jwx_V2f6CCg/hqdefault.jpg",
  },
  {
    id: "b7PI__v7nms",
    title: "TSIV - Darabukka | Vogueing Class by Spedix | MS Dance Factory",
    link: "https://www.youtube.com/watch?v=b7PI__v7nms",
    published: "2026-05-05T11:43:21+00:00",
    thumbnail: "https://i3.ytimg.com/vi/b7PI__v7nms/hqdefault.jpg",
  },
  {
    id: "bulPTzrN5yQ",
    title: "Smooth - Les Twins Remix, La Gabi | Stiletto Heels Class by Sofia Ventrella | MS Dance Factory",
    link: "https://www.youtube.com/watch?v=bulPTzrN5yQ",
    published: "2026-04-23T11:36:09+00:00",
    thumbnail: "https://i3.ytimg.com/vi/bulPTzrN5yQ/hqdefault.jpg",
  },
];

function decodeHtmlEntities(str: string): string {
  return str
    .replace(/&amp;/g, "&")
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .trim();
}

export function parseYouTubeXml(xml: string): YouTubeVideo[] {
  const videos: YouTubeVideo[] = [];
  const entryRegex = /<entry>([\s\S]*?)<\/entry>/g;
  let match: RegExpExecArray | null;

  while ((match = entryRegex.exec(xml)) !== null) {
    const block = match[1];
    const id = block.match(/<yt:videoId>(.*?)<\/yt:videoId>/)?.[1] || "";
    let rawTitle = block.match(/<title>(.*?)<\/title>/)?.[1] || "";
    const published = block.match(/<published>(.*?)<\/published>/)?.[1] || "";
    const customThumb = block.match(/<media:thumbnail url="([^"]+)"/)?.[1];

    if (id) {
      videos.push({
        id,
        title: decodeHtmlEntities(rawTitle),
        published,
        thumbnail: customThumb || `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
        link: `https://www.youtube.com/watch?v=${id}`,
      });
    }
  }

  return videos;
}

export const getYouTubeVideos = createServerFn({ method: "GET" }).handler(
  async (): Promise<YouTubeVideo[]> => {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 4000);

      const res = await fetch(
        `https://www.youtube.com/feeds/videos.xml?channel_id=${YOUTUBE_CHANNEL_ID}`,
        {
          signal: controller.signal,
          headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)",
            Accept: "application/atom+xml,application/xml,text/xml;q=0.9,*/*;q=0.8",
          },
        }
      );
      clearTimeout(timeoutId);

      if (!res.ok) {
        console.warn(`[YouTube RSS] HTTP ${res.status}: using fallback videos`);
        return FALLBACK_YOUTUBE_VIDEOS;
      }

      const xml = await res.text();
      const parsed = parseYouTubeXml(xml);

      if (parsed.length === 0) {
        return FALLBACK_YOUTUBE_VIDEOS;
      }

      return parsed;
    } catch (err) {
      console.warn("[YouTube RSS] Fetch error, using fallback list:", err);
      return FALLBACK_YOUTUBE_VIDEOS;
    }
  }
);
