"use client";

import { motion } from "framer-motion";
import { Plug, ArrowRight, Check } from "lucide-react";

const integrations = [
  { name: "Bexio", category: "Accounting", popular: true },
  { name: "Abacus", category: "ERP", popular: true },
  { name: "SAP", category: "ERP", popular: false },
  { name: "Microsoft 365", category: "Productivity", popular: true },
  { name: "Google Workspace", category: "Productivity", popular: false },
  { name: "Slack", category: "Communication", popular: true },
  { name: "Teams", category: "Communication", popular: false },
  { name: "n8n", category: "Automation", popular: false },
  { name: "Zapier", category: "Automation", popular: true },
  { name: "QuickBooks", category: "Accounting", popular: false },
  { name: "Xero", category: "Accounting", popular: false },
  { name: "REST API", category: "Custom", popular: true }
];

const categories = [
  { name: "Accounting", description: "Sync approved invoices automatically" },
  { name: "ERP", description: "Connect to enterprise systems" },
  { name: "Productivity", description: "Work where you already work" },
  { name: "Automation", description: "Build custom workflows" }
];

export function Integrations() {
  return (
    <section id="integrations" className="relative overflow-hidden bg-white py-20 sm:py-24">
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
            <Plug className="h-4 w-4 text-slate-500" />
            Integrations
          </motion.span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Works with your existing stack
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Connect to your ERP, accounting software, and communication tools. Approved invoices sync automatically.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, idx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="cursor-pointer rounded-xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition-all hover:shadow-md hover:bg-white"
            >
              <h3 className="font-semibold text-slate-900">{category.name}</h3>
              <p className="mt-1 text-sm text-slate-500">{category.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Integration grid */}
        <div className="mt-12 grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-6">
          {integrations.map((integration, idx) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.03 }}
              whileHover={{ y: -4, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex cursor-pointer flex-col items-center justify-center rounded-xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition-all hover:shadow-md hover:bg-white"
            >
              {integration.popular && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-white"
                >
                  <Check className="h-3 w-3" />
                </motion.div>
              )}
              <div className="h-10 w-10 rounded-lg bg-slate-100 flex items-center justify-center mb-2 transition-colors group-hover:bg-slate-900">
                <span className="text-sm font-bold text-slate-600 transition-colors group-hover:text-white">
                  {integration.name.slice(0, 2).toUpperCase()}
                </span>
              </div>
              <span className="text-xs font-medium text-slate-900 text-center">{integration.name}</span>
              <span className="text-xs text-slate-400">{integration.category}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <motion.a
            href="/book-demo"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50"
          >
            See all integrations
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
