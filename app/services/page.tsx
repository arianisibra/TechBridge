"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { SectionDivider } from "@/components/SectionDivider";
import { 
  Settings, 
  Globe, 
  Smartphone, 
  Cpu, 
  TrendingUp, 
  Check,
  ArrowRight
} from "lucide-react";

const serviceLines = [
  {
    id: "digitalisation",
    icon: Settings,
    title: "Digitalisierung & Geschäftsautomatisierung",
    whatItIs: "Wir analysieren Ihre bestehenden Prozesse und implementieren digitale Lösungen, die manuelle Arbeit eliminieren, Fehler reduzieren und Ihnen Echtzeit-Einblick in Ihre Abläufe geben.",
    deliverables: [
      "Prozessanalyse & Dokumentation",
      "CRM/ERP/Buchhaltungs-Integrationen",
      "Automatisierte Workflows (Genehmigungen, Routing, Benachrichtigungen)",
      "Massgeschneiderte Dashboards & Reporting",
      "Datenmigration & Bereinigung"
    ],
    bestFor: "Unternehmen mit manuellen Prozessen, Excel-lastigen Abläufen oder unverbundenen Systemen, die modernisieren müssen."
  },
  {
    id: "web",
    icon: Globe,
    title: "Web- & Produktentwicklung",
    whatItIs: "Wir bauen schnelle, konversionsfokussierte Websites und Webanwendungen mit modernen Technologien. Von einfachen Landingpages bis zu komplexen Kundenportalen und internen Tools.",
    deliverables: [
      "Unternehmenswebsites & Landingpages",
      "Webanwendungen & Kundenportale",
      "E-Commerce & Buchungssysteme",
      "Content-Management-Setup",
      "Performance-Optimierung & Wartung"
    ],
    bestFor: "Unternehmen, die eine neue Website brauchen, ihre bestehende Seite modernisieren oder massgeschneiderte Webanwendungen benötigen."
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile Entwicklung",
    whatItIs: "Wir entwickeln plattformübergreifende Mobile Apps mit React Native – eine Codebasis für iOS und Android, mit nativer Performance. Von kundenorientierten Apps bis zu internen Field-Tools.",
    deliverables: [
      "React Native Apps (iOS + Android)",
      "Interne Field-Apps & Companion-Apps",
      "API-Integration & Backend-Anbindung",
      "Push-Benachrichtigungen & Offline-Support",
      "App Store Submission & Deployment"
    ],
    bestFor: "Unternehmen, die ein Mobile App MVP brauchen, interne Tools für Aussendienstteams oder Companion-Apps für bestehende Services."
  },
  {
    id: "ai",
    icon: Cpu,
    title: "KI, Agenten & Intelligente Workflows",
    whatItIs: "Wir implementieren praktische KI-Lösungen, die Zeit sparen und Umsatz steigern. Dokumentenverarbeitung, KI-Assistenten und intelligente Automatisierung – kein Hype, nur messbare Resultate.",
    deliverables: [
      "Dokument-OCR + Extraktion + Validierung",
      "KI-Assistenten für Support/Vertrieb/Operations",
      "Agenten-Workflows mit Guardrails & Audit-Logs",
      "Wissensdatenbank + semantische Suche (RAG)",
      "Individuelle KI-Integrationen"
    ],
    bestFor: "Unternehmen mit hohem Dokumentenaufkommen, wiederkehrenden Support-Anfragen oder Möglichkeiten für intelligente Automatisierung."
  },
  {
    id: "seo",
    icon: TrendingUp,
    title: "Wachstum: SEO & Digitales Marketing",
    whatItIs: "Wir verbessern Ihre Online-Sichtbarkeit mit technischem SEO, Content-Optimierung und Conversion-Verbesserungen. Datengetrieben, messbar, keine Vanity-Metriken.",
    deliverables: [
      "Technisches SEO Audit & Umsetzung",
      "Content-Struktur & On-Page-Optimierung",
      "Analytics-Setup & Conversion-Tracking",
      "Performance-Monitoring & Reporting",
      "KI-unterstützte Kampagnen-Workflows"
    ],
    bestFor: "Unternehmen, die mehr organischen Traffic wollen, bessere lokale Sichtbarkeit brauchen oder Conversion-Raten verbessern möchten."
  }
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mx-auto max-w-3xl text-center"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm"
              >
                <Settings className="h-4 w-4 text-slate-500" />
                Unsere Leistungen
              </motion.span>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                Strategie + Entwicklung + Automatisierung + Wachstum
              </h1>
              <p className="mt-4 text-lg text-slate-600">
                Fünf Leistungsbereiche. Ein Partner. Alles, was Sie brauchen, um zu digitalisieren, zu bauen und zu skalieren.
              </p>
            </motion.div>
          </div>
        </section>

        <SectionDivider />

        {/* Service Lines */}
        <section className="bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="space-y-16">
              {serviceLines.map((service, idx) => (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="scroll-mt-24"
                >
                  <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12">
                      {/* Left: Header */}
                      <div className="lg:w-1/3">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900"
                        >
                          <service.icon className="h-7 w-7 text-white" />
                        </motion.div>
                        <h2 className="mt-4 text-2xl font-semibold text-slate-900">
                          {service.title}
                        </h2>
                      </div>

                      {/* Right: Content */}
                      <div className="mt-6 lg:mt-0 lg:flex-1">
                        <div className="space-y-6">
                          {/* What it is */}
                          <div>
                            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
                              Was es ist
                            </h3>
                            <p className="mt-2 text-slate-700">
                              {service.whatItIs}
                            </p>
                          </div>

                          {/* Typical deliverables */}
                          <div>
                            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
                              Typische Lieferergebnisse
                            </h3>
                            <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                              {service.deliverables.map((item) => (
                                <li key={item} className="flex items-start gap-2 text-slate-700">
                                  <Check className="h-4 w-4 shrink-0 text-slate-400 mt-1" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Best for */}
                          <div className="rounded-xl bg-slate-50 p-4">
                            <h3 className="text-sm font-semibold text-slate-900">
                              Ideal für
                            </h3>
                            <p className="mt-1 text-sm text-slate-600">
                              {service.bestFor}
                            </p>
                          </div>

                          <motion.a
                            href="/contact"
                            whileHover={{ x: 4 }}
                            className="inline-flex items-center gap-2 text-sm font-medium text-slate-900"
                          >
                            Projekt besprechen
                            <ArrowRight className="h-4 w-4" />
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
