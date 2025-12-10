"use client";

import { motion } from "framer-motion";
import { Building2, Users, Calculator, Briefcase, ArrowRight, Check } from "lucide-react";

const useCases = [
  {
    icon: Building2,
    title: "SMEs & Startups",
    description: "Automate invoice processing without hiring additional finance staff. Scale your AP operations as you grow.",
    features: ["No IT required", "Quick setup", "Pay as you grow"],
    stats: { value: "80%", label: "time saved" },
    visual: (
      <div className="mt-4 flex items-end gap-1">
        {[20, 35, 25, 45, 30, 55, 40].map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: h }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.05 }}
            className="w-4 rounded-t bg-slate-300"
            style={{ height: h }}
          />
        ))}
      </div>
    )
  },
  {
    icon: Users,
    title: "Finance teams",
    description: "Free your team from manual data entry. Focus on analysis, strategy, and vendor relationships.",
    features: ["Unlimited users", "Role-based access", "Collaboration"],
    stats: { value: "5000+", label: "invoices/month" },
    visual: (
      <div className="mt-4 flex -space-x-3">
        {["AS", "MK", "LB", "TW"].map((initials, i) => (
          <motion.div
            key={initials}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.1 }}
            whileHover={{ scale: 1.1, zIndex: 10 }}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-white text-white text-xs font-bold shadow-lg"
            style={{ backgroundColor: ["#475569", "#64748b", "#94a3b8", "#334155"][i] }}
          >
            {initials}
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-slate-900 text-white text-xs font-bold shadow-lg"
        >
          +8
        </motion.div>
      </div>
    )
  },
  {
    icon: Calculator,
    title: "Treuhand & accounting",
    description: "Process invoices for multiple clients. Maintain separation. Export to any accounting system.",
    features: ["Multi-client", "12+ export formats", "White label"],
    stats: { value: "12+", label: "export formats" },
    visual: (
      <div className="mt-4 grid grid-cols-4 gap-2">
        {["Client A", "Client B", "Client C", "Client D"].map((client, i) => (
          <motion.div
            key={client}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer rounded-lg bg-slate-100 p-2 text-center text-xs text-slate-700 hover:bg-slate-200 transition-colors"
          >
            {client}
          </motion.div>
        ))}
      </div>
    )
  },
  {
    icon: Briefcase,
    title: "Agencies & consultancies",
    description: "Handle project-based invoices, vendor payments, and expense reconciliation efficiently.",
    features: ["Project tracking", "Custom approvals", "Time savings"],
    stats: { value: "3 days", label: "faster close" },
    visual: (
      <div className="mt-4">
        <div className="flex items-center justify-between text-xs mb-1">
          <span className="text-slate-500">Project Alpha</span>
          <span className="text-slate-700 font-medium">85%</span>
        </div>
        <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "85%" }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-full rounded-full bg-slate-400"
          />
        </div>
      </div>
    )
  }
];

export function UseCases() {
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
            <Building2 className="h-4 w-4 text-slate-500" />
            Who it's for
          </motion.span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Built for teams that handle invoices
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            From growing startups to established finance departments, Lumafin Business scales with your needs.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {useCases.map((useCase, idx) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group cursor-pointer rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-lg relative overflow-hidden"
            >
              {/* Stats badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 + 0.2 }}
                className="absolute top-6 right-6 text-right"
              >
                <p className="text-2xl font-bold text-slate-900">{useCase.stats.value}</p>
                <p className="text-xs text-slate-500">{useCase.stats.label}</p>
              </motion.div>

              <div className="flex items-start justify-between">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 transition-colors group-hover:bg-slate-900"
                >
                  <useCase.icon className="h-7 w-7 text-slate-600 transition-colors group-hover:text-white" />
                </motion.div>
              </div>
              
              <h3 className="mt-6 text-xl font-semibold text-slate-900">{useCase.title}</h3>
              <p className="mt-3 text-slate-600">{useCase.description}</p>
              
              {useCase.visual}
              
              <div className="mt-6 flex flex-wrap gap-2">
                {useCase.features.map((feature) => (
                  <motion.span
                    key={feature}
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex cursor-pointer items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 hover:bg-slate-200 transition-colors"
                  >
                    <Check className="h-3 w-3" />
                    {feature}
                  </motion.span>
                ))}
              </div>

              <motion.div
                className="mt-6 flex items-center gap-2 text-sm font-medium text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity"
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
