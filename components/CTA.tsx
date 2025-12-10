"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, FileText, CheckCircle, Zap } from "lucide-react";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-20 sm:py-24 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-12"
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm"
            >
              <Calendar className="h-4 w-4 text-slate-500" />
              Book a demo
            </motion.div>

            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Ready to automate your invoice processing?
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              See how Lumafin Business can save your team 10+ hours per week. 
              Get a personalized demo with your actual workflow.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <motion.a
                href="/book-demo"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-sm font-semibold text-white shadow-lg hover:bg-slate-800"
              >
                Book a demo
                <ArrowRight className="h-4 w-4" />
              </motion.a>
              <motion.a
                href="#how-it-works"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                See how it works
              </motion.a>
            </div>

            <p className="mt-6 text-sm text-slate-500">
              Free 14-day trial • No credit card required • Setup in 10 minutes
            </p>
          </div>

          {/* Right: Dashboard mock */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -4 }}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg"
          >
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-900">Invoice Dashboard</span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                  Live preview
                </span>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Pending", value: "12", icon: FileText },
                  { label: "Approved", value: "48", icon: CheckCircle },
                  { label: "Synced", value: "156", icon: Zap }
                ].map((stat, idx) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="cursor-pointer rounded-xl bg-slate-50 p-3 text-center transition-all hover:bg-slate-100"
                  >
                    <stat.icon className="mx-auto h-5 w-5 text-slate-400 mb-1" />
                    <p className="text-lg font-bold text-slate-900">{stat.value}</p>
                    <p className="text-xs text-slate-500">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Recent invoices */}
              <div className="space-y-2">
                {["Acme Corp", "TechSupply", "Office Pro"].map((vendor, idx) => (
                  <motion.div
                    key={vendor}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    whileHover={{ x: 4 }}
                    className="flex cursor-pointer items-center justify-between rounded-lg bg-slate-50 px-4 py-2 transition-all hover:bg-slate-100"
                  >
                    <span className="text-sm text-slate-700">{vendor}</span>
                    <span className="text-xs text-slate-500">Just now</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
