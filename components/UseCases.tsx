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
    title: "Website-Relaunch mit Conversion-Fokus",
    description: "Klare Positionierung, schnelle Seiten, optimierte Lead-Formulare. Eine Website, die wirklich Geschäft generiert.",
    tags: ["Web", "Conversion"]
  },
  {
    icon: MapPin,
    title: "Lokales SEO für Dienstleister",
    description: "Bessere Sichtbarkeit in Ihrer Region mit professionellem technischem SEO, Tracking und lokaler Optimierung.",
    tags: ["SEO", "Lokal"]
  },
  {
    icon: FileText,
    title: "Automatisierter Rechnungs- & Dokumentenfluss",
    description: "OCR-Extraktion, Genehmigungs-Routing und Export in Ihr Buchhaltungssystem. Keine manuelle Eingabe mehr.",
    tags: ["Automatisierung", "KI"]
  },
  {
    icon: MessageSquare,
    title: "Kundensupport-Assistent",
    description: "KI-Assistent, der aus Ihrer Wissensdatenbank antwortet und Tickets intelligent priorisiert.",
    tags: ["KI", "Support"]
  },
  {
    icon: Users,
    title: "Lead-Erfassung bis CRM-Automatisierung",
    description: "Formulare, Datenanreicherung und Routing ins CRM. Jeder Lead erfasst und nachverfolgt.",
    tags: ["Automatisierung", "Vertrieb"]
  },
  {
    icon: BarChart3,
    title: "Internes Operations-Dashboard",
    description: "KPIs, Berechtigungen und Reporting an einem Ort. Echtzeit-Einblick in Ihr Geschäft.",
    tags: ["Web-App", "Analytics"]
  },
  {
    icon: Smartphone,
    title: "Mobile App MVP",
    description: "React Native App für iOS und Android. Schneller Launch, sauberer Code, bereit für Iterationen.",
    tags: ["Mobile", "MVP"]
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce / Buchungs-Optimierung",
    description: "Schnellerer Checkout, bessere Zahlungen, höhere Conversion. Machen Sie Ihren Online-Verkauf effektiver.",
    tags: ["E-Commerce", "Conversion"]
  }
];

export function UseCases() {
  return (
    <section id="use-cases" className="relative overflow-hidden bg-slate-50 py-20 sm:py-24">
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
            <Lightbulb className="h-4 w-4 text-slate-500" />
            Anwendungsfälle
          </motion.span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Konkrete Projekte für Schweizer Unternehmen
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Lösungen, die wir regelmässig umsetzen. Keine Agentur-Phrasen – nur praktische Ergebnisse.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map((useCase, idx) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group cursor-pointer rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg relative overflow-hidden"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 transition-colors group-hover:bg-slate-900"
              >
                <useCase.icon className="h-6 w-6 text-slate-600 transition-colors group-hover:text-white" />
              </motion.div>
              
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{useCase.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{useCase.description}</p>
              
              <div className="mt-4 flex flex-wrap gap-2">
                {useCase.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <motion.div
                className="mt-4 flex items-center gap-2 text-sm font-medium text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                Mehr erfahren
                <ArrowRight className="h-4 w-4" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <motion.a
            href="/work"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50"
          >
            Fallstudien ansehen
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
