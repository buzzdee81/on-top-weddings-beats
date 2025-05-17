
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  date?: string;
  eventLocation?: string;
  message: string;
}

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const formData = await req.json() as ContactFormData;
    
    // Validierung der Anfrage
    if (!formData.name || !formData.email || !formData.message) {
      return new Response(
        JSON.stringify({
          error: "Bitte füllen Sie alle Pflichtfelder aus."
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // E-Mail-Inhalte vorbereiten
    const subject = `Neue Kontaktanfrage von ${formData.name}`;
    const body = `
      Name: ${formData.name}
      E-Mail: ${formData.email}
      Telefon: ${formData.phone || 'Nicht angegeben'}
      Wunschdatum: ${formData.date || 'Nicht angegeben'}
      Veranstaltungsort: ${formData.eventLocation || 'Nicht angegeben'}
      
      Nachricht:
      ${formData.message}
    `;

    // E-Mail senden mit Resend API
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY nicht gefunden");
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Kontaktformular <noreply@ontop-band.de>",
        to: ["info@ontop-band.de"],
        subject: subject,
        text: body,
        reply_to: formData.email,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Beim Senden der E-Mail ist ein Fehler aufgetreten");
    }

    return new Response(
      JSON.stringify({ success: true }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Fehler beim Senden der E-Mail:", error);
    
    return new Response(
      JSON.stringify({
        error: "Beim Senden der Anfrage ist ein Fehler aufgetreten.",
        details: error.message,
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
