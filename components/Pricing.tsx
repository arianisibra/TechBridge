"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles, Star } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "For small teams getting started",
    price: "CHF 199",
    period: "/month",
    features: [
      "Up to 100 invoices/month",
      "2 team members",
      "OCR extraction",
      "Email inbox",
      "Basic approval workflows",
      "Email support"
    ],
    cta: "Start free trial",
    highlighted: false
  },
  {
    name: "Team",
    description: "For growing finance teams",
    price: "CHF 499",
    period: "/month",
    features: [
      "Up to 500 invoices/month",
      "10 team members",
      "Advanced OCR + validation",
      "Custom approval workflows",
      "ERP integrations",
      "Duplicate detection",
      "Priority support"
    ],
    cta: "Book a demo",
    highlighted: true
  },
  {
    name: "Scale",
    description: "For enterprises with complex needs",
    price: "Custom",
    period: "",
    features: [
      "Unlimited invoices",
      "Unlimited team members",
      "Custom integrations",
      "Advanced analytics",
      "Dedicated account manager",
      "SLA guarantee",
      "On-premise option"
    ],
    cta: "Contact sales",
    highlighted: false
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden bg-white py-20 sm:py-24">
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
            Pricing
          </motion.span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            No hidden fees. No per-user charges for approvers. Pay based on invoice volume.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`group relative cursor-pointer rounded-2xl border p-8 transition-all ${
                plan.highlighted
                  ? "border-slate-900 bg-slate-50 shadow-xl"
                  : "border-slate-200 bg-slate-50 shadow-sm hover:shadow-lg hover:bg-white"
              }`}
            >
              {plan.highlighted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2"
                >
                  <span className="inline-flex items-center gap-1 rounded-full bg-slate-900 px-4 py-1 text-xs font-semibold text-white shadow-lg">
                    <Star className="h-3 w-3 fill-current" />
                    Most popular
                  </span>
                </motion.div>
              )}
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {plan.name}
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  {plan.description}
                </p>
              </div>
              <div className="mt-6">
                <motion.span
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold text-slate-900"
                >
                  {plan.price}
                </motion.span>
                <span className="text-slate-500">
                  {plan.period}
                </span>
              </div>
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature, fIdx) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: fIdx * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-slate-200 group-hover:bg-slate-900 transition-colors">
                      <Check className="h-3 w-3 text-slate-600 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-sm text-slate-600">
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>
              <motion.a
                href="/book-demo"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`mt-8 flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition ${
                  plan.highlighted
                    ? "bg-slate-900 text-white hover:bg-slate-800"
                    : "bg-slate-200 text-slate-900 hover:bg-slate-300"
                }`}
              >
                {plan.cta}
                <ArrowRight className="h-4 w-4" />
              </motion.a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-sm text-slate-500"
        >
          All plans include 14-day free trial. No credit card required.
        </motion.p>
      </div>
    </section>
  );
}
