"use client";

import { motion } from "framer-motion";
import { Star, Quote, ArrowRight, Linkedin } from "lucide-react";

const testimonials = [
  {
    quote: "Lumafin Business cut our invoice processing time by 75%. What used to take our finance team 2 days now happens in half a day.",
    author: "Sarah Chen",
    role: "CFO",
    company: "TechScale AG",
    initials: "SC",
    logo: "TS"
  },
  {
    quote: "The AI extraction accuracy is remarkable. We've eliminated manual data entry errors and our month-end close is now 3 days faster.",
    author: "Michael Brunner",
    role: "Head of Finance",
    company: "Innovate Solutions",
    initials: "MB",
    logo: "IS"
  },
  {
    quote: "Finally, an invoice tool that integrates seamlessly with Bexio. The approval workflows saved us from hiring another accountant.",
    author: "Lisa Müller",
    role: "Managing Partner",
    company: "Müller Treuhand",
    initials: "LM",
    logo: "MT"
  },
  {
    quote: "We process 800+ invoices monthly. Lumafin's duplicate detection alone has saved us thousands in prevented double payments.",
    author: "Thomas Weber",
    role: "Finance Director",
    company: "Alpine Logistics",
    initials: "TW",
    logo: "AL"
  },
  {
    quote: "The audit trail feature gives us complete peace of mind. Every action is logged, every approval timestamped. Auditors love it.",
    author: "Anna Koller",
    role: "Compliance Manager",
    company: "FinServ Group",
    initials: "AK",
    logo: "FG"
  },
  {
    quote: "Setup took 15 minutes. We connected our inbox, set up approval rules, and were processing invoices the same day. No IT needed.",
    author: "David Steiner",
    role: "Operations Lead",
    company: "FastGrow Startup",
    initials: "DS",
    logo: "FG"
  }
];

export function Testimonials() {
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
            <Star className="h-4 w-4 text-slate-500" />
            Testimonials
          </motion.span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            See what finance teams say about Lumafin
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Trusted by 200+ companies across Switzerland and Europe.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group cursor-pointer rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg relative overflow-hidden"
            >
              {/* Company logo in corner */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="absolute top-4 right-4"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-200 text-slate-600 text-xs font-bold opacity-40 group-hover:opacity-100 transition-opacity">
                  {testimonial.logo}
                </div>
              </motion.div>

              <motion.div
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 12, scale: 1.1 }}
                className="mb-4"
              >
                <Quote className="h-8 w-8 text-slate-200" />
              </motion.div>
              <p className="text-sm leading-relaxed text-slate-600">
                "{testimonial.quote}"
              </p>
              <div className="mt-6 flex items-center gap-3">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-700 text-white text-sm font-bold shadow-lg"
                >
                  {testimonial.initials}
                </motion.div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-slate-900">{testimonial.author}</p>
                  <p className="text-xs text-slate-500">{testimonial.role}, {testimonial.company}</p>
                </div>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-400 hover:bg-slate-900 hover:text-white transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                </motion.a>
              </div>
              <div className="mt-4 flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                  >
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:shadow-md transition-all"
          >
            View all case studies
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
