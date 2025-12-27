"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Mail, Palette, Cpu, Settings, TrendingUp } from "lucide-react";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-28 sm:py-32 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-10 sm:p-14 shadow-xl"
      >
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-600 shadow-sm"
            >
              <Calendar className="h-4 w-4 text-slate-500" />
              Lassen Sie uns sprechen
            </motion.div>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl mb-6">
              Bereit, etwas zu bauen, das funktioniert?
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Erzählen Sie uns, was Sie bauen, automatisieren oder verbessern möchten. 
              Wir geben Ihnen eine ehrliche Einschätzung und einen klaren Weg nach vorne.
            </p>

            <div className="flex flex-wrap items-center gap-5 mb-8">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-10 py-5 text-sm font-semibold text-white shadow-lg hover:bg-slate-800 transition"
              >
                Kostenlose Beratung
                <ArrowRight className="h-4 w-4" />
              </motion.a>
              <motion.a
                href="mailto:info@tech-bridge.ch"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-10 py-5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
              >
                <Mail className="h-4 w-4" />
                E-Mail schreiben
              </motion.a>
            </div>

            <p className="text-sm text-slate-500">
              Kostenlose Erstberatung • Unverbindlich • Antwort innerhalb 24–48 Stunden
            </p>
          </div>

          {/* Right: Service preview */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -6 }}
            className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-6">
                <span className="text-base font-semibold text-slate-900">Unsere Leistungen</span>
                <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">
                  Alle Bereiche
                </span>
              </div>
              
              <div className="space-y-4">
                {[
                  { icon: Palette, label: "Webseite & Design", desc: "Moderne, konversionsstarke Websites" },
                  { icon: Cpu, label: "KI-Automatisierung", desc: "Praktische KI-Lösungen" },
                  { icon: Settings, label: "Digitalisierung", desc: "Prozesse optimieren" },
                  { icon: TrendingUp, label: "Wachstum & SEO", desc: "Mehr Sichtbarkeit" }
                ].map((service, idx) => (
                  <motion.div
                    key={service.label}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    whileHover={{ x: 6 }}
                    className="flex cursor-pointer items-center gap-4 rounded-xl bg-slate-50 p-4 transition-all hover:bg-slate-100"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-200">
                      <service.icon className="h-6 w-6 text-slate-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-slate-900">{service.label}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{service.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="pt-4 text-center border-t border-slate-100">
                <motion.a
                  href="/services"
                  whileHover={{ scale: 1.02 }}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 transition"
                >
                  Alle Leistungen ansehen
                  <ArrowRight className="h-3.5 w-3.5" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
