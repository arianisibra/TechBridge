"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { SectionDivider } from "@/components/SectionDivider";
import { 
  Globe, 
  TrendingUp, 
  FileText, 
  Smartphone,
  ArrowRight,
  Building2,
  CheckCircle
} from "lucide-react";

const caseStudies = [
  {
    icon: Globe,
    title: "KMU Website-Relaunch + Lead-Tracking",
    client: "Schweizer KMU (Branche vertraulich)",
    category: "Webentwicklung",
    challenge: "Veraltete Website mit schlechten Conversion-Raten und keiner Transparenz über Lead-Quellen. Der Kunde verlor potenzielle Kunden an Wettbewerber mit besserer Online-Präsenz.",
    solution: "Komplettes Website-Redesign mit modernem Tech-Stack (Next.js), optimiert für Geschwindigkeit und Conversions. Lead-Tracking, Analytics und CRM-Integration implementiert.",
    outcomes: [
      "Schnellere Seitenladezeit (Beispiel: von 4s auf unter 1s)",
      "Verbesserte Lead-Formular-Conversion",
      "Volle Transparenz über Traffic-Quellen und Lead-Qualität",
      "Mobile-first Design mit besserer UX"
    ],
    tags: ["Next.js", "Lead-Generierung", "Analytics"]
  },
  {
    icon: TrendingUp,
    title: "SEO + Performance-Verbesserungen",
    client: "Schweizer KMU (Branche vertraulich)",
    category: "SEO & Wachstum",
    challenge: "Schlechte organische Sichtbarkeit trotz qualitativ hochwertiger Services. Technische Probleme verhinderten Rankings, und die lokale Suchpräsenz war minimal.",
    solution: "Technisches SEO Audit und Umsetzung, Content-Restrukturierung, lokale SEO-Optimierung und Performance-Verbesserungen. Laufendes Monitoring und Reporting.",
    outcomes: [
      "Verbesserter organischer Traffic (Beispiel: signifikanter Anstieg über 6 Monate)",
      "Bessere lokale Suchsichtbarkeit",
      "Schnellere Site-Performance (Core Web Vitals bestanden)",
      "Klares Tracking und monatliches Reporting"
    ],
    tags: ["Technisches SEO", "Lokales SEO", "Performance"]
  },
  {
    icon: FileText,
    title: "Backoffice-Automatisierung mit OCR",
    client: "Schweizer KMU (Branche vertraulich)",
    category: "KI & Automatisierung",
    challenge: "Manuelle Rechnungsverarbeitung verbrauchte wöchentlich Stunden an Mitarbeiterzeit. Dokumente kamen in verschiedenen Formaten, und die Dateneingabe war fehleranfällig.",
    solution: "OCR-basierte Dokumentenextraktion mit Validierungsregeln und automatisiertem Routing implementiert. Integration mit bestehendem Buchhaltungssystem für nahtlosen Export.",
    outcomes: [
      "Reduzierte Bearbeitungszeit (Beispiel: von 15 Min. auf 2 Min. pro Dokument)",
      "Weniger Dateneingabefehler",
      "Automatische Validierung und Ausnahme-Flagging",
      "Direkter Export ins Buchhaltungssystem"
    ],
    tags: ["OCR", "Automatisierung", "Integration"]
  },
  {
    icon: Smartphone,
    title: "Web- oder Mobile-Produkt MVP",
    client: "Schweizer KMU (Branche vertraulich)",
    category: "Produktentwicklung",
    challenge: "Idee für ein digitales Produkt, aber kein technisches Team zum Bauen. Musste das Konzept schnell validieren, ohne zu viel zu investieren.",
    solution: "MVP mit React Native (Mobile) / Next.js (Web) in iterativen Sprints gebaut. Wöchentliche Demos, Integration von Nutzer-Feedback und saubere Code-Übergabe.",
    outcomes: [
      "Funktionierendes MVP im definierten Zeitrahmen geliefert",
      "Echte Nutzervalidierung der Kernfeatures",
      "Saubere, dokumentierte Codebasis für Weiterentwicklung",
      "Klarer Weg für nächste Iteration"
    ],
    tags: ["MVP", "React Native", "Next.js"]
  }
];

export default function WorkPage() {
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
                <Building2 className="h-4 w-4 text-slate-500" />
                Unsere Projekte
              </motion.span>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                Echte Projekte, echte Ergebnisse
              </h1>
              <p className="mt-4 text-lg text-slate-600">
                Ausgewählte Fallstudien unserer Arbeit mit Schweizer Unternehmen. Kundennamen aus Vertraulichkeitsgründen nicht genannt.
              </p>
            </motion.div>
          </div>
        </section>

        <SectionDivider />

        {/* Case Studies */}
        <section className="bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2">
              {caseStudies.map((study, idx) => (
                <motion.div
                  key={study.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-lg"
                >
                  <div className="flex items-start justify-between">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900"
                    >
                      <study.icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                      {study.category}
                    </span>
                  </div>

                  <h2 className="mt-4 text-xl font-semibold text-slate-900">
                    {study.title}
                  </h2>
                  
                  <p className="mt-1 text-sm text-slate-500">
                    Kunde: {study.client}
                  </p>

                  <div className="mt-6 space-y-4">
                    <div>
                      <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
                        Herausforderung
                      </h3>
                      <p className="mt-1 text-sm text-slate-600">
                        {study.challenge}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
                        Lösung
                      </h3>
                      <p className="mt-1 text-sm text-slate-600">
                        {study.solution}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
                        Ergebnisse
                      </h3>
                      <ul className="mt-2 space-y-1">
                        {study.outcomes.map((outcome) => (
                          <li key={outcome} className="flex items-start gap-2 text-sm text-slate-600">
                            <CheckCircle className="h-4 w-4 shrink-0 text-slate-400 mt-0.5" />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <p className="text-slate-600 mb-4">
                Möchten Sie weitere Beispiele sehen, die zu Ihrer Branche passen?
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-sm font-semibold text-white shadow-lg hover:bg-slate-800"
              >
                Lassen Sie uns sprechen
                <ArrowRight className="h-4 w-4" />
              </motion.a>
            </motion.div>
          </div>
        </section>

        <SectionDivider />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
