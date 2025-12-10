"use client";

import { motion } from "framer-motion";

export function Quote() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="relative mx-auto max-w-4xl px-4 text-center md:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
          className="cursor-pointer"
        >
          <motion.p
            className="text-2xl font-medium leading-relaxed text-slate-900 sm:text-3xl md:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            "Invoice processing shouldn't require a team of accountants. With AI, 
            we're making enterprise-grade AP automation accessible to every{" "}
            <motion.span
              className="inline-block bg-slate-900 px-2 py-1 text-white"
              whileHover={{ rotate: -2, scale: 1.05 }}
            >
              business.
            </motion.span>
            "
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex items-center justify-center gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-lg font-semibold text-slate-900"
            >
              LF
            </motion.div>
            <div className="text-left">
              <p className="font-semibold text-slate-900">Lumafin Team</p>
              <p className="text-sm text-slate-500">Zurich, Switzerland</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

