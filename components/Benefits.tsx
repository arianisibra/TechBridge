"use client";

import { motion } from "framer-motion";
import { Clock, Shield, Users, FileCheck, TrendingUp, Search, ArrowRight } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "80% faster processing",
    description: "Reduce invoice processing time from 15 minutes to under 3 minutes per invoice.",
    stat: "3 min"
  },
  {
    icon: FileCheck,
    title: "99.5% extraction accuracy",
    description: "AI-powered OCR extracts vendor, amounts, dates, and line items with near-perfect accuracy.",
    stat: "99.5%"
  },
  {
    icon: Shield,
    title: "Complete audit trail",
    description: "Every action logged. Every approval timestamped. Ready for any audit.",
    stat: "100%"
  },
  {
    icon: Users,
    title: "Team collaboration",
    description: "Route invoices to the right approvers. Set thresholds and escalation rules.",
    stat: "∞"
  },
  {
    icon: TrendingUp,
    title: "Better cash flow visibility",
    description: "Real-time view of outstanding invoices, payment schedules, and AP aging.",
    stat: "Live"
  },
  {
    icon: Search,
    title: "Duplicate detection",
    description: "AI flags potential duplicates before payment. Never pay the same invoice twice.",
    stat: "0"
  }
];

export function Benefits() {
  return (
    <section id="product" className="relative overflow-hidden bg-white py-20 sm:py-24">
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
            <TrendingUp className="h-4 w-4 text-slate-500" />
            Key benefits
          </motion.span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Built for finance teams who demand results
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Measurable impact from day one. No learning curve. No disruption to your existing workflows.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative cursor-pointer rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg overflow-hidden"
            >
              {/* Stat badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 + 0.2 }}
                className="absolute top-4 right-4 rounded-full bg-slate-100 px-3 py-1 text-sm font-bold text-slate-700 transition-colors group-hover:bg-slate-900 group-hover:text-white"
              >
                {benefit.stat}
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 transition-colors group-hover:bg-slate-900"
              >
                <benefit.icon className="h-6 w-6 text-slate-600 transition-colors group-hover:text-white" />
              </motion.div>
              <h3 className="text-lg font-semibold text-slate-900">{benefit.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{benefit.description}</p>
              
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
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
