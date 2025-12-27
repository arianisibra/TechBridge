"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

const columns = [
  {
    title: "Leistungen",
    links: [
      { label: "Webseite & Design", href: "/services#web" },
      { label: "KI-Automatisierung", href: "/services#ai" },
      { label: "Digitalisierung", href: "/services#digitalisation" },
      { label: "Wachstum & SEO", href: "/services#seo" }
    ]
  },
  {
    title: "Unternehmen",
    links: [
      { label: "Über uns", href: "/about" },
      { label: "Projekte", href: "/work" },
      { label: "Kontakt", href: "/contact" }
    ]
  },
  {
    title: "Rechtliches",
    links: [
      { label: "Datenschutz", href: "/privacy" },
      { label: "AGB", href: "/terms" },
      { label: "Impressum", href: "/imprint" }
    ]
  }
];

export function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-white py-20 sm:py-24">
      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-16 md:grid-cols-5">
          {/* Brand */}
          <div className="space-y-6 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 text-lg font-semibold text-slate-900">
              <motion.span
                whileHover={{ scale: 1.1, rotate: 10 }}
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-white text-sm font-bold"
              >
                TB
              </motion.span>
              TechBridge
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-slate-600">
              Digitalisierung, KI-Automatisierung & Wachstum für Schweizer Unternehmen.
            </p>
            <div className="flex gap-3">
              <motion.a
                href="mailto:info@tech-bridge.ch"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition hover:border-slate-300 hover:text-slate-700"
              >
                <Mail className="h-4 w-4" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/company/techbridge-ch"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition hover:border-slate-300 hover:text-slate-700"
              >
                <Linkedin className="h-4 w-4" />
              </motion.a>
            </div>
          </div>

          {/* Links */}
          {columns.map((column) => (
            <div key={column.title}>
              <h4 className="mb-5 text-sm font-semibold text-slate-900">{column.title}</h4>
              <ul className="space-y-4 text-sm">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-slate-600 transition hover:text-slate-900"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-slate-100 pt-10 text-sm text-slate-500 md:flex-row">
          <p>© {year} TechBridge. Alle Rechte vorbehalten.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Standort Schweiz
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
