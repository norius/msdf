import { createServerFn } from "@tanstack/react-start";
import { Resend } from "resend";
import { z } from "zod";

function getEnv(key: string): string | undefined {
  if (typeof process !== "undefined" && process.env?.[key]) {
    return process.env[key];
  }
  if (typeof import.meta !== "undefined" && (import.meta as unknown as { env?: Record<string, string> }).env?.[key]) {
    return (import.meta as unknown as { env?: Record<string, string> }).env?.[key];
  }
  return undefined;
}

export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export const contactFormSchema = z.object({
  nome: z.string().trim().min(1, "Il nome è obbligatorio").max(100, "Nome troppo lungo (max 100 caratteri)"),
  email: z.string().trim().email("Inserisci un indirizzo email valido").max(150, "Email troppo lunga"),
  telefono: z.string().trim().max(30, "Numero troppo lungo").optional(),
  corso: z.string().trim().max(100).optional(),
  messaggio: z.string().trim().min(1, "Il messaggio è obbligatorio").max(3000, "Messaggio troppo lungo (max 3000 caratteri)"),
  bot_field: z.string().optional(),
  privacy: z.boolean().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const auditionFormSchema = z.object({
  nome: z.string().trim().min(1, "Il nome è obbligatorio").max(100, "Nome troppo lungo (max 100 caratteri)"),
  email: z.string().trim().email("Inserisci un indirizzo email valido").max(150, "Email troppo lunga"),
  telefono: z.string().trim().min(1, "Il numero di telefono è obbligatorio").max(30, "Numero troppo lungo"),
  esperienze: z.string().trim().max(3000, "Testo troppo lungo (max 3000 caratteri)").optional(),
  isMinor: z.boolean().optional(),
  genitoreContatto: z.string().trim().max(150, "Testo troppo lungo").optional(),
  bot_field: z.string().optional(),
  privacy: z.boolean().optional(),
});

export type AuditionFormData = z.infer<typeof auditionFormSchema>;

export type ActionResponse = {
  success: boolean;
  error?: string;
};

export const submitContactForm = createServerFn({ method: "POST" })
  .validator((data: ContactFormData) => contactFormSchema.parse(data))
  .handler(async ({ data }): Promise<ActionResponse> => {
    try {
      // Honeypot bot protection: se il campo invisibile è compilato da un bot, scarta silenziosamente
      if (data.bot_field && data.bot_field.trim() !== "") {
        console.warn("[MSDF Actions] Bot request blocked via honeypot field in contact form.");
        return { success: true };
      }

      const apiKey = getEnv("RESEND_API_KEY");
      if (!apiKey || apiKey === "re_your_api_key_here") {
        console.error(
          "[MSDF Actions] RESEND_API_KEY is not configured. Please set a valid Resend API key in your .env or environment variables."
        );
        return {
          success: false,
          error:
            "Configurazione email incompleta. Inserisci la tua RESEND_API_KEY nel file .env per abilitare l'invio.",
        };
      }

      const resend = new Resend(apiKey);
      const recipient = getEnv("CONTACT_EMAIL_TO") || "msdancefactory2021@gmail.com";
      const sender = getEnv("CONTACT_EMAIL_FROM") || "Dance Factory <onboarding@resend.dev>";

      const courseLabel = data.corso || "Richiesta generale";
      const subject = `[Nuovo Contatto MSDF] ${data.nome} — ${courseLabel}`;

      const textBody = `
Nuova richiesta di contatto ricevuta dal sito web MS Dance Factory:

- Nome e Cognome: ${data.nome}
- Email: ${data.email}
- Telefono: ${data.telefono || "Non specificato"}
- Corso di interesse: ${courseLabel}

Messaggio:
${data.messaggio}
      `.trim();

      // Sanificazione HTML per prevenire HTML/Email Injection e attacchi XSS nei client di posta
      const safeNome = escapeHtml(data.nome);
      const safeEmail = escapeHtml(data.email);
      const safeTelefono = data.telefono ? escapeHtml(data.telefono) : "";
      const safeCourse = escapeHtml(courseLabel);
      const safeMessaggio = escapeHtml(data.messaggio);

      const htmlBody = `
<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="utf-8">
  <title>${escapeHtml(subject)}</title>
</head>
<body style="margin: 0; padding: 24px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0b0b0f; color: #f4f4f5;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #14141b; border: 1px solid #272732; border-radius: 12px; overflow: hidden;">
    <div style="background: linear-gradient(135deg, #e11d48, #9f1239); padding: 24px 30px;">
      <h1 style="margin: 0; font-size: 20px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; color: #ffffff;">MS Dance Factory</h1>
      <p style="margin: 4px 0 0 0; font-size: 13px; color: #fecdd3;">Nuova richiesta informazioni dal sito web</p>
    </div>
    
    <div style="padding: 28px 30px;">
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
        <tr>
          <td style="padding: 8px 0; font-size: 13px; font-weight: 600; color: #94a3b8; width: 140px;">Nome e Cognome:</td>
          <td style="padding: 8px 0; font-size: 14px; font-weight: 600; color: #ffffff;">${safeNome}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-size: 13px; font-weight: 600; color: #94a3b8;">Email:</td>
          <td style="padding: 8px 0; font-size: 14px; color: #e11d48;"><a href="mailto:${safeEmail}" style="color: #fb7185; text-decoration: none;">${safeEmail}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-size: 13px; font-weight: 600; color: #94a3b8;">Telefono:</td>
          <td style="padding: 8px 0; font-size: 14px; color: #ffffff;">${safeTelefono ? `<a href="tel:${safeTelefono}" style="color: #ffffff; text-decoration: none;">${safeTelefono}</a>` : '<em style="color: #64748b;">Non specificato</em>'}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-size: 13px; font-weight: 600; color: #94a3b8;">Corso di interesse:</td>
          <td style="padding: 8px 0; font-size: 14px; font-weight: 600; color: #fb7185;">${safeCourse}</td>
        </tr>
      </table>

      <div style="background-color: #1c1c26; border: 1px solid #2e2e3e; border-radius: 8px; padding: 18px; margin-bottom: 24px;">
        <h3 style="margin: 0 0 10px 0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em; color: #cbd5e1;">Messaggio del richiedente:</h3>
        <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #e2e8f0; white-space: pre-wrap;">${safeMessaggio}</p>
      </div>

      <p style="margin: 0; font-size: 12px; color: #64748b; border-top: 1px solid #272732; padding-top: 16px;">
        Puoi rispondere direttamente a questa email per contattare <strong>${safeNome}</strong> (${safeEmail}).
      </p>
    </div>
  </div>
</body>
</html>
      `.trim();

      const { error } = await resend.emails.send({
        from: sender,
        to: recipient,
        replyTo: data.email,
        subject,
        text: textBody,
        html: htmlBody,
      });

      if (error) {
        console.error("[MSDF Actions] Resend send error:", error);
        return {
          success: false,
          error: error.message || "Errore durante l'invio dell'email.",
        };
      }

      return { success: true };
    } catch (err: any) {
      console.error("[MSDF Actions] Exception sending contact email:", err);
      return {
        success: false,
        error: err?.message || "Errore durante l'invio del modulo. Riprova più tardi.",
      };
    }
  });

export const submitAuditionForm = createServerFn({ method: "POST" })
  .validator((data: AuditionFormData) => auditionFormSchema.parse(data))
  .handler(async ({ data }): Promise<ActionResponse> => {
    try {
      // Honeypot bot protection: se il campo invisibile è compilato da un bot, scarta silenziosamente
      if (data.bot_field && data.bot_field.trim() !== "") {
        console.warn("[MSDF Actions] Bot request blocked via honeypot field in audition form.");
        return { success: true };
      }

      const apiKey = getEnv("RESEND_API_KEY");
      if (!apiKey || apiKey === "re_your_api_key_here") {
        console.error(
          "[MSDF Actions] RESEND_API_KEY is not configured. Please set a valid Resend API key in your .env or environment variables."
        );
        return {
          success: false,
          error:
            "Configurazione email incompleta. Inserisci la tua RESEND_API_KEY nel file .env per abilitare l'invio.",
        };
      }

      const resend = new Resend(apiKey);
      const recipient = getEnv("CONTACT_EMAIL_TO") || "msdancefactory2021@gmail.com";
      const sender = getEnv("CONTACT_EMAIL_FROM") || "Dance Factory <onboarding@resend.dev>";

      const subject = `[Candidatura Casting MSDF Academy] ${data.nome}${data.isMinor ? " (Minorenne)" : ""}`;

      const textBody = `
Nuova candidatura casting ricevuta per MS Dance Factory Academy:

- Nome e Cognome: ${data.nome}
- Email: ${data.email}
- Telefono: ${data.telefono}
- Minorenne: ${data.isMinor ? `Sì (Genitore/Tutore: ${data.genitoreContatto || "Non specificato"})` : "No"}

Esperienze / Percorso di danza:
${data.esperienze || "Nessun percorso o esperienza aggiuntiva indicata."}
      `.trim();

      // Sanificazione HTML per prevenire HTML/Email Injection e attacchi XSS nei client di posta
      const safeNome = escapeHtml(data.nome);
      const safeEmail = escapeHtml(data.email);
      const safeTelefono = escapeHtml(data.telefono);
      const safeEsperienze = data.esperienze ? escapeHtml(data.esperienze) : "";
      const safeGenitore = data.genitoreContatto ? escapeHtml(data.genitoreContatto) : "";

      const htmlBody = `
<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="utf-8">
  <title>${escapeHtml(subject)}</title>
</head>
<body style="margin: 0; padding: 24px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0b0b0f; color: #f4f4f5;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #14141b; border: 1px solid #272732; border-radius: 12px; overflow: hidden;">
    <div style="background: linear-gradient(135deg, #e11d48, #9f1239); padding: 24px 30px;">
      <h1 style="margin: 0; font-size: 20px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; color: #ffffff;">MSDF Academy — Casting</h1>
      <p style="margin: 4px 0 0 0; font-size: 13px; color: #fecdd3;">Nuova candidatura e prenotazione audizione</p>
    </div>
    
    <div style="padding: 28px 30px;">
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
        <tr>
          <td style="padding: 8px 0; font-size: 13px; font-weight: 600; color: #94a3b8; width: 140px;">Candidato:</td>
          <td style="padding: 8px 0; font-size: 14px; font-weight: 600; color: #ffffff;">${safeNome}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-size: 13px; font-weight: 600; color: #94a3b8;">Email:</td>
          <td style="padding: 8px 0; font-size: 14px; color: #e11d48;"><a href="mailto:${safeEmail}" style="color: #fb7185; text-decoration: none;">${safeEmail}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-size: 13px; font-weight: 600; color: #94a3b8;">Cellulare / WhatsApp:</td>
          <td style="padding: 8px 0; font-size: 14px; color: #ffffff;"><a href="tel:${safeTelefono}" style="color: #ffffff; text-decoration: none;">${safeTelefono}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-size: 13px; font-weight: 600; color: #94a3b8;">Candidato Minorenne:</td>
          <td style="padding: 8px 0; font-size: 14px; font-weight: 600; color: #ffffff;">
            ${data.isMinor ? `<span style="color: #fb7185;">Sì</span> (Tutore: ${safeGenitore || "Non specificato"})` : "No"}
          </td>
        </tr>
      </table>

      <div style="background-color: #1c1c26; border: 1px solid #2e2e3e; border-radius: 8px; padding: 18px; margin-bottom: 24px;">
        <h3 style="margin: 0 0 10px 0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em; color: #cbd5e1;">Percorso / Background di danza:</h3>
        <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #e2e8f0; white-space: pre-wrap;">${safeEsperienze || '<em style="color: #64748b;">Nessuna informazione inserita</em>'}</p>
      </div>

      <p style="margin: 0; font-size: 12px; color: #64748b; border-top: 1px solid #272732; padding-top: 16px;">
        Puoi rispondere direttamente a questa email per contattare <strong>${safeNome}</strong> (${safeEmail}).
      </p>
    </div>
  </div>
</body>
</html>
      `.trim();

      const { error } = await resend.emails.send({
        from: sender,
        to: recipient,
        replyTo: data.email,
        subject,
        text: textBody,
        html: htmlBody,
      });

      if (error) {
        console.error("[MSDF Actions] Resend send error:", error);
        return {
          success: false,
          error: error.message || "Errore durante l'invio della candidatura.",
        };
      }

      return { success: true };
    } catch (err: any) {
      console.error("[MSDF Actions] Exception sending audition email:", err);
      return {
        success: false,
        error: err?.message || "Errore durante l'invio della candidatura. Riprova più tardi.",
      };
    }
  });

