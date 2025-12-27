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
  { value: "web", label: "Webseite & Design" },
  { value: "ai", label: "KI-Automatisierung" },
  { value: "digitalisation", label: "Digitalisierung" },
  { value: "seo", label: "Wachstum & SEO" },
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
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error("API Error:", data);
        throw new Error(data.error || "Fehler beim Senden der Nachricht");
      }

      // Reset form
      setFormData({
        name: "",
        company: "",
        email: "",
        message: "",
        service: "",
        timeline: "",
        budget: ""
      });

      setSubmitted(true);
    } catch (error: any) {
      console.error("Error submitting form:", error);
      const errorMessage = error?.message || "Fehler beim Senden der Nachricht";
      alert(`${errorMessage}\n\nBitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt unter info@tech-bridge.ch`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden bg-slate-50 py-24 sm:py-28">
        <div className="relative mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-start">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-600 shadow-sm"
              >
                <Mail className="h-4 w-4 text-slate-500" />
                Kontakt
              </motion.span>
              
              <h1 className="mt-8 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl mb-8">
                Lassen Sie uns über Ihr Projekt sprechen
              </h1>
              
              <p className="text-lg text-slate-600 mb-12 leading-relaxed">
                Erzählen Sie uns, was Sie bauen, automatisieren oder verbessern möchten. 
                <br className="hidden sm:block" />
                Wir antworten innerhalb von 24–48 Stunden.
              </p>

              <div className="space-y-5 mb-12">
                {benefits.map((benefit, idx) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 shrink-0">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-slate-700 text-base">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <div className="space-y-5">
                <div className="rounded-2xl border border-slate-200 bg-white p-8">
                  <div className="flex items-center gap-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-slate-100 shrink-0">
                      <Clock className="h-7 w-7 text-slate-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 text-base">Schnelle Antwort</p>
                      <p className="text-sm text-slate-500 mt-1">Wir antworten innerhalb 24–48 Stunden</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-8">
                  <div className="flex items-center gap-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-slate-100 shrink-0">
                      <MapPin className="h-7 w-7 text-slate-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 text-base">Standort Schweiz</p>
                      <p className="text-sm text-slate-500 mt-1">Lokale Verantwortlichkeit, zuverlässige Lieferung</p>
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
              className="rounded-2xl border border-slate-200 bg-white p-10 shadow-lg"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
                    <CheckCircle className="h-10 w-10 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-4">Nachricht gesendet!</h3>
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    Vielen Dank für Ihre Nachricht. Wir melden uns innerhalb von 24–48 Stunden bei Ihnen zurück.
                  </p>
                  <motion.a
                    href="/"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-sm font-semibold text-white"
                  >
                    Zurück zur Startseite
                    <ArrowRight className="h-4 w-4" />
                  </motion.a>
                </motion.div>
              ) : (
                <>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-3">Kontakt aufnehmen</h2>
                  <p className="text-sm text-slate-600 mb-8">
                    Füllen Sie das Formular aus und wir melden uns innerhalb von 24–48 Stunden.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2.5">
                          Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-100 transition"
                          placeholder="Ihr Name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2.5">
                          Unternehmen *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-100 transition"
                          placeholder="Ihr Unternehmen"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2.5">
                        E-Mail *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-100 transition"
                        placeholder="sie@unternehmen.ch"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2.5">
                        Leistungsbereich
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-100 transition"
                      >
                        {serviceOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2.5">
                          Zeitrahmen
                        </label>
                        <select
                          value={formData.timeline}
                          onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                          className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-100 transition"
                        >
                          {timelineOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2.5">
                          Budget (optional)
                        </label>
                        <input
                          type="text"
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-100 transition"
                          placeholder="z.B. CHF 10-20k"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2.5">
                        Nachricht *
                      </label>
                      <textarea
                        rows={5}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-100 transition"
                        placeholder="Erzählen Sie uns von Ihrem Projekt..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={submitting}
                      whileHover={{ scale: submitting ? 1 : 1.02, y: -2 }}
                      whileTap={{ scale: submitting ? 1 : 0.98 }}
                      className="w-full rounded-xl bg-slate-900 px-6 py-4 text-sm font-semibold text-white shadow-lg hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition"
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
