"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "An welchen Projekten arbeiten Sie?",
    answer: "Wir arbeiten an Websites, Web-Apps, Mobile Apps (React Native), KI-Automatisierung, Workflow-Integration und SEO/Wachstumsprojekten. Unser Fokus liegt auf Schweizer KMUs, die einen zuverlässigen Partner für digitale Projekte brauchen – von einfachen Landingpages bis zu komplexen internen Tools."
  },
  {
    question: "Arbeiten Sie mit Startups oder nur etablierten Unternehmen?",
    answer: "Beides. Wir arbeiten mit Startups an MVPs und mit etablierten Unternehmen an Modernisierung oder neuer Produktentwicklung. Die Schlüsselanforderung ist ein klares Ziel und realistische Erwartungen, nicht die Unternehmensgrösse."
  },
  {
    question: "Wie gehen Sie KI-Projekte an?",
    answer: "Wir setzen KI praktisch ein – Dokument-OCR, KI-Assistenten, Workflow-Automatisierung. Wir versprechen keine Wunder. Jedes KI-Feature muss nachweislich Zeit sparen oder Umsatz steigern. Wenn nicht, sagen wir es Ihnen."
  },
  {
    question: "Wie lange dauert ein typisches Projekt?",
    answer: "Hängt vom Umfang ab. Eine Landingpage kann 2-3 Wochen dauern. Ein Web-App MVP typischerweise 6-10 Wochen. Komplexe Automatisierungsprojekte variieren. Wir geben realistische Zeitpläne von Anfang an und halten sie ein."
  },
  {
    question: "Bieten Sie laufenden Support nach dem Launch?",
    answer: "Ja. Wir bieten Wartungspakete für Hosting, Updates und Verbesserungen. Viele Kunden arbeiten kontinuierlich mit uns an Iterationen und neuen Features."
  },
  {
    question: "Wie strukturieren Sie die Preise?",
    answer: "Festpreis für definierten Scope, oder nach Aufwand für laufende Arbeit. Wir sind transparent bei den Kosten von Anfang an. Keine Überraschungen, kein Scope Creep ohne Absprache."
  },
  {
    question: "Können Sie mit unseren bestehenden Systemen arbeiten?",
    answer: "Ja. Wir integrieren regelmässig mit CRMs (HubSpot, Salesforce), ERPs (SAP, Abacus), Buchhaltungstools (Bexio, Xero) und Custom APIs. Wir prüfen die Kompatibilität früh im Prozess."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden bg-slate-50 py-20 sm:py-24">
      <div className="relative mx-auto max-w-3xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm"
          >
            <HelpCircle className="h-4 w-4 text-slate-500" />
            FAQ
          </motion.span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Häufige Fragen
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Direkte Antworten auf die Fragen, die wir am häufigsten bekommen.
          </p>
        </motion.div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="flex w-full items-center justify-between px-6 py-4 text-left"
              >
                <span className="font-medium text-slate-900">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="h-5 w-5 text-slate-400" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-6 pb-4 text-slate-600">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
