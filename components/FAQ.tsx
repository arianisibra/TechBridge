"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, ArrowRight } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How does the AI extraction work?",
    answer: "Our AI uses advanced OCR and machine learning to read invoices in any format—PDF, scanned images, or photos. It extracts vendor name, invoice number, amounts, VAT, line items, due dates, and payment details with 99.5% accuracy. The system learns from your corrections to improve over time."
  },
  {
    question: "What accounting systems do you integrate with?",
    answer: "We integrate with Bexio, Abacus, SAP, QuickBooks, Xero, and many more. We also offer a REST API and webhooks for custom integrations. Approved invoices sync automatically to your accounting system."
  },
  {
    question: "How long does implementation take?",
    answer: "Most teams are up and running in under 10 minutes. Connect your inbox, configure approval rules, and start processing. For enterprise customers with custom requirements, our team provides dedicated onboarding support."
  },
  {
    question: "Is my data secure?",
    answer: "Yes. We use 256-bit AES encryption for all data at rest and in transit. Data is hosted in ISO 27001 certified data centers in Switzerland. We're GDPR compliant and SOC 2 Type II certified. We never initiate payments—only read-only access to invoice data."
  },
  {
    question: "Can I set up approval workflows?",
    answer: "Absolutely. Define rules based on invoice amount, vendor, department, or custom fields. Set multi-level approval chains with automatic escalation. Approvers get notified via email or Slack/Teams."
  },
  {
    question: "What happens if the AI makes a mistake?",
    answer: "You can correct any extracted field with one click. The system flags low-confidence extractions for human review. All corrections train the AI to improve accuracy for future invoices."
  },
  {
    question: "Do you offer a free trial?",
    answer: "Yes. All plans include a 14-day free trial with full functionality. No credit card required. After the trial, you can choose a plan that fits your invoice volume."
  },
  {
    question: "Can I use Lumafin for multiple entities?",
    answer: "Yes. Our Team and Scale plans support multiple entities with separate approval workflows, accounting integrations, and reporting. Perfect for holding companies and accounting firms managing multiple clients."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
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
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Everything you need to know about Lumafin Business.
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
              whileHover={{ scale: openIndex === idx ? 1 : 1.01 }}
              className="rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden shadow-sm transition-colors hover:bg-white"
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                whileTap={{ scale: 0.99 }}
                className="flex w-full items-center justify-between px-6 py-4 text-left"
              >
                <span className="text-sm font-semibold text-slate-900 pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-slate-200"
                >
                  {openIndex === idx ? (
                    <Minus className="h-4 w-4 text-slate-600" />
                  ) : (
                    <Plus className="h-4 w-4 text-slate-600" />
                  )}
                </motion.div>
              </motion.button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-slate-600 mb-4">
            Still have questions?
          </p>
          <motion.a
            href="mailto:support@lumafin.ch"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-white"
          >
            Contact our team
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
