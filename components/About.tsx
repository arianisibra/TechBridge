"use client";

import { motion } from "framer-motion";
import { MapPin, Users, Briefcase, ArrowRight, Linkedin, Twitter } from "lucide-react";

const team = [
  { initials: "AS", name: "Alex S.", role: "CEO" },
  { initials: "MK", name: "Maria K.", role: "CTO" },
  { initials: "LB", name: "Luca B.", role: "Product" },
  { initials: "TW", name: "Tim W.", role: "Engineering" },
  { initials: "JH", name: "Jana H.", role: "Design" },
  { initials: "NK", name: "Nico K.", role: "Sales" }
];

const investors = [
  { name: "20VC", logo: "20" },
  { name: "Wingman", logo: "W" },
  { name: "Swiss Founders", logo: "SF" }
];

export function About() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24">
      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm"
            >
              <Briefcase className="h-4 w-4 text-slate-500" />
              About us
            </motion.span>
            
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Building the future of invoice automation in Switzerland
            </h2>
            
            <p className="mt-4 text-lg text-slate-600">
              We're a team of finance and engineering experts who experienced the pain of manual invoice processing firsthand. 
              We built Lumafin Business to solve it—for ourselves and for every growing company.
            </p>

            <div className="mt-8 flex items-center gap-6">
              <motion.div
                whileHover={{ y: -2, scale: 1.02 }}
                className="flex cursor-pointer items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm hover:shadow-md transition-all"
              >
                <MapPin className="h-4 w-4 text-slate-400" />
                Zurich, Switzerland
              </motion.div>
              <motion.div
                whileHover={{ y: -2, scale: 1.02 }}
                className="flex cursor-pointer items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm hover:shadow-md transition-all"
              >
                <Users className="h-4 w-4 text-slate-400" />
                12 team members
              </motion.div>
            </div>

            <motion.a
              href="/careers"
              whileHover={{ x: 4 }}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-300 hover:shadow-md"
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="h-2 w-2 rounded-full bg-slate-500"
              />
              We're hiring
              <ArrowRight className="h-4 w-4" />
            </motion.a>

            <div className="mt-8 border-t border-slate-200 pt-8">
              <p className="text-xs font-medium text-slate-500 mb-4">BACKED BY</p>
              <div className="flex items-center gap-6">
                {investors.map((investor, idx) => (
                  <motion.a
                    key={investor.name}
                    href="#"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex cursor-pointer items-center gap-2 transition-all"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-white text-xs font-bold">
                      {investor.logo}
                    </div>
                    <span className="text-sm font-semibold text-slate-700">{investor.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right column - Team */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-slate-900 mb-6">Meet the team</h3>
            
            <div className="grid grid-cols-3 gap-4">
              {team.map((member, idx) => (
                <motion.div
                  key={member.initials}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -4, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative cursor-pointer flex flex-col items-center rounded-xl bg-slate-50 p-4 shadow-sm transition-all hover:shadow-md hover:bg-white"
                >
                  <motion.div
                    whileHover={{ rotate: 10 }}
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-700 text-white text-sm font-bold shadow-lg"
                  >
                    {member.initials}
                  </motion.div>
                  <p className="mt-3 text-sm font-semibold text-slate-900">{member.name}</p>
                  <p className="text-xs text-slate-500">{member.role}</p>
                  
                  {/* Social links on hover */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute -bottom-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <motion.a 
                      href="#" 
                      whileHover={{ scale: 1.2 }}
                      className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-white"
                    >
                      <Linkedin className="h-3 w-3" />
                    </motion.a>
                    <motion.a 
                      href="#" 
                      whileHover={{ scale: 1.2 }}
                      className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-white"
                    >
                      <Twitter className="h-3 w-3" />
                    </motion.a>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Office image placeholder */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="mt-6 cursor-pointer rounded-xl overflow-hidden border border-slate-200"
            >
              <div className="aspect-[2/1] bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100 flex items-center justify-center relative">
                {/* Office illustration */}
                <div className="absolute inset-0 flex items-end justify-center pb-4">
                  <div className="flex gap-1">
                    {[40, 60, 80, 50, 70, 45].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: h }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + i * 0.1 }}
                        className="w-6 rounded-t-lg bg-slate-300"
                        style={{ height: h }}
                      />
                    ))}
                  </div>
                </div>
                <div className="absolute top-4 left-4 flex gap-2">
                  <div className="h-8 w-8 rounded-full bg-slate-200" />
                  <div className="h-8 w-16 rounded-lg bg-slate-200" />
                </div>
                <p className="absolute bottom-3 text-xs text-slate-400">Our office in Zurich</p>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-6 text-sm text-slate-600 italic text-center"
            >
              "We're building something we wish existed when we ran finance at our previous companies."
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
