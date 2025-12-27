"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { SectionDivider } from "@/components/SectionDivider";
import { 
  Settings, 
  Palette,
  Cpu, 
  TrendingUp, 
  Check,
  ArrowRight
} from "lucide-react";

const serviceLines = [
  {
    id: "web",
    icon: Palette,
    title: "Webseite & Design",
    whatItIs: "Wir bauen moderne, konversionsstarke Websites mit durchdachtem Design. Von einfachen Landingpages bis zu komplexen Kundenportalen und E-Commerce-Lösungen.",
    deliverables: [
      "Responsive Webdesign",
      "Landingpages & Corporate Sites",
      "E-Commerce & Portale",
      "UI/UX Design",
      "Performance-Optimierung & Wartung"
    ],
    bestFor: "Unternehmen, die eine neue Website brauchen, ihre bestehende Seite modernisieren oder konversionsstarke Landingpages benötigen."
  },
  {
    id: "ai",
    icon: Cpu,
    title: "KI-Automatisierung",
    whatItIs: "Wir implementieren praktische KI-Lösungen, die Zeit sparen und Prozesse optimieren. Dokumentenverarbeitung, KI-Assistenten und intelligente Automatisierung – kein Hype, nur messbare Resultate.",
    deliverables: [
      "Dokument-OCR & Extraktion",
      "KI-Assistenten & Chatbots",
      "Workflow-Automatisierung",
      "Intelligente Datenverarbeitung",
      "Wissensdatenbank + Suche"
    ],
    bestFor: "Unternehmen mit hohem Dokumentenaufkommen, wiederkehrenden Support-Anfragen oder Möglichkeiten für intelligente Automatisierung."
  },
  {
    id: "digitalisation",
    icon: Settings,
    title: "Digitalisierung",
    whatItIs: "Wir analysieren Ihre bestehenden Prozesse und implementieren digitale Lösungen, die manuelle Arbeit eliminieren, Fehler reduzieren und Ihnen Echtzeit-Einblick in Ihre Abläufe geben.",
    deliverables: [
      "Prozessanalyse & Optimierung",
      "System-Integrationen (CRM/ERP/Buchhaltung)",
      "Automatisierte Workflows",
      "Dashboards & Reporting",
      "Datenmigration & Bereinigung"
    ],
    bestFor: "Unternehmen mit manuellen Prozessen, Excel-lastigen Abläufen oder unverbundenen Systemen, die modernisieren müssen."
  },
  {
    id: "seo",
    icon: TrendingUp,
    title: "Wachstum & SEO",
    whatItIs: "Wir verbessern Ihre Online-Sichtbarkeit mit technischem SEO, Content-Optimierung und Conversion-Verbesserungen. Datengetrieben, messbar, keine Vanity-Metriken.",
    deliverables: [
      "Technisches SEO",
      "Content-Optimierung",
      "Performance & Speed",
      "Conversion-Optimierung",
      "Analytics & Reporting"
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
        <section className="bg-white py-20 sm:py-24 md:py-28">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="mx-auto max-w-3xl text-center"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-600 shadow-sm"
              >
                <Settings className="h-4 w-4 text-slate-500" />
                Unsere Leistungen
              </motion.span>
              <h1 className="mt-8 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl mb-8">
                Was wir für Sie tun
              </h1>
              <p className="text-lg text-slate-600 sm:text-xl leading-relaxed">
                Vier Kernbereiche. Ein Partner.
                <br className="hidden sm:block" />
                <span className="text-slate-500">Messbare Ergebnisse.</span>
              </p>
            </motion.div>
          </div>
        </section>

        <SectionDivider />

        {/* Service Lines */}
        <section className="bg-slate-50 py-20 sm:py-24 md:py-28">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="space-y-16">
              {serviceLines.map((service, idx) => (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.7 }}
                  className="scroll-mt-24"
                >
                  <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm lg:p-12">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12">
                      {/* Left: Header */}
                      <div className="lg:w-1/3">
                        <motion.div
                          whileHover={{ scale: 1.15, rotate: 10 }}
                          className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900"
                        >
                          <service.icon className="h-8 w-8 text-white" />
                        </motion.div>
                        <h2 className="mt-6 text-2xl font-bold text-slate-900">
                          {service.title}
                        </h2>
                      </div>

                      {/* Right: Content */}
                      <div className="mt-8 lg:mt-0 lg:flex-1">
                        <div className="space-y-8">
                          {/* What it is */}
                          <div>
                            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">
                              Was es ist
                            </h3>
                            <p className="text-slate-700 leading-relaxed text-base">
                              {service.whatItIs}
                            </p>
                          </div>

                          {/* Typical deliverables */}
                          <div>
                            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">
                              Typische Lieferergebnisse
                            </h3>
                            <ul className="grid gap-3 sm:grid-cols-2">
                              {service.deliverables.map((item) => (
                                <li key={item} className="flex items-start gap-3 text-slate-700">
                                  <Check className="h-5 w-5 shrink-0 text-emerald-500 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Best for */}
                          <div className="rounded-xl bg-slate-50 p-6 border border-slate-100">
                            <h3 className="text-sm font-semibold text-slate-900 mb-2">
                              Ideal für
                            </h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                              {service.bestFor}
                            </p>
                          </div>

                          <motion.a
                            href="/contact"
                            whileHover={{ x: 6 }}
                            className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-slate-700 transition"
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
