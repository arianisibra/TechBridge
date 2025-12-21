"use client";

import { motion } from "framer-motion";
import { Search, FileText, Code, Rocket, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description: "Wir verstehen zuerst Ihre Ziele, Nutzer, Einschränkungen und Erfolgskriterien. Keine Annahmen – nur Klarheit darüber, was Erfolg bedeutet.",
    features: ["Ziele & KPIs", "Nutzeranalyse", "Technische Anforderungen", "Erfolgskriterien"]
  },
  {
    number: "02",
    icon: FileText,
    title: "Planung",
    description: "Wir definieren Umfang, Zeitplan, Budget und Architektur. Sie wissen genau, was Sie bekommen, wann und zu welchem Preis.",
    features: ["Scope-Definition", "Zeitplan & Meilensteine", "Budget-Transparenz", "Architektur-Entscheidungen"]
  },
  {
    number: "03",
    icon: Code,
    title: "Umsetzung",
    description: "Wöchentliche Iterationen mit QA, Staging-Umgebungen und transparenten Updates. Sie sehen Fortschritt, keine leeren Versprechen.",
    features: ["Wöchentliche Sprints", "Qualitätssicherung", "Staging-Previews", "Transparente Updates"]
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Optimierung",
    description: "Deployment, Monitoring und laufende Optimierung. Wir verschwinden nicht nach dem Launch – wir helfen Ihnen, kontinuierlich zu verbessern.",
    features: ["Produktions-Deployment", "Monitoring-Setup", "Performance-Tracking", "Laufender Support"]
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden bg-white py-20 sm:py-24">
      {/* Background */}
      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-slate-100/50 to-transparent blur-3xl"
      />

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
            <span className="h-2 w-2 rounded-full bg-slate-900" />
            Unser Prozess
          </motion.span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Von der Idee zur Umsetzung in vier Schritten
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Ein strukturierter, transparenter Prozess, der Sie in jeder Phase informiert und einbezieht.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all hover:bg-white hover:shadow-lg"
            >
              {/* Step number */}
              <span className="absolute -top-4 left-6 rounded-full bg-slate-900 px-3 py-1 text-sm font-bold text-white">
                {step.number}
              </span>
              
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 flex h-14 w-14 cursor-pointer items-center justify-center rounded-2xl bg-slate-100 transition-colors group-hover:bg-slate-900"
              >
                <step.icon className="h-6 w-6 text-slate-600 transition-colors group-hover:text-white" />
              </motion.div>
              
              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600">
                {step.description}
              </p>
              
              <div className="mt-6 flex flex-wrap gap-2">
                {step.features.map((feature) => (
                  <motion.span
                    key={feature}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="cursor-pointer rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-200"
                  >
                    {feature}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-sm font-semibold text-white shadow-lg hover:bg-slate-800"
          >
            Projekt starten
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
