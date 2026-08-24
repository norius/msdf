# Dance Factory — Contact Form Integration Guide (Resend & TanStack Start)

This document provides a step-by-step implementation guide to make the contact form in `src/routes/index.tsx` work by sending emails directly to `info@dancefactory.it` using **Resend** and **TanStack Start Server Functions**.

---

## 1. Install Dependencies
You need to install the official Resend client library. Run the following command in the workspace directory:
```bash
npm install resend
# or using Bun:
bun add resend
```

---

## 2. Create the Email Action
Create a new file `src/lib/actions.ts` (or place it alongside your server code) to define the secure server function. This code will execute strictly on the server-side, protecting your Resend API key.

```typescript
// src/lib/actions.ts
import { createServerFn } from "@tanstack/react-start";
import { Resend } from "resend";

// Initialize Resend with your API key
// Make sure RESEND_API_KEY is defined in your environment variables (.env)
const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactFormData = {
  nome: string;
  email: string;
  telefono?: string;
  corso: string;
  messaggio: string;
};

export const submitContactForm = createServerFn()
  .validator((data: ContactFormData) => data)
  .handler(async ({ data }) => {
    try {
      // 1. Send the email notification to the studio segreteria
      const { error } = await resend.emails.send({
        from: "Dance Factory <onboarding@resend.dev>", // Replace with your verified custom domain once configured in Resend
        to: "info@dancefactory.it",
        subject: `[Nuovo Contatto] Registrazione Prova - ${data.nome}`,
        text: `
Hai ricevuto una nuova richiesta dal modulo contatti del sito.

Dettagli:
- Nome e Cognome: ${data.nome}
- Email: ${data.email}
- Telefono: ${data.telefono || "Non fornito"}
- Corso di interesse: ${data.corso}

Messaggio:
${data.messaggio}
        `.trim(),
        // Optional HTML template:
        html: `
          <h2>Nuova Richiesta di Contatto</h2>
          <p><strong>Nome:</strong> ${data.nome}</p>
          <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
          <p><strong>Telefono:</strong> ${data.telefono || "<em>Non fornito</em>"}</p>
          <p><strong>Corso di interesse:</strong> ${data.corso}</p>
          <h3>Messaggio:</h3>
          <p style="white-space: pre-line; background: #f4f4f5; padding: 15px; border-radius: 8px;">${data.messaggio}</p>
        `,
      });

      if (error) {
        throw new Error(error.message);
      }

      return { success: true };
    } catch (err) {
      console.error("Failed to send email lead:", err);
      throw new Error("Errore durante l'invio del modulo. Riprova più tardi.");
    }
  });
```

---

## 3. Hook up the Client UI Form
In [`src/routes/index.tsx`](file:///c:/Users/rodri/Progetti/msdf/src/routes/index.tsx), import the server function and hook it up to the `<form>` submit handler.

```tsx
// 1. Add the import at the top of src/routes/index.tsx
import { submitContactForm } from "@/lib/actions";

// ... Inside your Index() component:

  const [isSubmitting, setIsSubmitting] = useState(false);

// ... Replace the onSubmit handler in the form:

          <form
            onSubmit={async (e) => {
              e.preventDefault();
              setIsSubmitting(true);

              const formData = new FormData(e.currentTarget);
              const data = {
                nome: formData.get("nome") as string,
                email: formData.get("email") as string,
                telefono: formData.get("telefono") as string,
                corso: formData.get("corso") as string,
                messaggio: formData.get("messaggio") as string,
              };

              try {
                // Execute the Server Function
                await submitContactForm({ data });
                setSent(true);
                toast.success("Richiesta inviata! Ti ricontattiamo entro 24 ore.");
                (e.target as HTMLFormElement).reset();
              } catch (error: any) {
                toast.error(error.message || "Qualcosa è andato storto. Riprova.");
              } finally {
                setIsSubmitting(false);
              }
            }}
            className="rounded-xl border border-border bg-card p-6 sm:p-8"
          >
```

Update your button inside the form to display a loading state:
```tsx
              <button
                type="submit"
                disabled={isSubmitting}
                className="neon-glow rounded-full bg-primary px-6 py-4 text-sm font-bold tracking-widest text-primary-foreground uppercase transition-transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {isSubmitting ? "Invio in corso..." : "Invia richiesta"}
              </button>
```

---

## 4. Set Environment Variables
Create or edit your `.env` file at the root of your project:

```env
RESEND_API_KEY=re_your_secret_resend_api_key
```

> [!NOTE]
> If you deploy to **Vercel** or another host, make sure to add `RESEND_API_KEY` to the environment variables settings in your hosting dashboard.
