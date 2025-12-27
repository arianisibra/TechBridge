import { NextResponse } from "next/server";

export async function GET() {
  // Check if Resend API key is configured
  const hasApiKey = !!process.env.RESEND_API_KEY;
  const apiKeyLength = process.env.RESEND_API_KEY?.length || 0;
  const apiKeyPrefix = process.env.RESEND_API_KEY?.substring(0, 3) || "N/A";
  
  return NextResponse.json({
    resendConfigured: hasApiKey,
    apiKeyLength: apiKeyLength,
    apiKeyPrefix: apiKeyPrefix,
    fromEmail: process.env.RESEND_FROM_EMAIL || "TechBridge <onboarding@resend.dev>",
    nodeEnv: process.env.NODE_ENV,
    message: hasApiKey 
      ? "✅ RESEND_API_KEY ist konfiguriert" 
      : "❌ RESEND_API_KEY fehlt! Bitte in Netlify Environment Variables hinzufügen."
  });
}

