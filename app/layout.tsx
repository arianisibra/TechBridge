import type { Metadata } from "next";
import "./globals.css";
import { ToastProvider } from "@/components/Toast";
import { StructuredData } from "@/components/StructuredData";
import { ScrollToTop } from "@/components/ScrollToTop";
import { CookieConsent } from "@/components/CookieConsent";
import { ChatWidget } from "@/components/ChatWidget";

export const metadata: Metadata = {
  title: "Lumafin Business – AI Invoice Automation for Modern Teams",
  description:
    "Automate invoice processing with AI. OCR extraction, approval workflows, validation rules, and seamless ERP sync. Reduce processing time by 80%.",
  keywords: ["invoice automation", "AI invoice processing", "OCR extraction", "AP automation", "approval workflows", "accounts payable", "invoice management", "B2B fintech"],
  authors: [{ name: "Lumafin Business" }],
  creator: "Lumafin Business",
  publisher: "Lumafin Business",
  metadataBase: new URL("https://lumafin.ch"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Lumafin Business – AI Invoice Automation",
    description:
      "Automate invoice intake, extraction, validation, approvals, and ERP sync. Built for finance teams.",
    url: "https://lumafin.ch",
    siteName: "Lumafin Business",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Lumafin Business Invoice Dashboard" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumafin Business – AI Invoice Automation",
    description:
      "Automate invoice intake, extraction, validation, approvals, and ERP sync. Built for finance teams.",
    images: ["/og.png"],
    creator: "@lumafin",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <StructuredData />
      </head>
      <body className="bg-white text-slate-900 antialiased font-sans">
        <ToastProvider>
          {children}
          <ChatWidget />
          <ScrollToTop />
          <CookieConsent />
        </ToastProvider>
      </body>
    </html>
  );
}
