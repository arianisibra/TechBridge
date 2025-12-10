"use client";

import { motion } from "framer-motion";
import { AlertCircle, Clock, XCircle, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Hours wasted on manual entry",
    description: "Finance teams spend 40% of their time on invoice data entry instead of strategic work."
  },
  {
    icon: XCircle,
    title: "Errors delay month-end close",
    description: "Manual processing leads to 4% error rate, causing reconciliation delays and audit issues."
  },
  {
    icon: AlertCircle,
    title: "No visibility into AP status",
    description: "Invoices get lost in email threads. Approvers don't know what's pending."
  },
  {
    icon: TrendingDown,
    title: "Missed early payment discounts",
    description: "Slow processing means missing 2% early payment terms, leaving money on the table."
  }
];

export function Problem() {
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
            <AlertCircle className="h-4 w-4 text-slate-500" />
            The problem
          </motion.span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Manual invoice handling is costing you more than you think
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Every invoice that touches multiple hands, sits in an inbox, or gets keyed manually is a hidden cost to your business.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem, idx) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group cursor-pointer rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 transition-colors group-hover:bg-slate-900"
              >
                <problem.icon className="h-6 w-6 text-slate-600 transition-colors group-hover:text-white" />
              </motion.div>
              <h3 className="text-lg font-semibold text-slate-900">{problem.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
