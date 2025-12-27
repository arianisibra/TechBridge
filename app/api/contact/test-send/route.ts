import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function GET() {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({
        error: "RESEND_API_KEY is not configured"
      }, { status: 500 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Test email
    const { data, error } = await resend.emails.send({
      from: "TechBridge <onboarding@resend.dev>",
      to: ["info@tech-bridge.ch"],
      subject: "Test E-Mail von TechBridge Website",
      text: "Dies ist eine Test-E-Mail, um zu prüfen, ob Resend funktioniert.",
      html: "<p>Dies ist eine <strong>Test-E-Mail</strong>, um zu prüfen, ob Resend funktioniert.</p>"
    });

    if (error) {
      return NextResponse.json({
        success: false,
        error: error,
        errorDetails: {
          message: error.message,
          name: error.name,
          statusCode: (error as any).statusCode
        }
      }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      messageId: data?.id,
      message: "✅ Test-E-Mail wurde erfolgreich gesendet!"
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: error.message,
      stack: process.env.NODE_ENV === "development" ? error.stack : undefined
    }, { status: 500 });
  }
}

