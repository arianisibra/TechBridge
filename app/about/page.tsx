"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { SectionDivider } from "@/components/SectionDivider";
import { 
  MapPin, 
  Eye, 
  Target, 
  Zap,
  ArrowRight,
  CheckCircle,
  Globe,
  Cpu,
  TrendingUp
} from "lucide-react";

const values = [
  {
    icon: Eye,
    title: "Klarheit",
    description: "Wir kommunizieren direkt und ehrlich. Kein Jargon, keine versteckten Kosten, keine Überraschungen. Sie wissen immer, was passiert."
  },
  {
    icon: Target,
    title: "Zuverlässigkeit",
    description: "Wir halten, was wir versprechen. Termine werden eingehalten, Zusagen werden erfüllt. Sie können sich auf uns verlassen."
  },
  {
    icon: Zap,
    title: "Ownership",
    description: "Wir behandeln Ihr Projekt wie unser eigenes. Probleme werden gelöst, nicht weitergereicht. Wir übernehmen Verantwortung für Ergebnisse."
  }
];

const whatWeDo = [
  {
    icon: Globe,
    title: "Bauen",
    description: "Websites, Web-Apps, Mobile Apps. Moderne Technologie, sauberer Code, langlebig gebaut."
  },
  {
    icon: Cpu,
    title: "Automatisieren",
    description: "Workflows, Integrationen, KI. Praktische Automatisierung, die Zeit spart."
  },
  {
    icon: TrendingUp,
    title: "Wachsen",
    description: "SEO, Conversions, Sichtbarkeit. Datengetriebene Wachstumsstrategien."
  }
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mx-auto max-w-3xl text-center"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm"
              >
                <MapPin className="h-4 w-4 text-slate-500" />
                Über TechBridge
              </motion.span>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                Digitalisierung + Entwicklung + Wachstum
              </h1>
              <p className="mt-4 text-lg text-slate-600">
                Wir sind Ihr Schweizer Digitalisierungspartner. Wir helfen Unternehmen, digitale Produkte zu bauen, Workflows zu automatisieren und ihre Online-Präsenz zu stärken.
              </p>
            </motion.div>
          </div>
        </section>

        <SectionDivider />

        {/* What we do */}
        <section className="bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
                Was wir tun
              </h2>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-3">
              {whatWeDo.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all hover:shadow-lg"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900"
                  >
                    <item.icon className="h-7 w-7 text-white" />
                  </motion.div>
                  <h3 className="mt-4 text-xl font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-slate-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* How we work */}
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
                  Wie wir arbeiten
                </h2>
                <p className="mt-4 text-lg text-slate-600">
                  Wir glauben an Transparenz, Struktur und messbare Ergebnisse. Keine Black Boxes, keine Funkstille.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    "Wöchentliche Updates zu Fortschritt und Hindernissen",
                    "Klarer Scope und Zeitplan von Anfang an",
                    "Dokumentierte Entscheidungen und Übergabe",
                    "Ehrliches Feedback, auch wenn es unbequem ist",
                    "Langfristiger Support verfügbar, nicht nur Projektlieferung"
                  ].map((item, idx) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="h-5 w-5 shrink-0 text-slate-400 mt-0.5" />
                      <span className="text-slate-700">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-8"
              >
                <h3 className="text-xl font-semibold text-slate-900 mb-6">Unsere Werte</h3>
                <div className="space-y-6">
                  {values.map((value, idx) => (
                    <motion.div
                      key={value.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white border border-slate-200">
                        <value.icon className="h-5 w-5 text-slate-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">{value.title}</h4>
                        <p className="mt-1 text-sm text-slate-600">{value.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Location */}
        <section className="bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 md:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-4 py-2 text-sm text-slate-600 shadow-sm mb-6">
                <MapPin className="h-4 w-4 text-slate-400" />
                Standort Schweiz
              </div>
              <h2 className="text-2xl font-semibold text-slate-900">
                Schweizer Ansprechpartner, zuverlässige Lieferung
              </h2>
              <p className="mt-4 text-slate-600 max-w-xl mx-auto">
                Sie arbeiten mit einem Schweizer Lead, der Ihren Markt und Ihre Kultur versteht. Wir kombinieren lokale Verantwortlichkeit mit einem erfahrenen Delivery-Team, das liefert.
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-sm font-semibold text-white shadow-lg hover:bg-slate-800"
              >
                Kontakt aufnehmen
                <ArrowRight className="h-4 w-4" />
              </motion.a>
            </motion.div>
          </div>
        </section>

        <SectionDivider />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
