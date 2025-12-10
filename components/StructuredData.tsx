"use client";

export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Lumafin Business",
    description: "AI-powered invoice automation for modern finance teams",
    url: "https://lumafin.ch",
    logo: "https://lumafin.ch/logo.png",
    sameAs: [
      "https://linkedin.com/company/lumafin",
      "https://twitter.com/lumafin"
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Zurich",
      addressCountry: "CH"
    }
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Lumafin Business",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: "AI invoice automation platform with OCR extraction, approval workflows, and ERP integration",
    offers: {
      "@type": "Offer",
      price: "199",
      priceCurrency: "CHF",
      priceValidUntil: "2025-12-31"
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "127"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How does the AI extraction work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our AI uses advanced OCR and machine learning to read invoices in any format—PDF, scanned images, or photos. It extracts vendor name, invoice number, amounts, VAT, line items, due dates, and payment details with 99.5% accuracy."
        }
      },
      {
        "@type": "Question",
        name: "What accounting systems do you integrate with?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We integrate with Bexio, Abacus, SAP, QuickBooks, Xero, and many more. We also offer a REST API and webhooks for custom integrations."
        }
      },
      {
        "@type": "Question",
        name: "Is my data secure?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We use 256-bit AES encryption for all data at rest and in transit. Data is hosted in ISO 27001 certified data centers in Switzerland. We're GDPR compliant and SOC 2 Type II certified."
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
