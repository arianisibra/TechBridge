"use client";

import { motion } from "framer-motion";
import { 
  Globe, 
  TrendingUp, 
  FileText, 
  Smartphone,
  ShoppingCart,
  MessageSquare,
  Users,
  BarChart3,
  Briefcase,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import Link from "next/link";
import { ArchitectureLines } from "@/components/ArchitectureLines";

const projects = [
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
];

export function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden bg-white py-28 sm:py-32 md:py-40">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center mb-20 sm:mb-24"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-600 shadow-sm mb-8"
          >
            <Briefcase className="h-4 w-4 text-slate-500" />
            Konkrete Projekte
          </motion.span>
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl mb-8">
            Was wir machen
          </h2>
          <p className="text-lg text-slate-600 sm:text-xl leading-relaxed">
            Echte Projekte mit Schweizer Unternehmen. Herausforderungen, Lösungen und messbare Ergebnisse.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.7, 
                delay: idx * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-2xl hover:border-slate-300"
            >
              {/* Architecture lines */}
              <ArchitectureLines />
              
              <div className="flex items-start justify-between mb-6">
                {/* Icon with oval background */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative"
                >
                  <div className="relative w-18 h-11 bg-slate-100 rounded-full flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="flex items-center justify-center"
                    >
                      <project.icon className="h-6 w-6 text-slate-700" />
                    </motion.div>
                  </div>
                </motion.div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                  {project.projectType}
                </span>
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {project.project}
                </h3>
                <div className="flex items-center gap-2 text-sm text-slate-600 mb-3">
                  <span className="font-medium">{project.company}</span>
                  <span>•</span>
                  <span>{project.industry}</span>
                  <span>•</span>
                  <span>{project.location}</span>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">
                    Herausforderung
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">
                    Lösung
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {project.solution}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">
                    Ergebnisse
                  </h4>
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
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
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
          className="mt-20 text-center"
        >
          <motion.a
            href="/referenzen"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50 transition"
          >
            Alle Projekte & Referenzen ansehen
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

