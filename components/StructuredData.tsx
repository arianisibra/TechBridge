"use client";

export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TechBridge",
    description: "Digitalisierung, Produktentwicklung & KI-Automatisierung für Schweizer Unternehmen",
    url: "https://techbridge.ch",
    logo: "https://techbridge.ch/logo.png",
    sameAs: [
      "https://linkedin.com/company/techbridge-ch"
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Schweiz",
      addressCountry: "CH"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "TechBridge",
    description: "Schweizer Digitalisierungspartner für Webentwicklung, Mobile Apps, KI-Automatisierung und Wachstumsstrategien",
    url: "https://techbridge.ch",
    areaServed: {
      "@type": "Country",
      name: "Schweiz"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digitale Dienstleistungen",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web- & Produktentwicklung"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mobile Entwicklung"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "KI & Automatisierung"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SEO & Digitales Marketing"
          }
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "An welchen Projekten arbeiten Sie?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wir arbeiten an Websites, Web-Apps, Mobile Apps (React Native), KI-Automatisierung, Workflow-Integration und SEO/Wachstumsprojekten. Unser Fokus liegt auf Schweizer KMUs, die einen zuverlässigen Partner für digitale Projekte brauchen."
        }
      },
      {
        "@type": "Question",
        name: "Wie gehen Sie KI-Projekte an?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wir setzen KI praktisch ein – Dokument-OCR, KI-Assistenten, Workflow-Automatisierung. Jedes KI-Feature muss nachweislich Zeit sparen oder Umsatz steigern."
        }
      },
      {
        "@type": "Question",
        name: "Bieten Sie laufenden Support nach dem Launch?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja. Wir bieten Wartungspakete für Hosting, Updates und Verbesserungen. Viele Kunden arbeiten kontinuierlich mit uns an Iterationen und neuen Features."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
