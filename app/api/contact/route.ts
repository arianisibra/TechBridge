import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, email, message, service, timeline, budget } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, E-Mail und Nachricht sind erforderlich." },
        { status: 400 }
      );
    }

    // Check if Resend is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "E-Mail-Service ist nicht konfiguriert. Bitte kontaktieren Sie uns direkt unter info@tech-bridge.ch" },
        { status: 500 }
      );
    }

    // Format email content
    const serviceLabels: Record<string, string> = {
      web: "Webseite & Design",
      ai: "KI-Automatisierung",
      digitalisation: "Digitalisierung",
      seo: "Wachstum & SEO",
      other: "Nicht sicher / Mehrere"
    };

    const timelineLabels: Record<string, string> = {
      asap: "So bald wie möglich",
      "1-2-months": "1-2 Monate",
      "3-6-months": "3-6 Monate",
      exploring: "Nur orientieren"
    };

    const emailSubject = `Neue Kontaktanfrage: ${serviceLabels[service] || service || "Allgemeine Anfrage"}`;
    
    const emailBody = `
Neue Kontaktanfrage von der TechBridge Website:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
KONTAKTDATEN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: ${name}
Unternehmen: ${company || "Nicht angegeben"}
E-Mail: ${email}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PROJEKTDETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Leistungsbereich: ${serviceLabels[service] || service || "Nicht angegeben"}
Zeitrahmen: ${timelineLabels[timeline] || timeline || "Nicht angegeben"}
Budget: ${budget || "Nicht angegeben"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NACHRICHT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Diese Nachricht wurde über das Kontaktformular auf techbridge.ch gesendet.
    `.trim();

    // Initialize Resend
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send email
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "TechBridge <onboarding@resend.dev>",
      to: ["info@tech-bridge.ch"],
      replyTo: email,
      subject: emailSubject,
      text: emailBody,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0f172a; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px;">
            Neue Kontaktanfrage von der TechBridge Website
          </h2>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #334155; margin-top: 0;">Kontaktdaten</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Unternehmen:</strong> ${company || "Nicht angegeben"}</p>
            <p><strong>E-Mail:</strong> <a href="mailto:${email}">${email}</a></p>
          </div>

          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #334155; margin-top: 0;">Projektdetails</h3>
            <p><strong>Leistungsbereich:</strong> ${serviceLabels[service] || service || "Nicht angegeben"}</p>
            <p><strong>Zeitrahmen:</strong> ${timelineLabels[timeline] || timeline || "Nicht angegeben"}</p>
            <p><strong>Budget:</strong> ${budget || "Nicht angegeben"}</p>
          </div>

          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #334155; margin-top: 0;">Nachricht</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>

          <p style="color: #64748b; font-size: 12px; margin-top: 30px; border-top: 1px solid #e2e8f0; padding-top: 20px;">
            Diese Nachricht wurde über das Kontaktformular auf techbridge.ch gesendet.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Fehler beim Senden der E-Mail. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt unter info@tech-bridge.ch" },
        { status: 500 }
      );
    }

    return NextResponse.json({ 
      success: true, 
      messageId: data?.id 
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt unter info@tech-bridge.ch" },
      { status: 500 }
    );
  }
}
