"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { SectionDivider } from "@/components/SectionDivider";
import { 
  Building2, 
  Star,
  CheckCircle,
  Globe,
  TrendingUp,
  FileText,
  Smartphone,
  ShoppingCart,
  MessageSquare,
  Users,
  BarChart3
} from "lucide-react";

const references = [
  {
    name: "Schweizer KMU",
    industry: "Dienstleistungen",
    location: "Schweiz",
    project: "Website-Relaunch & SEO",
    projectType: "Webentwicklung",
    icon: Globe,
    testimonial: "Professionelle Umsetzung, schnelle Reaktionszeiten und messbare Ergebnisse. TechBridge hat unsere Website komplett modernisiert und die SEO-Performance deutlich verbessert. Sehr zufrieden!",
    results: [
      "Schnellere Ladezeiten (von 4s auf unter 1s)",
      "Verbesserte SEO-Rankings",
      "Höhere Conversion-Rate",
      "Moderne, responsive Website"
    ],
    rating: 5,
    tags: ["Next.js", "SEO", "Performance"]
  },
  {
    name: "Schweizer KMU",
    industry: "Handel",
    location: "Schweiz",
    project: "E-Commerce Optimierung",
    projectType: "E-Commerce",
    icon: ShoppingCart,
    testimonial: "Die Conversion-Rate hat sich deutlich verbessert. TechBridge versteht unser Business und hat konkrete, messbare Verbesserungen umgesetzt. Die Zusammenarbeit war sehr professionell.",
    results: [
      "Höhere Conversion-Rate",
      "Bessere User Experience",
      "Optimierte Checkout-Prozesse",
      "Mobile-First Design"
    ],
    rating: 5,
    tags: ["E-Commerce", "Conversion", "UX"]
  },
  {
    name: "Schweizer KMU",
    industry: "Produktion",
    location: "Schweiz",
    project: "Backoffice-Automatisierung",
    projectType: "KI & Automatisierung",
    icon: FileText,
    testimonial: "Zeitersparnis von mehreren Stunden pro Woche. Die Automatisierung funktioniert einwandfrei und hat unsere Prozesse deutlich effizienter gemacht. Sehr empfehlenswert!",
    results: [
      "Zeitersparnis: 15 Min. → 2 Min. pro Dokument",
      "Weniger Fehler bei Dateneingabe",
      "Automatische Validierung",
      "Nahtlose Integration"
    ],
    rating: 5,
    tags: ["OCR", "Automatisierung", "Integration"]
  },
  {
    name: "Schweizer KMU",
    industry: "Beratung",
    location: "Schweiz",
    project: "Mobile App MVP",
    projectType: "Mobile Entwicklung",
    icon: Smartphone,
    testimonial: "Schnelle Umsetzung, sauberer Code und gute Kommunikation. Perfekt für unser MVP. TechBridge hat unsere Vision verstanden und in kürzester Zeit umgesetzt.",
    results: [
      "Funktionierendes MVP im Zeitrahmen",
      "Saubere Codebasis",
      "React Native für iOS & Android",
      "Gute Dokumentation"
    ],
    rating: 5,
    tags: ["React Native", "MVP", "Mobile"]
  },
  {
    name: "Schweizer KMU",
    industry: "Dienstleistungen",
    location: "Schweiz",
    project: "KI-Support-Assistent",
    projectType: "KI & Automatisierung",
    icon: MessageSquare,
    testimonial: "Der KI-Assistent beantwortet die meisten Support-Anfragen automatisch. Das entlastet unser Team erheblich und die Kunden erhalten schnelle Antworten. Top Lösung!",
    results: [
      "Automatische Beantwortung von Support-Anfragen",
      "Entlastung des Support-Teams",
      "24/7 Verfügbarkeit",
      "Lernfähiges System"
    ],
    rating: 5,
    tags: ["KI", "Support", "Chatbot"]
  },
  {
    name: "Schweizer KMU",
    industry: "Handel",
    location: "Schweiz",
    project: "CRM-Integration & Lead-Tracking",
    projectType: "Digitalisierung",
    icon: Users,
    testimonial: "Endlich haben wir volle Transparenz über unsere Leads und können die Qualität besser einschätzen. Die Integration funktioniert nahtlos und spart uns viel Zeit.",
    results: [
      "Automatisierte Lead-Verarbeitung",
      "Volle Transparenz über Lead-Quellen",
      "CRM-Integration",
      "Besseres Lead-Management"
    ],
    rating: 5,
    tags: ["CRM", "Integration", "Analytics"]
  },
  {
    name: "Schweizer KMU",
    industry: "Dienstleistungen",
    location: "Schweiz",
    project: "Business-Dashboard",
    projectType: "Web-App",
    icon: BarChart3,
    testimonial: "Unser Dashboard zeigt alle wichtigen KPIs in Echtzeit. Das hilft uns, bessere Entscheidungen zu treffen und Trends früher zu erkennen. Sehr nützlich!",
    results: [
      "KPIs in Echtzeit",
      "Besseres Reporting",
      "Trend-Analysen",
      "Intuitive Benutzeroberfläche"
    ],
    rating: 5,
    tags: ["Dashboard", "Analytics", "Web-App"]
  },
  {
    name: "Schweizer KMU",
    industry: "Handel",
    location: "Schweiz",
    project: "SEO & Performance-Verbesserungen",
    projectType: "SEO & Wachstum",
    icon: TrendingUp,
    testimonial: "Die organische Sichtbarkeit hat sich deutlich verbessert. TechBridge hat technische Probleme behoben und unsere lokale SEO optimiert. Sehr professionell!",
    results: [
      "Verbesserter organischer Traffic",
      "Bessere lokale Sichtbarkeit",
      "Technisches SEO optimiert",
      "Core Web Vitals bestanden"
    ],
    rating: 5,
    tags: ["SEO", "Performance", "Lokales SEO"]
  }
];

export default function ReferenzenPage() {
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
                <Star className="h-4 w-4 text-slate-500" />
                Referenzen
              </motion.span>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                Was unsere Kunden sagen
              </h1>
              <p className="mt-4 text-lg text-slate-600">
                Vertrauen Sie auf die Erfahrung unserer zufriedenen Kunden aus verschiedenen Branchen.
              </p>
            </motion.div>
          </div>
        </section>

        <SectionDivider />

        {/* Projects Section */}
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">
                Konkrete Projekte
              </h2>
              <p className="text-lg text-slate-600">
                Echte Projekte mit Schweizer Unternehmen. Herausforderungen, Lösungen und messbare Ergebnisse.
              </p>
            </motion.div>

            <div className="grid gap-8 lg:grid-cols-2 mb-20">
              {[
                {
                  company: "Schweizer KMU",
                  industry: "Dienstleistungen",
                  location: "Zürich, Schweiz",
                  project: "Website-Relaunch & SEO-Optimierung",
                  projectType: "Webentwicklung",
                  icon: Globe,
                  challenge: "Veraltete Website mit schlechten Conversion-Raten und keiner Transparenz über Lead-Quellen.",
                  solution: "Komplettes Website-Redesign mit modernem Tech-Stack (Next.js), optimiert für Geschwindigkeit und Conversions. Lead-Tracking, Analytics und CRM-Integration implementiert.",
                  results: [
                    "Schnellere Seitenladezeit (von 4s auf unter 1s)",
                    "Verbesserte Lead-Formular-Conversion",
                    "Volle Transparenz über Traffic-Quellen und Lead-Qualität",
                    "Mobile-first Design mit besserer UX"
                  ],
                  tags: ["Next.js", "SEO", "Lead-Generierung", "Analytics"]
                },
                {
                  company: "Schweizer KMU",
                  industry: "Handel",
                  location: "Bern, Schweiz",
                  project: "E-Commerce Optimierung & Conversion",
                  projectType: "E-Commerce",
                  icon: ShoppingCart,
                  challenge: "Niedrige Conversion-Rate trotz gutem Traffic. Checkout-Prozess zu komplex.",
                  solution: "UX-Analyse und Optimierung des Checkout-Prozesses. Mobile-First Redesign, Performance-Optimierung und A/B-Testing implementiert.",
                  results: [
                    "Höhere Conversion-Rate (signifikanter Anstieg)",
                    "Bessere User Experience",
                    "Optimierte Checkout-Prozesse",
                    "Mobile-First Design"
                  ],
                  tags: ["E-Commerce", "Conversion", "UX", "Performance"]
                },
                {
                  company: "Schweizer KMU",
                  industry: "Produktion",
                  location: "Basel, Schweiz",
                  project: "Backoffice-Automatisierung mit OCR",
                  projectType: "KI & Automatisierung",
                  icon: FileText,
                  challenge: "Manuelle Rechnungsverarbeitung verbrauchte wöchentlich Stunden an Mitarbeiterzeit. Dokumente kamen in verschiedenen Formaten.",
                  solution: "OCR-basierte Dokumentenextraktion mit Validierungsregeln und automatisiertem Routing implementiert. Integration mit bestehendem Buchhaltungssystem.",
                  results: [
                    "Reduzierte Bearbeitungszeit (von 15 Min. auf 2 Min. pro Dokument)",
                    "Weniger Dateneingabefehler",
                    "Automatische Validierung und Ausnahme-Flagging",
                    "Direkter Export ins Buchhaltungssystem"
                  ],
                  tags: ["OCR", "Automatisierung", "Integration", "KI"]
                },
                {
                  company: "Schweizer KMU",
                  industry: "Beratung",
                  location: "Genf, Schweiz",
                  project: "Mobile App MVP Entwicklung",
                  projectType: "Mobile Entwicklung",
                  icon: Smartphone,
                  challenge: "Idee für ein digitales Produkt, aber kein technisches Team zum Bauen. Konzept schnell validieren ohne zu viel zu investieren.",
                  solution: "MVP mit React Native (Mobile) in iterativen Sprints gebaut. Wöchentliche Demos, Integration von Nutzer-Feedback und saubere Code-Übergabe.",
                  results: [
                    "Funktionierendes MVP im definierten Zeitrahmen geliefert",
                    "Echte Nutzervalidierung der Kernfeatures",
                    "Saubere, dokumentierte Codebasis für Weiterentwicklung",
                    "Klarer Weg für nächste Iteration"
                  ],
                  tags: ["React Native", "MVP", "Mobile", "iOS", "Android"]
                },
                {
                  company: "Schweizer KMU",
                  industry: "Dienstleistungen",
                  location: "Lausanne, Schweiz",
                  project: "KI-Support-Assistent & Chatbot",
                  projectType: "KI & Automatisierung",
                  icon: MessageSquare,
                  challenge: "Hohe Anzahl wiederkehrender Support-Anfragen belastete das Team. Kunden warteten zu lange auf Antworten.",
                  solution: "KI-basierter Support-Assistent implementiert, der häufige Fragen automatisch beantwortet. Integration mit Wissensdatenbank und nahtloser Escalation zu menschlichen Agents.",
                  results: [
                    "Automatische Beantwortung von Support-Anfragen (24/7)",
                    "Entlastung des Support-Teams",
                    "Schnellere Antwortzeiten für Kunden",
                    "Lernfähiges System mit kontinuierlicher Verbesserung"
                  ],
                  tags: ["KI", "Support", "Chatbot", "Automatisierung"]
                },
                {
                  company: "Schweizer KMU",
                  industry: "Handel",
                  location: "Zürich, Schweiz",
                  project: "CRM-Integration & Lead-Tracking",
                  projectType: "Digitalisierung",
                  icon: Users,
                  challenge: "Keine Transparenz über Lead-Quellen. Manuelle Lead-Verarbeitung war zeitaufwändig und fehleranfällig.",
                  solution: "Automatisierte Lead-Verarbeitung mit CRM-Integration. Tracking über alle Kanäle, Lead-Scoring und nahtlose Übergabe an Sales-Team.",
                  results: [
                    "Automatisierte Lead-Verarbeitung",
                    "Volle Transparenz über Lead-Quellen",
                    "CRM-Integration (nahtlos)",
                    "Besseres Lead-Management und -Scoring"
                  ],
                  tags: ["CRM", "Integration", "Analytics", "Sales"]
                }
              ].map((project, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-lg"
                >
                  <div className="flex items-start justify-between mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900"
                    >
                      <project.icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                      {project.projectType}
                    </span>
                  </div>

                  <div className="mb-4">
                    <h2 className="text-xl font-semibold text-slate-900 mb-1">
                      {project.project}
                    </h2>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Building2 className="h-4 w-4" />
                      <span>{project.company}</span>
                      <span>•</span>
                      <span>{project.industry}</span>
                      <span>•</span>
                      <span>{project.location}</span>
                    </div>
                  </div>

                  <div className="mb-6 space-y-4">
                    <div>
                      <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">
                        Herausforderung
                      </h3>
                      <p className="text-sm text-slate-600">
                        {project.challenge}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">
                        Lösung
                      </h3>
                      <p className="text-sm text-slate-600">
                        {project.solution}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">
                        Ergebnisse
                      </h3>
                      <ul className="space-y-2">
                        {project.results.map((result) => (
                          <li key={result} className="flex items-start gap-2 text-sm text-slate-600">
                            <CheckCircle className="h-4 w-4 shrink-0 text-slate-400 mt-0.5" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
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
          </div>
        </section>

        <SectionDivider />

        {/* Testimonials Section */}
        <section className="bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">
                Was unsere Kunden sagen
              </h2>
              <p className="text-lg text-slate-600">
                Feedback und Erfahrungen unserer zufriedenen Kunden.
              </p>
            </motion.div>

            <div className="grid gap-8 lg:grid-cols-2">
              {references.map((reference, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-lg"
                >
                  <div className="flex items-start justify-between mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900"
                    >
                      <reference.icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <div className="flex items-center gap-1">
                      {[...Array(reference.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h2 className="text-xl font-semibold text-slate-900 mb-1">
                      {reference.project}
                    </h2>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Building2 className="h-4 w-4" />
                      <span>{reference.name}</span>
                      <span>•</span>
                      <span>{reference.industry}</span>
                      <span>•</span>
                      <span>{reference.location}</span>
                    </div>
                    <span className="mt-2 inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                      {reference.projectType}
                    </span>
                  </div>

                  <div className="mb-6">
                    <p className="text-slate-700 leading-relaxed italic">
                      "{reference.testimonial}"
                    </p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">
                      Ergebnisse
                    </h3>
                    <ul className="space-y-2">
                      {reference.results.map((result) => (
                        <li key={result} className="flex items-start gap-2 text-sm text-slate-600">
                          <CheckCircle className="h-4 w-4 shrink-0 text-slate-400 mt-0.5" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {reference.tags.map((tag) => (
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
                Möchten Sie auch Teil unserer Erfolgsgeschichten werden?
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-sm font-semibold text-white shadow-lg hover:bg-slate-800"
              >
                Lassen Sie uns sprechen
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

