"use client";

import { Button } from "@/components/Button";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Globe, Cpu, TrendingUp, MapPin } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const trustBadges = [
  { icon: MapPin, label: "Schweizer Basis" },
  { icon: Briefcase, label: "B2B-Fokus" },
  { icon: Globe, label: "End-to-End Delivery" },
  { icon: Cpu, label: "Praktische KI" }
];

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-white pt-8 pb-16 sm:pt-12 md:pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50/50" aria-hidden />
      
      {/* Floating orbs */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-20 top-20 h-96 w-96 rounded-full bg-gradient-to-br from-slate-100/60 to-transparent blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -left-20 top-40 h-80 w-80 rounded-full bg-gradient-to-br from-slate-100/60 to-transparent blur-3xl"
      />
      
      {/* Hero content */}
      <div className="relative mx-auto max-w-6xl px-4 text-center md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
            >
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="h-2 w-2 rounded-full bg-emerald-500"
              />
              Ihr Schweizer Digitalisierungspartner
            </motion.div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="mx-auto max-w-4xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-900"
            >
              Digitalisierung, Produktentwicklung
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-slate-900"
            >
              & KI-Automatisierung
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-slate-400"
            >
              für messbare Geschäftsergebnisse
            </motion.span>
          </motion.h1>

          {/* Subheadline with feature pills */}
          <motion.p
            variants={itemVariants}
            className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg"
          >
            Wir modernisieren Ihre digitale Präsenz, entwickeln Web- und Mobile-Produkte, automatisieren Workflows mit KI und helfen Ihnen zu wachsen – mit einem Schweizer Ansprechpartner und einem Delivery-Team, das liefert.
          </motion.p>

          {/* Service Pills */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            {[
              { icon: Globe, label: "Web & Apps" },
              { icon: Cpu, label: "KI-Automatisierung" },
              { icon: Briefcase, label: "Digitalisierung" },
              { icon: TrendingUp, label: "Wachstum & SEO" }
            ].map((service) => (
              <motion.span
                key={service.label}
                whileHover={{ scale: 1.08, y: -2 }}
                className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-700 shadow-sm transition-shadow hover:shadow-md"
              >
                <service.icon className="h-3.5 w-3.5" />
                {service.label}
              </motion.span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 pt-2"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Button href="/contact">
                Kurzes Gespräch buchen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Button variant="secondary" href="#use-cases">
                Anwendungsfälle ansehen
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust Strip */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-6 pt-8 border-t border-slate-100 mt-8"
          >
            {trustBadges.map((badge, idx) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + idx * 0.1 }}
                whileHover={{ y: -2 }}
                className="flex items-center gap-2 text-sm text-slate-500"
              >
                <badge.icon className="h-4 w-4 text-slate-400" />
                <span>{badge.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
