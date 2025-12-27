"use client";

import { Button } from "@/components/Button";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";

const navLinks = [
  { label: "Leistungen", href: "/services" },
  { label: "Projekte", href: "/work" },
  { label: "Über uns", href: "/about" },
  { label: "Kontakt", href: "/contact" }
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/80 backdrop-blur-lg"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="flex items-center gap-3 text-lg font-semibold group">
          {logoError ? (
            <>
              <motion.span
                whileHover={{ scale: 1.1, rotate: 10 }}
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-white shadow-lg text-sm font-bold"
              >
                TB
              </motion.span>
              <span className="transition-colors group-hover:text-slate-700">
                TechBridge
              </span>
            </>
          ) : (
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative h-10 w-auto"
            >
              <Image
                src="/logo.svg"
                alt="TechBridge Logo"
                width={120}
                height={40}
                className="h-10 w-auto object-contain"
                onError={() => setLogoError(true)}
                priority
              />
            </motion.div>
          )}
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 lg:flex">
          {navLinks.map((link, idx) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link
                href={link.href}
                className="group relative py-1 transition-colors hover:text-slate-900"
              >
                <motion.span
                  whileHover={{ y: -2 }}
                  className="inline-block"
                >
                  {link.label}
                </motion.span>
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 w-0 bg-slate-900 transition-all group-hover:w-full"
                />
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button href="/contact">Gespräch buchen</Button>
          </motion.div>
          
          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={mobileOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        className="overflow-hidden border-t border-slate-100 bg-white lg:hidden"
      >
        <nav className="flex flex-col gap-1 px-4 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-900"
            >
              {link.label}
              <ChevronRight className="h-4 w-4 text-slate-400" />
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-2 rounded-lg bg-slate-900 px-4 py-3 text-center text-sm font-medium text-white"
          >
            Gespräch buchen
          </Link>
        </nav>
      </motion.div>
    </motion.header>
  );
}
