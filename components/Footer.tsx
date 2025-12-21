"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

const columns = [
  {
    title: "Leistungen",
    links: [
      { label: "Webentwicklung", href: "/services#web" },
      { label: "Mobile Entwicklung", href: "/services#mobile" },
      { label: "KI & Automatisierung", href: "/services#ai" },
      { label: "SEO & Wachstum", href: "/services#seo" }
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

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/company/techbridge-ch" },
  { icon: Mail, label: "Kontakt", href: "mailto:hello@techbridge.ch" }
];

export function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-white py-16">
      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-5">
          {/* Brand */}
          <div className="space-y-4 md:col-span-2">
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
              Digitalisierung, Produktentwicklung & KI-Automatisierung für Schweizer Unternehmen. Schweizer Ansprechpartner, zuverlässige Lieferung.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition hover:border-slate-300 hover:text-slate-700"
                >
                  <social.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {columns.map((column) => (
            <div key={column.title}>
              <h4 className="mb-4 text-sm font-semibold text-slate-900">{column.title}</h4>
              <ul className="space-y-3 text-sm">
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

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-8 text-sm text-slate-500 md:flex-row">
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
