import { NextRequest, NextResponse } from "next/server";

// TODO: Integrate with:
// - HubSpot CRM
// - Slack notification
// - Email notification
// - n8n webhook

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    const { name, email, company, role, invoiceVolume, message } = body;

    // Validate required fields
    if (!name || !email || !company) {
      return NextResponse.json(
        { error: "Name, email, and company are required" },
        { status: 400 }
      );
    }

    // Log the demo request (replace with actual integration)
    console.log("📬 Demo request received:", {
      name,
      email,
      company,
      role,
      invoiceVolume,
      message,
      timestamp: new Date().toISOString()
    });

    // TODO: Send to HubSpot
    // const hubspotResponse = await fetch('https://api.hubapi.com/...', { ... });

    // TODO: Send Slack notification
    // const slackResponse = await fetch('https://hooks.slack.com/...', { ... });

    // TODO: Send email notification
    // await sendEmail({ to: 'sales@lumafin.ch', subject: 'New demo request', ... });

    // TODO: Trigger n8n webhook
    // await fetch('https://n8n.lumafin.ch/webhook/...', { ... });

    return NextResponse.json({
      success: true,
      message: "Demo request received. We'll be in touch within 24 hours."
    });
  } catch (error) {
    console.error("Error processing demo request:", error);
    return NextResponse.json(
      { error: "Failed to process demo request" },
      { status: 500 }
    );
  }
}

