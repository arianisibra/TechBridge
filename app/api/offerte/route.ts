import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, selectedCategories } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name und E-Mail sind erforderlich." },
        { status: 400 }
      );
    }

    if (!selectedCategories || selectedCategories.length === 0) {
      return NextResponse.json(
        { error: "Bitte wählen Sie mindestens einen Service aus." },
        { status: 400 }
      );
    }

    // Check if Resend is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("❌ RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "E-Mail-Service ist nicht konfiguriert." },
        { status: 500 }
      );
    }

    // Initialize Resend
    const resend = new Resend(process.env.RESEND_API_KEY);
    const fromEmail = process.env.RESEND_FROM_EMAIL || "TechBridge <noreply@tech-bridge.ch>";
    const recipientEmail = process.env.RESEND_RECIPIENT_EMAIL || "info@tech-bridge.ch";

    // Generate offerte HTML
    const offerteDate = new Date().toLocaleDateString("de-CH", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });

    const servicesHtml = selectedCategories.map((category: any, idx: number) => `
      <tr style="border-bottom: 1px solid #e2e8f0;">
        <td style="padding: 12px 0; color: #334155;">${idx + 1}.</td>
        <td style="padding: 12px 0; color: #334155;">
          <strong>${category.title}</strong><br>
          ${category.companyName ? `<span style="color: #64748b; font-size: 14px;">Firma: ${category.companyName}</span><br>` : ""}
          ${category.websiteUrl ? `<span style="color: #64748b; font-size: 14px;">Website: ${category.websiteUrl}</span><br>` : ""}
          <span style="color: #64748b; font-size: 14px;">${category.description || ""}</span>
        </td>
        <td style="padding: 12px 0; text-align: right; color: #0f172a; font-weight: 600;">Auf Anfrage</td>
      </tr>
    `).join("");

    const timelineText = selectedCategories.map((cat: any) => {
      if (!cat.timeline) return "";
      const timelineMap: Record<string, string> = {
        "asap": "So bald wie möglich",
        "1-2-months": "In 1-2 Monaten",
        "3-6-months": "In 3-6 Monaten",
        "6-12-months": "In 6-12 Monaten",
        "exploring": "Nur orientieren"
      };
      return timelineMap[cat.timeline] || cat.timeline;
    }).filter(Boolean).join(", ");

    const totalFormatted = "Auf Anfrage";

    const offerteHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Offerte - TechBridge</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #334155; max-width: 800px; margin: 0 auto; padding: 20px; background: #f8fafc;">
          <div style="background: white; border-radius: 12px; padding: 40px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
            <!-- Header -->
            <div style="border-bottom: 2px solid #e2e8f0; padding-bottom: 20px; margin-bottom: 30px;">
              <h1 style="color: #0f172a; margin: 0 0 10px 0; font-size: 28px;">Offerte</h1>
              <p style="color: #64748b; margin: 0; font-size: 14px;">Datum: ${offerteDate}</p>
            </div>

            <!-- Company Info -->
            <div style="margin-bottom: 30px;">
              <h2 style="color: #0f172a; font-size: 18px; margin-bottom: 10px;">Angebot für:</h2>
              <p style="margin: 5px 0; color: #334155;"><strong>${name}</strong></p>
              <p style="margin: 5px 0; color: #334155;">${email}</p>
              ${phone ? `<p style="margin: 5px 0; color: #334155;">${phone}</p>` : ""}
            </div>

            ${selectedCategories.some((cat: any) => cat.description) ? `
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 30px; border-left: 4px solid #0f172a;">
              <h3 style="color: #0f172a; margin-top: 0; font-size: 16px;">Projektbeschreibung:</h3>
              ${selectedCategories.map((cat: any) => cat.description ? `
                <div style="margin-bottom: 15px;">
                  <strong style="color: #0f172a;">${cat.title}:</strong>
                  <p style="color: #334155; white-space: pre-wrap; margin: 5px 0 0 0;">${cat.description.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
                </div>
              ` : "").join("")}
            </div>
            ` : ""}
            
            ${timelineText ? `
            <div style="background: #f8fafc; padding: 15px; border-radius: 8px; margin-bottom: 30px;">
              <p style="color: #334155; margin: 0;"><strong>Gewünschter Zeitrahmen:</strong> ${timelineText}</p>
            </div>
            ` : ""}

            <!-- Services Table -->
            <div style="margin-bottom: 30px;">
              <h2 style="color: #0f172a; font-size: 18px; margin-bottom: 15px;">Ausgewählte Services:</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <thead>
                  <tr style="border-bottom: 2px solid #e2e8f0;">
                    <th style="text-align: left; padding: 12px 0; color: #64748b; font-size: 14px; font-weight: 600; width: 40px;">#</th>
                    <th style="text-align: left; padding: 12px 0; color: #64748b; font-size: 14px; font-weight: 600;">Service</th>
                    <th style="text-align: right; padding: 12px 0; color: #64748b; font-size: 14px; font-weight: 600;">Preis</th>
                  </tr>
                </thead>
                <tbody>
                  ${servicesHtml}
                </tbody>
              </table>
            </div>

            <!-- Total -->
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 30px; border: 2px solid #e2e8f0;">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="font-size: 18px; font-weight: 600; color: #0f172a;">Geschätzte Gesamtkosten:</span>
                <span style="font-size: 24px; font-weight: 700; color: #0f172a;">${totalFormatted}</span>
              </div>
              <p style="margin: 10px 0 0 0; font-size: 12px; color: #64748b;">
                * Wir erstellen Ihnen gerne eine detaillierte, massgeschneiderte Offerte basierend auf Ihren spezifischen Anforderungen.
              </p>
            </div>

            <!-- Next Steps -->
            <div style="background: #0f172a; color: white; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
              <h3 style="margin-top: 0; font-size: 16px;">Nächste Schritte:</h3>
              <ol style="margin: 10px 0; padding-left: 20px;">
                <li style="margin-bottom: 8px;">Wir prüfen Ihre Anfrage und melden uns innerhalb von 24 Stunden bei Ihnen.</li>
                <li style="margin-bottom: 8px;">Wir vereinbaren ein kostenloses Beratungsgespräch, um Ihre Anforderungen zu besprechen.</li>
                <li style="margin-bottom: 8px;">Sie erhalten eine detaillierte, massgeschneiderte Offerte mit klaren Projektphasen.</li>
              </ol>
            </div>

            <!-- Footer -->
            <div style="border-top: 1px solid #e2e8f0; padding-top: 20px; margin-top: 30px; text-align: center;">
              <p style="color: #64748b; font-size: 12px; margin: 5px 0;">
                <strong>TechBridge</strong><br>
                Digitalisierung, KI-Automatisierung & Wachstum für Schweizer Unternehmen
              </p>
              <p style="color: #64748b; font-size: 12px; margin: 10px 0 0 0;">
                <a href="mailto:info@tech-bridge.ch" style="color: #0f172a; text-decoration: none;">info@tech-bridge.ch</a> | 
                <a href="https://techbridge.ch" style="color: #0f172a; text-decoration: none;">techbridge.ch</a>
              </p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email to customer
    const { data: customerEmail, error: customerError } = await resend.emails.send({
      from: fromEmail,
      to: [email],
      subject: `Ihre Offerte von TechBridge - ${offerteDate}`,
      html: offerteHtml,
    });

    if (customerError) {
      console.error("❌ Error sending to customer:", customerError);
    }

    // Send notification to TechBridge
    const notificationHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0f172a; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px;">
          Neue Offerten-Anfrage
        </h2>
        
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #334155; margin-top: 0;">Kontaktdaten</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>E-Mail:</strong> <a href="mailto:${email}">${email}</a></p>
          ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ""}
        </div>

        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #334155; margin-top: 0;">Ausgewählte Services</h3>
          <ul style="margin: 0; padding-left: 20px;">
            ${selectedCategories.map((cat: any) => {
              let details = cat.title;
              if (cat.companyName) details += ` - Firma: ${cat.companyName}`;
              if (cat.websiteUrl) details += ` - Website: ${cat.websiteUrl}`;
              if (cat.timeline) {
                const timelineMap: Record<string, string> = {
                  "asap": "So bald wie möglich",
                  "1-2-months": "In 1-2 Monaten",
                  "3-6-months": "In 3-6 Monaten",
                  "6-12-months": "In 6-12 Monaten",
                  "exploring": "Nur orientieren"
                };
                details += ` - Zeitrahmen: ${timelineMap[cat.timeline] || cat.timeline}`;
              }
              return `<li>${details}</li>`;
            }).join("")}
          </ul>
          ${selectedCategories.some((cat: any) => cat.description) ? `
          <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #e2e8f0;">
            <h4 style="color: #334155; margin-top: 0; font-size: 14px;">Projektbeschreibungen:</h4>
            ${selectedCategories.map((cat: any) => cat.description ? `
              <div style="margin-bottom: 10px;">
                <strong>${cat.title}:</strong>
                <p style="white-space: pre-wrap; margin: 5px 0; color: #64748b; font-size: 13px;">${cat.description.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
              </div>
            ` : "").join("")}
          </div>
          ` : ""}
        </div>

        <p style="color: #64748b; font-size: 12px; margin-top: 30px; border-top: 1px solid #e2e8f0; padding-top: 20px;">
          Diese Offerte wurde über den Offerten-Ersteller auf techbridge.ch generiert.
        </p>
      </div>
    `;

    const { data: notificationEmail, error: notificationError } = await resend.emails.send({
      from: fromEmail,
      to: [recipientEmail],
      replyTo: email,
      subject: `Neue Offerten-Anfrage von ${name}`,
      html: notificationHtml,
    });

    if (notificationError) {
      console.error("❌ Error sending notification:", notificationError);
    }

    if (customerError && notificationError) {
      return NextResponse.json(
        { error: "Fehler beim Senden der E-Mails." },
        { status: 500 }
      );
    }

    console.log("✅ Offerte sent successfully!");
    return NextResponse.json({ 
      success: true,
      customerEmailId: customerEmail?.id,
      notificationEmailId: notificationEmail?.id
    });

  } catch (error: any) {
    console.error("❌ Offerte error:", error);
    return NextResponse.json(
      { 
        error: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.",
        details: process.env.NODE_ENV === "development" ? error.message : undefined
      },
      { status: 500 }
    );
  }
}

