"use client";

import { motion } from "framer-motion";

const logos = [
  { name: "Bexio", color: "#00A3E0" },
  { name: "Abacus", color: "#E31937" },
  { name: "SAP", color: "#0FAAFF" },
  { name: "Microsoft", color: "#00A4EF" },
  { name: "Google", color: "#4285F4" },
  { name: "Slack", color: "#4A154B" },
  { name: "Xero", color: "#13B5EA" },
  { name: "QuickBooks", color: "#2CA01C" }
];

export function Logos() {
  return (
    <section className="relative overflow-hidden bg-white py-12">
      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <p className="text-2xl font-semibold text-slate-900 sm:text-3xl">
            Trusted by <span className="text-slate-400">200+</span> companies
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Integrates with leading accounting and ERP tools
          </p>
        </motion.div>
        
        {/* Animated marquee */}
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent" />
          
          <motion.div
            animate={{ x: [0, -800] }}
            transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 25, ease: "linear" } }}
            className="flex gap-8"
          >
            {[...logos, ...logos, ...logos].map((logo, idx) => (
              <motion.a
                key={idx}
                href={`https://${logo.name.toLowerCase()}.com`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex h-16 w-32 flex-shrink-0 cursor-pointer items-center justify-center rounded-xl border border-slate-100 bg-slate-50 transition-all hover:border-slate-200 hover:bg-white hover:shadow-lg"
              >
                {/* Logo placeholder with company initial */}
                <div className="flex items-center gap-2">
                  <div 
                    className="flex h-8 w-8 items-center justify-center rounded-lg text-white text-sm font-bold"
                    style={{ backgroundColor: logo.color }}
                  >
                    {logo.name.charAt(0)}
                  </div>
                  <span className="text-sm font-semibold text-slate-600 group-hover:text-slate-900">
                    {logo.name}
                  </span>
                </div>
                
                {/* Hover tooltip */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-slate-900 px-3 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  View integration →
                </motion.div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
