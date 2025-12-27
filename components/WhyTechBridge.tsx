"use client";

import { motion } from "framer-motion";
import { 
  MapPin, 
  Layers, 
  RefreshCw, 
  Cpu, 
  HeartHandshake,
  Shield
} from "lucide-react";

const reasons = [
  {
    icon: MapPin,
    title: "Schweizer Partner",
    description: "Lokaler Ansprechpartner, der Ihren Markt versteht."
  },
  {
    icon: Layers,
    title: "End-to-End",
    description: "Von der Website bis zur Automatisierung – alles aus einer Hand."
  },
  {
    icon: RefreshCw,
    title: "Schnelle Iterationen",
    description: "Wöchentliche Updates, saubere Übergabe."
  },
  {
    icon: Cpu,
    title: "Praktische KI",
    description: "KI, die wirklich Zeit spart und Umsatz steigert."
  },
  {
    icon: HeartHandshake,
    title: "Langfristiger Support",
    description: "Wir bleiben auch nach dem Launch für Sie da."
  },
  {
    icon: Shield,
    title: "Zuverlässig",
    description: "Klarer Scope, transparente Preise, pünktliche Lieferung."
  }
];

export function WhyTechBridge() {
  return (
    <section id="why-techbridge" className="relative overflow-hidden bg-white py-28 sm:py-32 md:py-40">
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
            <Shield className="h-4 w-4 text-slate-500" />
            Warum TechBridge
          </motion.span>
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl mb-8">
            Ein Partner, auf den Sie sich verlassen können
          </h2>
          <p className="text-lg text-slate-600 sm:text-xl leading-relaxed">
            Klarheit, Zuverlässigkeit und messbare Ergebnisse.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, idx) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.7, 
                delay: idx * 0.12,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
              className="group cursor-pointer rounded-3xl border border-slate-200 bg-slate-50 p-10 shadow-sm transition-all hover:shadow-2xl hover:bg-white"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 transition-colors group-hover:bg-slate-900 mb-6"
              >
                <reason.icon className="h-8 w-8 text-slate-600 transition-colors group-hover:text-white" />
              </motion.div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{reason.title}</h3>
              <p className="text-slate-600 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
