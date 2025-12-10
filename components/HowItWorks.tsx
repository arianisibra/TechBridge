"use client";

import { motion } from "framer-motion";
import { Mail, Cpu, CheckSquare, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Mail,
    title: "Capture invoices",
    description: "Forward invoices to your dedicated email, upload via dashboard, or scan with mobile app. We accept PDF, images, and e-invoices.",
    features: ["Dedicated inbox", "Drag & drop upload", "Mobile scanning", "E-invoice support"]
  },
  {
    number: "02",
    icon: Cpu,
    title: "AI extracts & validates",
    description: "Our AI reads every invoice, extracts key fields, validates against your rules, and flags exceptions for review.",
    features: ["OCR extraction", "Field validation", "Duplicate detection", "Exception flagging"]
  },
  {
    number: "03",
    icon: CheckSquare,
    title: "Approve & sync",
    description: "Invoices route to the right approvers based on your rules. Approved invoices sync directly to your ERP or accounting tool.",
    features: ["Smart routing", "Multi-level approval", "One-click sync", "Real-time status"]
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden bg-white py-20 sm:py-24">
      {/* Background */}
      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-slate-100/50 to-transparent blur-3xl"
      />

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
            <span className="h-2 w-2 rounded-full bg-slate-900" />
            How it works
          </motion.span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            From invoice to payment in three steps
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            No complex setup. No training required. Start processing invoices in under 10 minutes.
          </p>
        </motion.div>

        <div className="mt-20 space-y-16">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className={`grid items-center gap-12 lg:grid-cols-2 ${
                idx % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Content */}
              <div className={idx % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="flex items-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-2xl bg-slate-900 text-white shadow-lg transition-colors hover:bg-slate-800"
                  >
                    <step.icon className="h-6 w-6" />
                  </motion.div>
                  <span className="text-4xl font-bold text-slate-200">{step.number}</span>
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-slate-900 sm:text-3xl">
                  {step.title}
                </h3>
                <p className="mt-4 text-lg text-slate-600">
                  {step.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {step.features.map((feature) => (
                    <motion.span
                      key={feature}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="cursor-pointer rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-200"
                    >
                      {feature}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Visual */}
              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -4 }}
                className={`rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-shadow hover:shadow-lg ${
                  idx % 2 === 1 ? "lg:col-start-1" : ""
                }`}
              >
                <div className="space-y-3">
                  {step.number === "01" && (
                    <>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex cursor-pointer items-center gap-3 rounded-xl bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100">
                          <Mail className="h-5 w-5 text-slate-600" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-slate-900">invoices@yourcompany.lumafin.ch</p>
                          <p className="text-xs text-slate-500">3 new invoices received</p>
                        </div>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex cursor-pointer items-center gap-3 rounded-xl bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
                      >
                        <div className="h-10 w-10 rounded-lg bg-slate-100 flex items-center justify-center">
                          <svg className="h-5 w-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-slate-900">Drag & drop upload</p>
                          <p className="text-xs text-slate-500">PDF, PNG, JPG supported</p>
                        </div>
                      </motion.div>
                    </>
                  )}
                  {step.number === "02" && (
                    <>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="cursor-pointer rounded-xl bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
                      >
                        <p className="text-xs font-semibold text-slate-500 mb-2">EXTRACTED DATA</p>
                        <div className="space-y-2 text-sm">
                          {[
                            { label: "Vendor", value: "Acme Corp" },
                            { label: "Amount", value: "CHF 4'250.00" },
                            { label: "Due date", value: "Dec 15, 2024" }
                          ].map((field) => (
                            <motion.div
                              key={field.label}
                              whileHover={{ x: 4 }}
                              className="flex justify-between"
                            >
                              <span className="text-slate-500">{field.label}</span>
                              <span className="font-medium text-slate-900">{field.value}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="flex cursor-pointer items-center gap-2 rounded-xl bg-slate-100 p-3 text-sm text-slate-700"
                      >
                        <motion.span
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="h-2 w-2 rounded-full bg-emerald-500"
                        />
                        Validation passed
                      </motion.div>
                    </>
                  )}
                  {step.number === "03" && (
                    <>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="cursor-pointer rounded-xl bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-medium text-slate-900">Approval chain</span>
                          <span className="text-xs text-slate-500">2/3 approved</span>
                        </div>
                        <div className="space-y-2">
                          {["Finance Team", "Department Head", "CFO"].map((role, i) => (
                            <motion.div
                              key={role}
                              whileHover={{ x: 4 }}
                              className="flex cursor-pointer items-center gap-3"
                            >
                              <div className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-medium ${
                                i < 2 ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-400"
                              }`}>
                                {i < 2 ? "✓" : i + 1}
                              </div>
                              <span className={`text-sm ${i < 2 ? "text-slate-900" : "text-slate-400"}`}>{role}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <motion.a
            href="/book-demo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-sm font-semibold text-white shadow-lg hover:bg-slate-800"
          >
            Book a demo
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
