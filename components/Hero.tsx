"use client";

import { Button } from "@/components/Button";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { ArrowRight, MapPin, Palette, Cpu, Settings, TrendingUp, ChevronDown } from "lucide-react";
import { useState, useRef } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    } 
  }
};

export function Hero() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Transform values for parallax effect
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  // Track scroll progress for scroll indicator
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollProgress(latest);
  });

  return (
    <section 
      ref={sectionRef}
      id="hero" 
      className="relative overflow-hidden bg-white pt-24 pb-32 sm:pt-32 sm:pb-40 md:pt-40 md:pb-48"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50/50" aria-hidden />
      
      {/* Enhanced floating orbs */}
      <motion.div
        animate={{ 
          y: [0, -50, 0], 
          x: [0, 40, 0],
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-32 top-20 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-blue-50/50 via-purple-50/40 to-transparent blur-3xl"
      />
      <motion.div
        animate={{ 
          y: [0, 60, 0], 
          x: [0, -50, 0],
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -left-32 top-40 h-[550px] w-[550px] rounded-full bg-gradient-to-br from-emerald-50/50 via-blue-50/40 to-transparent blur-3xl"
      />
      
      {/* Animated gradient lines that move down on scroll - More prominent */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 300]) }}
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        {/* Main vertical lines with stronger colors */}
        {[
          { left: "10%", color: "from-blue-400/40 via-blue-500/60 to-transparent", delay: 0 },
          { left: "25%", color: "from-purple-400/40 via-purple-500/60 to-transparent", delay: 0.2 },
          { left: "75%", color: "from-emerald-400/40 via-emerald-500/60 to-transparent", delay: 0.6 },
          { left: "90%", color: "from-blue-400/40 via-blue-500/60 to-transparent", delay: 0.8 }
        ].map((line, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ 
              opacity: [0.3, 0.7, 0.3],
              scaleY: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 3 + idx * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: line.delay
            }}
            style={{
              left: line.left,
              background: `linear-gradient(to bottom, 
                ${idx === 0 ? 'rgba(96, 165, 250, 0.5)' : idx === 1 ? 'rgba(168, 85, 247, 0.5)' : idx === 2 ? 'rgba(52, 211, 153, 0.5)' : 'rgba(96, 165, 250, 0.5)'}, 
                ${idx === 0 ? 'rgba(59, 130, 246, 0.7)' : idx === 1 ? 'rgba(147, 51, 234, 0.7)' : idx === 2 ? 'rgba(16, 185, 129, 0.7)' : 'rgba(59, 130, 246, 0.7)'}, 
                transparent)`
            }}
            className="absolute top-0 w-0.5 h-full"
          />
        ))}

        {/* Animated scanning lines that move down */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`scan-${i}`}
            initial={{ y: `${-20 + i * 30}%` }}
            animate={{ 
              y: [`${-20 + i * 30}%`, `${120 + i * 30}%`],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "linear",
              delay: i * 1.2
            }}
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-400/60 to-transparent"
            style={{
              boxShadow: `0 0 20px rgba(148, 163, 184, 0.4)`
            }}
          />
        ))}

        {/* Pulsing horizontal accent lines */}
        {[
          { top: "20%", delay: 0 },
          { top: "50%", delay: 1 },
          { top: "80%", delay: 2 }
        ].map((line, idx) => (
          <motion.div
            key={`pulse-${idx}`}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scaleX: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: line.delay
            }}
            style={{ top: line.top }}
            className="absolute left-1/2 -translate-x-1/2 w-1/3 h-0.5 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
          />
        ))}
      </motion.div>

      {/* Hero content with parallax */}
      <motion.div 
        style={{ y, opacity, scale }}
        className="relative mx-auto max-w-5xl px-4 text-center sm:px-6"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12 sm:space-y-16"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <motion.div
              whileHover={{ scale: 1.08, y: -3 }}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 shadow-sm backdrop-blur-sm"
            >
              <motion.span
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="h-2.5 w-2.5 rounded-full bg-emerald-500"
              />
              <MapPin className="h-3.5 w-3.5 text-slate-500" />
              <span>Schweizer Digitalisierungspartner</span>
            </motion.div>
          </motion.div>

          {/* Headline - Much shorter and catchier */}
          <motion.h1
            variants={itemVariants}
            className="mx-auto max-w-4xl text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          >
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="block text-slate-900"
            >
              Digitalisierung
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="block bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent"
            >
              die funktioniert
            </motion.span>
          </motion.h1>

          {/* Subheadline - Short and clear */}
          <motion.p
            variants={itemVariants}
            className="mx-auto max-w-2xl text-xl leading-relaxed text-slate-600 sm:text-2xl sm:leading-relaxed"
          >
            Webseiten, KI & Wachstum.
            <br className="hidden sm:block" />
            <span className="text-slate-500">Schweizer Partner, messbare Ergebnisse.</span>
          </motion.p>

          {/* CTAs with better spacing */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-5 pt-6"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button href="/contact">
                Kostenlose Beratung
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button variant="secondary" href="#services">
                Leistungen ansehen
              </Button>
            </motion.div>
          </motion.div>

          {/* Service badges with better spacing */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-6 pt-16 border-t border-slate-100"
          >
            {[
              { icon: Palette, label: "Webseite & Design" },
              { icon: Cpu, label: "KI-Automatisierung" },
              { icon: Settings, label: "Digitalisierung" },
              { icon: TrendingUp, label: "Wachstum & SEO" }
            ].map((badge, idx) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -4, scale: 1.05 }}
                className="flex items-center gap-2.5 text-sm font-medium text-slate-600"
              >
                <badge.icon className="h-4.5 w-4.5 text-slate-400" />
                <span>{badge.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator - disappears on scroll */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ 
          opacity: scrollProgress > 0.1 ? 0 : 1,
          y: scrollProgress > 0.1 ? 20 : 0
        }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ 
            y: [0, 8, 0],
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
            Scroll
          </span>
          <motion.div
            animate={{ 
              y: [0, 4, 0],
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <ChevronDown className="h-6 w-6 text-slate-400" />
          </motion.div>
          {/* Animated line that extends down */}
          <motion.div
            animate={{ 
              height: [0, 40, 0],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-px bg-gradient-to-b from-slate-400 to-transparent"
          />
        </motion.div>
      </motion.div>

      {/* Floating particles that move down on scroll */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 300]) }}
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: `${15 + i * 15}%`,
              y: `${10 + i * 15}%`,
              opacity: 0.1
            }}
            animate={{
              y: [`${10 + i * 15}%`, `${20 + i * 15}%`, `${10 + i * 15}%`],
              opacity: [0.1, 0.2, 0.1],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
            className="absolute h-1 w-1 rounded-full bg-slate-400"
          />
        ))}
      </motion.div>
    </section>
  );
}
