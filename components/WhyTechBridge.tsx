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
    title: "Schweizer Ansprechpartner",
    description: "Sie arbeiten mit einem Schweizer Lead, der Ihren Markt versteht und für Verantwortlichkeit sorgt."
  },
  {
    icon: Layers,
    title: "End-to-End Delivery",
    description: "Von der Website über Automatisierung bis zum Produkt – wir übernehmen alles. Kein Jonglieren mit mehreren Anbietern."
  },
  {
    icon: RefreshCw,
    title: "Schnelle Iterationen, saubere Übergabe",
    description: "Wöchentliche Updates, dokumentierter Code und ordentlicher Wissenstransfer. Keine Black Boxes."
  },
  {
    icon: Cpu,
    title: "Nur praktische KI",
    description: "Wir setzen KI ein, wo sie Zeit spart oder Umsatz steigert. Kein Hype, keine Komplexität um ihrer selbst willen."
  },
  {
    icon: HeartHandshake,
    title: "Langfristiger Support",
    description: "Wir verschwinden nicht nach dem Launch. Laufende Wartung und Optimierung sind verfügbar."
  },
  {
    icon: Shield,
    title: "Zuverlässige Lieferung",
    description: "Klarer Scope, transparente Preise und eine Erfolgsbilanz bei pünktlicher Lieferung."
  }
];

export function WhyTechBridge() {
  return (
    <section id="why-techbridge" className="relative overflow-hidden bg-white py-20 sm:py-24">
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
            <Shield className="h-4 w-4 text-slate-500" />
            Warum TechBridge
          </motion.span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Ein Partner, auf den Sie sich verlassen können
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Wir sind nicht die billigste Option und machen keine übertriebenen Versprechen. Was wir bieten: Klarheit, Zuverlässigkeit und Resultate.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, idx) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group cursor-pointer rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition-all hover:shadow-lg hover:bg-white"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 transition-colors group-hover:bg-slate-900"
              >
                <reason.icon className="h-6 w-6 text-slate-600 transition-colors group-hover:text-white" />
              </motion.div>
              <h3 className="text-lg font-semibold text-slate-900">{reason.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
