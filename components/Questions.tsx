"use client";

import { motion } from "framer-motion";
import { FileSearch, Shield, Zap, Users, Clock, CheckSquare, GitBranch, Building2, Lock, Globe } from "lucide-react";

const questionRows = [
  [
    { icon: FileSearch, text: "How accurate is AI invoice extraction?" },
    { icon: Clock, text: "How long does it take to process an invoice?" },
    { icon: Shield, text: "What security certifications do you have?" },
    { icon: Users, text: "Can multiple team members approve invoices?" },
    { icon: Zap, text: "How fast is the ERP sync?" },
  ],
  [
    { icon: CheckSquare, text: "What validation rules can I set up?" },
    { icon: GitBranch, text: "How do approval workflows work?" },
    { icon: Building2, text: "Which accounting systems do you integrate with?" },
    { icon: Lock, text: "Is my financial data encrypted?" },
    { icon: Globe, text: "Where is my data hosted?" },
  ],
  [
    { icon: FileSearch, text: "Can I extract line items from invoices?" },
    { icon: Clock, text: "How quickly can I get started?" },
    { icon: Shield, text: "Are you GDPR compliant?" },
    { icon: Users, text: "What's the pricing per user?" },
    { icon: Zap, text: "Do you detect duplicate invoices?" },
  ],
];

export function Questions() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24">
      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center mb-12"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            AI is changing how businesses find software.
            <br />
            <span className="text-slate-500">Be found for the right questions.</span>
          </h2>
        </motion.div>
      </div>

      {/* Scrolling rows */}
      <div className="space-y-4">
        {questionRows.map((row, rowIdx) => (
          <div key={rowIdx} className="relative overflow-hidden">
            {/* Gradient masks */}
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-slate-50 to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-slate-50 to-transparent" />
            
            <motion.div
              animate={{ 
                x: rowIdx % 2 === 0 ? [0, -1000] : [-1000, 0] 
              }}
              transition={{ 
                x: { 
                  repeat: Infinity, 
                  repeatType: "loop", 
                  duration: 30 + rowIdx * 5, 
                  ease: "linear" 
                } 
              }}
              className="flex gap-4"
            >
              {/* Duplicate items for seamless loop */}
              {[...row, ...row, ...row].map((question, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex cursor-pointer items-center gap-3 whitespace-nowrap rounded-full border border-slate-200 bg-white px-5 py-3 shadow-sm transition-all hover:shadow-md hover:border-slate-300"
                >
                  <question.icon className="h-4 w-4 text-slate-400 transition-colors group-hover:text-slate-700" />
                  <span className="text-sm font-medium text-slate-600 transition-colors group-hover:text-slate-900">
                    {question.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}

