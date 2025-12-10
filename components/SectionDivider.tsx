"use client";

import { motion } from "framer-motion";

export function SectionDivider() {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-slate-200 to-transparent"
    />
  );
}
