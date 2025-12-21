"use client";

import { motion } from "framer-motion";
import { MapPin, Eye, Target, Zap, ArrowRight } from "lucide-react";

const values = [
  {
    icon: Eye,
    title: "Klarheit",
    description: "Wir kommunizieren direkt und ehrlich. Kein Jargon, keine versteckten Kosten, keine Überraschungen."
  },
  {
    icon: Target,
    title: "Zuverlässigkeit",
    description: "Wir halten, was wir versprechen. Termine werden eingehalten, Zusagen werden erfüllt."
  },
  {
    icon: Zap,
    title: "Ownership",
    description: "Wir behandeln Ihr Projekt wie unser eigenes. Probleme werden gelöst, nicht weitergereicht."
  }
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-slate-50 py-20 sm:py-24">
      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm"
            >
              <MapPin className="h-4 w-4 text-slate-500" />
              Über TechBridge
            </motion.span>
            
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Digitalisierung + Entwicklung + Wachstum
            </h2>
            
            <p className="mt-4 text-lg text-slate-600">
              TechBridge ist Ihr Schweizer Digitalisierungs- und Produktentwicklungspartner. Wir helfen Unternehmen, ihre digitale Präsenz zu modernisieren, massgeschneiderte Web- und Mobile-Produkte zu entwickeln, Workflows mit KI zu automatisieren und ihre Online-Sichtbarkeit zu steigern.
            </p>

            <p className="mt-4 text-slate-600">
              Was uns unterscheidet: Ein Schweizer Ansprechpartner, der Ihren Markt versteht, kombiniert mit einem zuverlässigen Delivery-Team, das wirklich liefert. Wir arbeiten transparent, kommunizieren direkt und fokussieren auf messbare Ergebnisse – nicht auf Buzzwords.
            </p>

            <div className="mt-8 flex items-center gap-6">
              <motion.div
                whileHover={{ y: -2, scale: 1.02 }}
                className="flex cursor-pointer items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm hover:shadow-md transition-all"
              >
                <MapPin className="h-4 w-4 text-slate-400" />
                Standort Schweiz
              </motion.div>
            </div>

            <motion.a
              href="/contact"
              whileHover={{ x: 4 }}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-300 hover:shadow-md"
            >
              Lassen Sie uns über Ihr Projekt sprechen
              <ArrowRight className="h-4 w-4" />
            </motion.a>
          </motion.div>

          {/* Right column - Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-slate-900 mb-6">Wie wir arbeiten</h3>
            
            <div className="space-y-6">
              <div className="rounded-xl bg-slate-50 p-4">
                <h4 className="font-semibold text-slate-900">Transparent</h4>
                <p className="mt-1 text-sm text-slate-600">
                  Sie wissen immer, was passiert. Wöchentliche Updates, klare Zeitpläne, ehrliches Feedback. Keine Funkstille.
                </p>
              </div>
              
              <div className="rounded-xl bg-slate-50 p-4">
                <h4 className="font-semibold text-slate-900">Strukturiert</h4>
                <p className="mt-1 text-sm text-slate-600">
                  Klarer Scope, definierte Meilensteine, dokumentierte Entscheidungen. Sie bekommen eine saubere Übergabe, kein Chaos.
                </p>
              </div>
              
              <div className="rounded-xl bg-slate-50 p-4">
                <h4 className="font-semibold text-slate-900">Messbar</h4>
                <p className="mt-1 text-sm text-slate-600">
                  Wir definieren Erfolgskriterien von Anfang an. Sie sehen die Wirkung, nicht nur Deliverables.
                </p>
              </div>
            </div>

            <div className="mt-8 border-t border-slate-200 pt-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Unsere Werte</h3>
              
              <div className="space-y-4">
                {values.map((value, idx) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-3 cursor-pointer"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100">
                      <value.icon className="h-4 w-4 text-slate-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">{value.title}</p>
                      <p className="text-sm text-slate-600">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
