"use client";

import { motion } from "framer-motion";
import { 
  Palette, 
  Cpu, 
  Settings, 
  TrendingUp, 
  ArrowRight,
  Check
} from "lucide-react";

const serviceLines = [
  {
    icon: Palette,
    title: "Webseite & Design",
    description: "Moderne, konversionsstarke Websites mit durchdachtem Design.",
    features: [
      "Responsive Webdesign",
      "Landingpages & Corporate Sites",
      "E-Commerce & Portale",
      "UI/UX Design"
    ]
  },
  {
    icon: Cpu,
    title: "KI-Automatisierung",
    description: "Praktische KI-Lösungen, die Zeit sparen und Prozesse optimieren.",
    features: [
      "Dokument-OCR & Extraktion",
      "KI-Assistenten & Chatbots",
      "Workflow-Automatisierung",
      "Intelligente Datenverarbeitung"
    ]
  },
  {
    icon: Settings,
    title: "Digitalisierung",
    description: "Ihre Prozesse digitalisieren und manuelle Arbeit eliminieren.",
    features: [
      "Prozessanalyse & Optimierung",
      "System-Integrationen",
      "Automatisierte Workflows",
      "Dashboards & Reporting"
    ]
  },
  {
    icon: TrendingUp,
    title: "Wachstum & SEO",
    description: "Mehr Sichtbarkeit, mehr Traffic, mehr Conversions.",
    features: [
      "Technisches SEO",
      "Content-Optimierung",
      "Performance & Speed",
      "Conversion-Optimierung"
    ]
  }
];

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-slate-50 py-28 sm:py-32 md:py-40">
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
            <Settings className="h-4 w-4 text-slate-500" />
            Unsere Leistungen
          </motion.span>
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl mb-8">
            Was wir für Sie tun
          </h2>
          <p className="text-lg text-slate-600 sm:text-xl leading-relaxed">
            Vier Kernbereiche. Ein Partner.
            <br className="hidden sm:block" />
            <span className="text-slate-500">Messbare Ergebnisse.</span>
          </p>
        </motion.div>

        <div className="grid gap-10 sm:gap-12 md:grid-cols-2">
          {serviceLines.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.7, 
                delay: idx * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative rounded-3xl border border-slate-200 bg-white p-10 sm:p-12 shadow-sm transition-all hover:shadow-2xl hover:border-slate-300"
            >
              {/* Icon with enhanced animation */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex h-18 w-18 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 transition-colors group-hover:from-slate-900 group-hover:to-slate-800 mb-8"
              >
                <service.icon className="h-9 w-9 text-slate-600 transition-colors group-hover:text-white" />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg">{service.description}</p>
              
              <div className="space-y-4 mb-10">
                {service.features.map((feature, featureIdx) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15 + featureIdx * 0.08 }}
                    whileHover={{ x: 6 }}
                    className="flex items-start gap-3 text-base text-slate-700"
                  >
                    <Check className="h-5 w-5 shrink-0 text-emerald-500 mt-0.5" />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="flex items-center gap-2 text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors"
              >
                Mehr erfahren
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
