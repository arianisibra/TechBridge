"use client";

import { motion } from "framer-motion";
import { 
  Globe, 
  MapPin, 
  FileText, 
  MessageSquare, 
  Users, 
  BarChart3, 
  Smartphone, 
  ShoppingCart,
  ArrowRight,
  Lightbulb
} from "lucide-react";

const useCases = [
  {
    icon: Globe,
    title: "Website-Relaunch",
    description: "Moderne, schnelle Websites mit Conversion-Fokus.",
    tags: ["Web", "Design"]
  },
  {
    icon: MapPin,
    title: "Lokales SEO",
    description: "Mehr Sichtbarkeit in Ihrer Region.",
    tags: ["SEO", "Lokal"]
  },
  {
    icon: FileText,
    title: "Dokumenten-Automatisierung",
    description: "OCR, Extraktion, Workflows.",
    tags: ["KI", "Automatisierung"]
  },
  {
    icon: MessageSquare,
    title: "KI-Support-Assistent",
    description: "Intelligente Kundenbetreuung.",
    tags: ["KI", "Support"]
  },
  {
    icon: Users,
    title: "CRM-Integration",
    description: "Automatisierte Lead-Verarbeitung.",
    tags: ["Automatisierung", "Sales"]
  },
  {
    icon: BarChart3,
    title: "Business-Dashboard",
    description: "KPIs und Reporting in Echtzeit.",
    tags: ["Web-App", "Analytics"]
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    description: "React Native Apps für iOS & Android.",
    tags: ["Mobile", "App"]
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Optimierung",
    description: "Höhere Conversions, bessere Performance.",
    tags: ["E-Commerce", "Conversion"]
  }
];

export function UseCases() {
  return (
    <section id="use-cases" className="relative overflow-hidden bg-slate-50 py-28 sm:py-32 md:py-40">
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
            <Lightbulb className="h-4 w-4 text-slate-500" />
            Anwendungsfälle
          </motion.span>
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl mb-8">
            Was wir umsetzen
          </h2>
          <p className="text-lg text-slate-600 sm:text-xl leading-relaxed">
            Konkrete Lösungen für Schweizer Unternehmen.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map((useCase, idx) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.7, 
                delay: idx * 0.08,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group cursor-pointer rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-2xl hover:border-slate-300"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 transition-colors group-hover:from-slate-900 group-hover:to-slate-800 mb-6"
              >
                <useCase.icon className="h-8 w-8 text-slate-600 transition-colors group-hover:text-white" />
              </motion.div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3">{useCase.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">{useCase.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {useCase.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                  >
                    {tag}
                  </span>
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <motion.a
            href="/work"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50 transition"
          >
            Fallstudien ansehen
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
