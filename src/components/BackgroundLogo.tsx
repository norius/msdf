import logoImg from "@/assets/logo.png";

interface BackgroundLogoProps {
  className?: string;
  imageClassName?: string;
}

/**
 * Animated background logo emblem.
 * Fixed in the viewport (pointer-events-none, z-[1]) so it remains visible
 * throughout the entire page during scrolling and navigation.
 * Pulses infinitely with a 5s cycle.
 */
export function BackgroundLogo({
  className = "",
  imageClassName = "",
}: BackgroundLogoProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 flex items-center justify-center overflow-hidden z-[1] ${className}`}
    >
      <img
        src={logoImg}
        alt="MS Dance Factory Logo Background"
        width={1000}
        height={1228}
        loading="eager"
        decoding="async"
        className={`animate-logo-pulse will-change-[opacity] h-auto max-h-[55%] w-auto max-w-[72%] sm:max-h-[68%] sm:max-w-[500px] md:max-w-[580px] lg:max-w-[620px] object-contain select-none drop-shadow-[0_0_40px_rgba(255,30,60,0.35)] ${imageClassName}`}
      />
    </div>
  );
}
