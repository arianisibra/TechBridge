"use client";

import { motion } from "framer-motion";
import { Building2, Star, ArrowRight } from "lucide-react";
import Link from "next/link";
import { ArchitectureLines } from "@/components/ArchitectureLines";

const references = [
  {
    name: "Schweizer KMU",
    industry: "Dienstleistungen",
    project: "Website-Relaunch & SEO",
    testimonial: "Professionelle Umsetzung, schnelle Reaktionszeiten und messbare Ergebnisse. Sehr zufrieden!",
    rating: 5
  },
  {
    name: "Schweizer KMU",
    industry: "Handel",
    project: "E-Commerce Optimierung",
    testimonial: "Die Conversion-Rate hat sich deutlich verbessert. TechBridge versteht unser Business.",
    rating: 5
  },
  {
    name: "Schweizer KMU",
    industry: "Produktion",
    project: "Backoffice-Automatisierung",
    testimonial: "Zeitersparnis von mehreren Stunden pro Woche. Die Automatisierung funktioniert einwandfrei.",
    rating: 5
  },
  {
    name: "Schweizer KMU",
    industry: "Beratung",
    project: "Mobile App MVP",
    testimonial: "Schnelle Umsetzung, sauberer Code und gute Kommunikation. Perfekt für unser MVP.",
    rating: 5
  }
];

export function References() {
  return (
    <section id="references" className="relative overflow-hidden bg-white py-28 sm:py-32 md:py-40">
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
            <Star className="h-4 w-4 text-slate-500" />
            Referenzen
          </motion.span>
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl mb-8">
            Was unsere Kunden sagen
          </h2>
          <p className="text-lg text-slate-600 sm:text-xl leading-relaxed">
            Vertrauen Sie auf die Erfahrung unserer zufriedenen Kunden.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {references.map((reference, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.7, 
                delay: idx * 0.08,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group cursor-pointer relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-2xl hover:border-slate-300"
            >
              {/* Architecture lines */}
              <ArchitectureLines />
              
              <div className="flex items-center gap-2 mb-4">
                {[...Array(reference.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              <p className="text-slate-700 mb-6 leading-relaxed italic">
                "{reference.testimonial}"
              </p>
              
              <div className="border-t border-slate-100 pt-6">
                <div className="flex items-center gap-3 mb-2">
                  {/* Icon with oval background */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative"
                  >
                    <div className="relative w-14 h-9 bg-slate-100 rounded-full flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="flex items-center justify-center"
                      >
                        <Building2 className="h-4.5 w-4.5 text-slate-700" />
                      </motion.div>
                    </div>
                  </motion.div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">{reference.name}</h3>
                    <p className="text-xs text-slate-500">{reference.industry}</p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 mt-2">
                  Projekt: {reference.project}
                </p>
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
            Alle Referenzen ansehen
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

