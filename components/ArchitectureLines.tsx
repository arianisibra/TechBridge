"use client";

import { motion } from "framer-motion";

interface ArchitectureLinesProps {
  className?: string;
}

export function ArchitectureLines({ className = "" }: ArchitectureLinesProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {/* Top-left corner - soft curved lines like architectural drawings */}
      <svg className="absolute top-0 left-0" width="80" height="80" viewBox="0 0 80 80">
        <motion.path
          d="M 0 0 L 0 25 Q 0 5 25 0"
          stroke="currentColor"
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.4 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="text-slate-400"
        />
        <motion.path
          d="M 0 0 L 0 15 L 15 0"
          stroke="currentColor"
          strokeWidth="0.8"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="2 2"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.2 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-slate-300"
        />
      </svg>

      {/* Top-right corner */}
      <svg className="absolute top-0 right-0" width="80" height="80" viewBox="0 0 80 80">
        <motion.path
          d="M 80 0 L 55 0 Q 80 5 80 25"
          stroke="currentColor"
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.4 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="text-slate-400"
        />
        <motion.path
          d="M 80 0 L 65 0 L 80 15"
          stroke="currentColor"
          strokeWidth="0.8"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="2 2"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.2 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-slate-300"
        />
      </svg>

      {/* Bottom-left corner */}
      <svg className="absolute bottom-0 left-0" width="80" height="80" viewBox="0 0 80 80">
        <motion.path
          d="M 0 80 L 0 55 Q 5 80 25 80"
          stroke="currentColor"
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.4 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="text-slate-400"
        />
        <motion.path
          d="M 0 80 L 0 65 L 15 80"
          stroke="currentColor"
          strokeWidth="0.8"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="2 2"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.2 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-slate-300"
        />
      </svg>

      {/* Bottom-right corner */}
      <svg className="absolute bottom-0 right-0" width="80" height="80" viewBox="0 0 80 80">
        <motion.path
          d="M 80 80 L 55 80 Q 80 75 80 55"
          stroke="currentColor"
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.4 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          className="text-slate-400"
        />
        <motion.path
          d="M 80 80 L 65 80 L 80 65"
          stroke="currentColor"
          strokeWidth="0.8"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="2 2"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.2 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-slate-300"
        />
      </svg>
    </div>
  );
}

