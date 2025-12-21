"use client";

import { motion } from "framer-motion";
import { 
  Settings, 
  Globe, 
  Smartphone, 
  Cpu, 
  TrendingUp, 
  ArrowRight,
  Check
} from "lucide-react";

const serviceLines = [
  {
    icon: Settings,
    title: "Digitalisierung & Geschäftsautomatisierung",
    description: "Optimieren Sie Ihre Abläufe und eliminieren Sie manuelle Arbeit mit smarten Integrationen und automatisierten Workflows.",
    features: [
      "Prozessanalyse & Vereinfachung",
      "Integrationen (CRM/ERP/Buchhaltung)",
      "Workflow-Automatisierung (Genehmigungen, Routing, Benachrichtigungen)",
      "Dashboards & Reporting"
    ]
  },
  {
    icon: Globe,
    title: "Web- & Produktentwicklung",
    description: "Schnelle, konversionsfokussierte Websites und Webanwendungen, die Ergebnisse liefern.",
    features: [
      "Websites & Landingpages (konversionsfokussiert)",
      "Web-Apps / Portale",
      "E-Commerce & Buchungssysteme",
      "Wartung & Performance"
    ]
  },
  {
    icon: Smartphone,
    title: "Mobile Entwicklung",
    description: "Native-Qualität Mobile Apps mit React Native für iOS und Android.",
    features: [
      "React Native Apps",
      "Interne Field-Apps & Companion-Apps",
      "API-Integration + Push-Benachrichtigungen",
      "App Store Deployment"
    ]
  },
  {
    icon: Cpu,
    title: "KI, Agenten & Intelligente Workflows",
    description: "Praktische KI-Lösungen, die Zeit sparen und Umsatz steigern – kein Hype, nur Resultate.",
    features: [
      "Dokument-OCR + Extraktion + Validierung",
      "KI-Assistenten für Support/Vertrieb/Operations",
      "Agenten-Workflows (Tools + Guardrails + Audit-Logs)",
      "Wissensdatenbank + Suche (RAG bei Bedarf)"
    ]
  },
  {
    icon: TrendingUp,
    title: "Wachstum: SEO & Digitales Marketing",
    description: "Datengetriebene Wachstumsstrategien, die Sichtbarkeit und Conversions verbessern.",
    features: [
      "Technisches SEO + Performance",
      "Content-Struktur & On-Page-Optimierung",
      "Tracking/Analytics + Conversion-Verbesserungen",
      "KI-unterstützte Kampagnen-Workflows"
    ]
  }
];

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-slate-50 py-20 sm:py-24">
      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm"
          >
            <Settings className="h-4 w-4 text-slate-500" />
            Leistungsbereiche
          </motion.span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Strategie + Entwicklung + Automatisierung + Wachstum
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Alles, was Sie brauchen, um zu digitalisieren, zu bauen und zu skalieren – von einem zuverlässigen Partner.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {serviceLines.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className={`group cursor-pointer rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-lg ${
                idx === 4 ? "lg:col-span-2 lg:max-w-xl lg:mx-auto" : ""
              }`}
            >
              <div className="flex items-start gap-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-100 transition-colors group-hover:bg-slate-900"
                >
                  <service.icon className="h-7 w-7 text-slate-600 transition-colors group-hover:text-white" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                  <p className="mt-2 text-slate-600">{service.description}</p>
                </div>
              </div>
              
              <div className="mt-6 grid gap-2 sm:grid-cols-2">
                {service.features.map((feature) => (
                  <motion.div
                    key={feature}
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-2 text-sm text-slate-700"
                  >
                    <Check className="h-4 w-4 shrink-0 text-slate-400 mt-0.5" />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-6 flex items-center gap-2 text-sm font-medium text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                Mehr erfahren
                <ArrowRight className="h-4 w-4" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
