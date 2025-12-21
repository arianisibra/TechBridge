"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Globe, Cpu, TrendingUp } from "lucide-react";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-20 sm:py-24 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-12"
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm"
            >
              <Calendar className="h-4 w-4 text-slate-500" />
              Lassen Sie uns sprechen
            </motion.div>

            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Bereit, etwas zu bauen, das funktioniert?
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Erzählen Sie uns, was Sie bauen, automatisieren oder verbessern möchten. Wir geben Ihnen eine ehrliche Einschätzung und einen klaren Weg nach vorne.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-sm font-semibold text-white shadow-lg hover:bg-slate-800"
              >
                Kurzes Gespräch buchen
                <ArrowRight className="h-4 w-4" />
              </motion.a>
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Leistungen ansehen
              </motion.a>
            </div>

            <p className="mt-6 text-sm text-slate-500">
              Kostenlose Erstberatung • Unverbindlich • Antwort innerhalb 24–48 Stunden
            </p>
          </div>

          {/* Right: Service preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -4 }}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg"
          >
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-900">Womit wir helfen können</span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                  Alle Leistungen
                </span>
              </div>
              
              {/* Services */}
              <div className="space-y-3">
                {[
                  { icon: Globe, label: "Web- & Produktentwicklung", desc: "Websites, Apps, Portale" },
                  { icon: Cpu, label: "KI & Automatisierung", desc: "Workflows, Assistenten, OCR" },
                  { icon: TrendingUp, label: "Wachstum & SEO", desc: "Sichtbarkeit, Conversions" }
                ].map((service, idx) => (
                  <motion.div
                    key={service.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    whileHover={{ x: 4 }}
                    className="flex cursor-pointer items-center gap-3 rounded-xl bg-slate-50 p-3 transition-all hover:bg-slate-100"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-200">
                      <service.icon className="h-5 w-5 text-slate-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-slate-900">{service.label}</p>
                      <p className="text-xs text-slate-500">{service.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="pt-2 text-center">
                <motion.a
                  href="/services"
                  whileHover={{ scale: 1.02 }}
                  className="inline-flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-slate-900"
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
