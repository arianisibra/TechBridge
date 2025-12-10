"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, Server, FileCheck, Users, ArrowRight } from "lucide-react";

const securityFeatures = [
  {
    icon: Lock,
    title: "256-bit AES encryption",
    description: "All data encrypted at rest and in transit. Bank-grade security standard."
  },
  {
    icon: Shield,
    title: "GDPR compliant",
    description: "Full compliance with EU data protection regulations. Data processing agreements available."
  },
  {
    icon: Server,
    title: "Swiss/EU data hosting",
    description: "Your data never leaves Europe. Hosted in ISO 27001 certified data centers."
  },
  {
    icon: Users,
    title: "Role-based access",
    description: "Granular permissions. Control who sees what. Audit user activity."
  },
  {
    icon: Eye,
    title: "Read-only bank connections",
    description: "We never initiate payments. View-only access to financial data."
  },
  {
    icon: FileCheck,
    title: "SOC 2 Type II",
    description: "Annual third-party audits. Continuous security monitoring."
  }
];

const trustBadges = ["GDPR", "SOC 2", "ISO 27001", "Swiss Hosting"];

export function Security({ showHeader = true }: { showHeader?: boolean }) {
  return (
    <section id="security" className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        {showHeader && (
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
              <Shield className="h-4 w-4 text-slate-500" />
              Security & compliance
            </motion.span>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Enterprise-grade security by default
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Your financial data deserves the highest level of protection. We take security seriously so you can focus on your business.
            </p>
          </motion.div>
        )}

        <div className={`${showHeader ? 'mt-16' : 'mt-0'} grid gap-6 sm:grid-cols-2 lg:grid-cols-3`}>
          {securityFeatures.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group cursor-pointer rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition-all hover:shadow-lg hover:bg-white"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 transition-colors group-hover:bg-slate-900"
              >
                <feature.icon className="h-6 w-6 text-slate-600 transition-colors group-hover:text-white" />
              </motion.div>
              <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap items-center justify-center gap-4"
        >
          {trustBadges.map((badge, idx) => (
            <motion.div
              key={badge}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex cursor-pointer items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all hover:shadow-md hover:bg-white"
            >
              <Shield className="h-4 w-4 text-slate-500" />
              {badge}
            </motion.div>
          ))}
        </motion.div>

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
            Learn more about security
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
