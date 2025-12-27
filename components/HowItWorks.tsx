"use client";

import { motion } from "framer-motion";
import { Search, FileText, Code, Rocket, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description: "Wir verstehen Ihre Ziele und definieren Erfolgskriterien.",
    features: ["Ziele & KPIs", "Anforderungen", "Erfolgskriterien"]
  },
  {
    number: "02",
    icon: FileText,
    title: "Planung",
    description: "Klarer Umfang, Zeitplan und Budget.",
    features: ["Scope", "Zeitplan", "Budget"]
  },
  {
    number: "03",
    icon: Code,
    title: "Umsetzung",
    description: "Wöchentliche Iterationen mit transparenten Updates.",
    features: ["Sprints", "QA", "Updates"]
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch",
    description: "Deployment und laufende Optimierung.",
    features: ["Deployment", "Monitoring", "Support"]
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden bg-white py-28 sm:py-32 md:py-40">
      <motion.div
        animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-slate-100/50 to-transparent blur-3xl"
      />

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
            <span className="h-2.5 w-2.5 rounded-full bg-slate-900" />
            Unser Prozess
          </motion.span>
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl mb-8">
            So arbeiten wir
          </h2>
          <p className="text-lg text-slate-600 sm:text-xl leading-relaxed">
            Strukturiert, transparent, messbar.
          </p>
        </motion.div>

        <div className="grid gap-10 sm:gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.7, 
                delay: idx * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative rounded-3xl border border-slate-200 bg-slate-50 p-10 transition-all hover:bg-white hover:shadow-2xl"
            >
              <span className="absolute -top-5 left-10 rounded-full bg-slate-900 px-4 py-2 text-sm font-bold text-white shadow-lg">
                {step.number}
              </span>
              
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="mt-8 flex h-18 w-18 items-center justify-center rounded-2xl bg-slate-100 transition-colors group-hover:bg-slate-900 mb-8"
              >
                <step.icon className="h-9 w-9 text-slate-600 transition-colors group-hover:text-white" />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {step.title}
              </h3>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                {step.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {step.features.map((feature) => (
                  <motion.span
                    key={feature}
                    whileHover={{ scale: 1.08, y: -3 }}
                    className="rounded-full bg-slate-100 px-4 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-200"
                  >
                    {feature}
                  </motion.span>
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
            href="/contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-10 py-5 text-sm font-semibold text-white shadow-lg hover:bg-slate-800 transition"
          >
            Projekt starten
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
