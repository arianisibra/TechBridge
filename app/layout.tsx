import type { Metadata } from "next";
import "./globals.css";
import { ToastProvider } from "@/components/Toast";
import { StructuredData } from "@/components/StructuredData";
import { ScrollToTop } from "@/components/ScrollToTop";
import { CookieConsent } from "@/components/CookieConsent";
import { ChatWidget } from "@/components/ChatWidget";

export const metadata: Metadata = {
  title: "TechBridge – Digitalisierung, Produktentwicklung & KI-Automatisierung",
  description:
    "Wir modernisieren Ihre digitale Präsenz, entwickeln Web- und Mobile-Produkte, automatisieren Workflows mit KI und helfen Ihnen zu wachsen. Schweizer Ansprechpartner, zuverlässige Lieferung.",
  keywords: ["Digitalisierung", "Webentwicklung", "Mobile App", "KI-Automatisierung", "Schweiz", "Produktentwicklung", "SEO", "Workflow-Automatisierung", "React Native", "Next.js"],
  authors: [{ name: "TechBridge" }],
  creator: "TechBridge",
  publisher: "TechBridge",
  metadataBase: new URL("https://techbridge.ch"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "TechBridge – Digitalisierung & Produktentwicklung",
    description:
      "Strategie + Entwicklung + Automatisierung + Wachstum. Ihr Schweizer Digitalisierungspartner.",
    url: "https://techbridge.ch",
    siteName: "TechBridge",
    type: "website",
    locale: "de_CH",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "TechBridge – Schweizer Digitalisierungspartner" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "TechBridge – Digitalisierung & Produktentwicklung",
    description:
      "Strategie + Entwicklung + Automatisierung + Wachstum. Ihr Schweizer Digitalisierungspartner.",
    images: ["/og.png"],
    creator: "@techbridge_ch",
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
    <html lang="de" className="scroll-smooth">
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
