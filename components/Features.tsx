"use client";

import { motion } from "framer-motion";
import { FileSearch, CheckSquare, GitBranch, Building2, Copy, FileText, Sparkles, ArrowRight, Mail, Cpu, Check, RefreshCw, AlertTriangle } from "lucide-react";

const features = [
  {
    icon: FileSearch,
    title: "OCR extraction",
    description: "AI reads PDFs, scans, and images. Extracts vendor, amounts, dates, line items, VAT, and IBAN with 99.5% accuracy.",
    visual: (
      <div className="mt-4 rounded-xl border border-slate-200 bg-white p-3">
        <div className="space-y-2">
          {[
            { label: "Vendor", width: "70%", color: "from-blue-400 to-blue-300" },
            { label: "Amount", width: "50%", color: "from-emerald-400 to-emerald-300" },
            { label: "Due", width: "40%", color: "from-amber-400 to-amber-300" }
          ].map((field, i) => (
            <motion.div
              key={field.label}
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="flex items-center justify-between"
            >
              <span className="text-xs text-slate-400">{field.label}</span>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: field.width }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className={`h-2 rounded-full bg-gradient-to-r ${field.color}`}
              />
            </motion.div>
          ))}
        </div>
        <div className="mt-3 flex items-center gap-2 text-xs text-emerald-600">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Extracting...
        </div>
      </div>
    )
  },
  {
    icon: CheckSquare,
    title: "Validation rules",
    description: "Define custom rules. Flag invoices that exceed thresholds, miss PO numbers, or have unusual patterns.",
    visual: (
      <div className="mt-4 space-y-2">
        {[
          { rule: "Amount < CHF 5'000", status: "pass" },
          { rule: "Vendor verified", status: "pass" },
          { rule: "PO number present", status: "warn" }
        ].map((item, i) => (
          <motion.div
            key={item.rule}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.1 }}
            whileHover={{ x: 4 }}
            className={`flex items-center justify-between rounded-lg px-3 py-2 text-xs cursor-pointer ${
              item.status === "pass" ? "bg-slate-100 text-slate-700" : "bg-slate-200 text-slate-600"
            }`}
          >
            <span>{item.rule}</span>
            <span className="font-bold">{item.status === "pass" ? "✓" : "!"}</span>
          </motion.div>
        ))}
      </div>
    )
  },
  {
    icon: GitBranch,
    title: "Approval workflows",
    description: "Route invoices based on amount, vendor, or department. Set multi-level approvals and escalation rules.",
    visual: (
      <div className="mt-4">
        <div className="flex items-center justify-between">
          {[
            { label: "Finance", done: true },
            { label: "Manager", done: true },
            { label: "CFO", done: false }
          ].map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.15 }}
              className="flex flex-col items-center"
            >
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold cursor-pointer ${
                  step.done ? "bg-slate-900 text-white" : "bg-slate-200 text-slate-500"
                }`}
              >
                {step.done ? "✓" : i + 1}
              </motion.div>
              <span className="mt-1 text-xs text-slate-500">{step.label}</span>
              {i < 2 && (
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: 24 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className={`absolute ml-16 mt-5 h-0.5 ${step.done ? "bg-slate-900" : "bg-slate-200"}`}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    )
  },
  {
    icon: Building2,
    title: "Vendor matching",
    description: "Auto-match invoices to existing vendors. Flag new vendors for review. Maintain a clean vendor master.",
    visual: (
      <div className="mt-4 space-y-2">
        {[
          { name: "Acme Corp", match: "98%" },
          { name: "TechSupply", match: "100%" },
          { name: "New Vendor", match: "New" }
        ].map((vendor, i) => (
          <motion.div
            key={vendor.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.1 }}
            whileHover={{ scale: 1.02, x: 4 }}
            className="flex cursor-pointer items-center gap-3 rounded-lg border border-slate-200 bg-white p-2 hover:shadow-sm transition-all"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-200 text-slate-600 text-xs font-bold">
              {vendor.name.slice(0, 2).toUpperCase()}
            </div>
            <span className="flex-1 text-xs font-medium text-slate-700">{vendor.name}</span>
            <span className={`text-xs px-2 py-0.5 rounded-full ${
              vendor.match === "New" ? "bg-slate-200 text-slate-600" : "bg-slate-100 text-slate-700"
            }`}>
              {vendor.match}
            </span>
          </motion.div>
        ))}
      </div>
    )
  },
  {
    icon: Copy,
    title: "Duplicate detection",
    description: "AI compares incoming invoices against history. Flags potential duplicates before payment.",
    visual: (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-4"
      >
        <div className="rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 p-3">
          <div className="flex items-start gap-2">
            <AlertTriangle className="h-4 w-4 text-slate-500 mt-0.5" />
            <div>
              <p className="text-xs font-semibold text-slate-700">Possible duplicate detected</p>
              <p className="text-xs text-slate-500 mt-1">Similar to INV-2024-089 from Nov 15</p>
              <div className="flex gap-2 mt-2">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-lg bg-slate-900 px-2 py-1 text-xs text-white"
                >
                  Review
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-lg bg-white px-2 py-1 text-xs text-slate-700 border border-slate-300"
                >
                  Dismiss
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    )
  },
  {
    icon: FileText,
    title: "Audit trail",
    description: "Every action timestamped. Every change logged. Export-ready reports for compliance and audits.",
    visual: (
      <div className="mt-4 rounded-xl border border-slate-200 bg-white p-3">
        <div className="space-y-2">
          {[
            { icon: Mail, action: "Received", time: "10:32" },
            { icon: Cpu, action: "Extracted", time: "10:32" },
            { icon: Check, action: "Approved", time: "14:15" },
            { icon: RefreshCw, action: "Synced", time: "14:16" }
          ].map((log, i) => (
            <motion.div
              key={log.action}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
              whileHover={{ x: 4, backgroundColor: "#f8fafc" }}
              className="flex cursor-pointer items-center gap-2 rounded-lg p-1 text-xs transition-colors"
            >
              <log.icon className="h-3 w-3 text-slate-400" />
              <span className="flex-1 text-slate-600">{log.action}</span>
              <span className="text-slate-400">{log.time}</span>
            </motion.div>
          ))}
        </div>
      </div>
    )
  }
];

export function Features() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24">
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
            <Sparkles className="h-4 w-4 text-slate-500" />
            Features
          </motion.span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Everything you need to automate AP
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Purpose-built for invoice processing. No bloat. No unnecessary complexity.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
              className="group cursor-pointer rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 transition-colors group-hover:bg-slate-900"
              >
                <feature.icon className="h-6 w-6 text-slate-600 transition-colors group-hover:text-white" />
              </motion.div>
              <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{feature.description}</p>
              {feature.visual}
              
              <motion.div
                className="mt-4 flex items-center gap-2 text-sm font-medium text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                Learn more
                <ArrowRight className="h-4 w-4" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
