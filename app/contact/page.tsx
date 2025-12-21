"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, Mail, Clock, CheckCircle, MapPin } from "lucide-react";
import { useState, FormEvent } from "react";

const benefits = [
  "Ehrliche Einschätzung Ihres Projekts",
  "Klare Zeitplan- und Budgetschätzung",
  "Kein Verkaufsdruck, unverbindlich",
  "Antwort innerhalb 24–48 Stunden"
];

const serviceOptions = [
  { value: "", label: "Leistungsbereich auswählen" },
  { value: "digitalisation", label: "Digitalisierung & Geschäftsautomatisierung" },
  { value: "web", label: "Web- & Produktentwicklung" },
  { value: "mobile", label: "Mobile Entwicklung" },
  { value: "ai", label: "KI, Agenten & Intelligente Workflows" },
  { value: "seo", label: "Wachstum: SEO & Digitales Marketing" },
  { value: "other", label: "Nicht sicher / Mehrere" }
];

const timelineOptions = [
  { value: "", label: "Zeitrahmen auswählen" },
  { value: "asap", label: "So bald wie möglich" },
  { value: "1-2-months", label: "1-2 Monate" },
  { value: "3-6-months", label: "3-6 Monate" },
  { value: "exploring", label: "Nur orientieren" }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
    service: "",
    timeline: "",
    budget: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // TODO: Mit Backend integrieren (HubSpot, n8n, Email, etc.)
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("Kontaktformular gesendet:", formData);
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden bg-slate-50 py-20">
        <div className="relative mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm"
              >
                <Mail className="h-4 w-4 text-slate-500" />
                Kontakt
              </motion.span>
              
              <h1 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Lassen Sie uns über Ihr Projekt sprechen
              </h1>
              
              <p className="mt-4 text-lg text-slate-600">
                Erzählen Sie uns, was Sie bauen, automatisieren oder verbessern möchten. Wir antworten innerhalb von 24–48 Stunden.
              </p>

              <div className="mt-8 space-y-4">
                {benefits.map((benefit, idx) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900">
                      <CheckCircle className="h-3.5 w-3.5 text-white" />
                    </div>
                    <span className="text-slate-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 space-y-4">
                <div className="rounded-2xl border border-slate-200 bg-white p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100">
                      <Clock className="h-6 w-6 text-slate-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Schnelle Antwort</p>
                      <p className="text-sm text-slate-500">Wir antworten innerhalb 24–48 Stunden</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100">
                      <MapPin className="h-6 w-6 text-slate-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Standort Schweiz</p>
                      <p className="text-sm text-slate-500">Lokale Verantwortlichkeit, zuverlässige Lieferung</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                    <CheckCircle className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">Nachricht erhalten!</h3>
                  <p className="mt-2 text-slate-600">
                    Wir melden uns innerhalb von 24–48 Stunden, um Ihr Projekt zu besprechen.
                  </p>
                  <motion.a
                    href="/"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white"
                  >
                    Zurück zur Startseite
                    <ArrowRight className="h-4 w-4" />
                  </motion.a>
                </motion.div>
              ) : (
                <>
                  <h2 className="text-xl font-semibold text-slate-900">Kontakt aufnehmen</h2>
                  <p className="mt-2 text-sm text-slate-600">
                    Füllen Sie das Formular aus und wir melden uns innerhalb von 24–48 Stunden.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                          Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-100"
                          placeholder="Ihr Name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                          Unternehmen *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-100"
                          placeholder="Ihr Unternehmen"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        E-Mail *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-100"
                        placeholder="sie@unternehmen.ch"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Leistungsbereich
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-100"
                      >
                        {serviceOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                          Zeitrahmen
                        </label>
                        <select
                          value={formData.timeline}
                          onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-100"
                        >
                          {timelineOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                          Budget (optional)
                        </label>
                        <input
                          type="text"
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-100"
                          placeholder="z.B. CHF 10-20k"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Nachricht *
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-100"
                        placeholder="Erzählen Sie uns von Ihrem Projekt, Ihren Herausforderungen oder was Sie erreichen möchten..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={submitting}
                      whileHover={{ scale: submitting ? 1 : 1.02 }}
                      whileTap={{ scale: submitting ? 1 : 0.98 }}
                      className="w-full rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {submitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Wird gesendet...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          Nachricht senden
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      )}
                    </motion.button>

                    <p className="text-xs text-slate-500 text-center">
                      Mit dem Absenden stimmen Sie unserer{" "}
                      <a href="/privacy" className="underline hover:text-slate-700">Datenschutzerklärung</a> zu
                    </p>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
