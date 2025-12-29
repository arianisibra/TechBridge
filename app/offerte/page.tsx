"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionDivider } from "@/components/SectionDivider";
import { 
  Palette, 
  Cpu, 
  Settings, 
  TrendingUp,
  Check,
  ArrowRight,
  FileText,
  Mail,
  Globe,
  Calendar
} from "lucide-react";
import { ArchitectureLines } from "@/components/ArchitectureLines";

const serviceCategories = [
  {
    id: "web",
    icon: Palette,
    title: "Webseite & Design",
    description: "Moderne, konversionsstarke Websites mit durchdachtem Design",
    needsUrl: true
  },
  {
    id: "ai",
    icon: Cpu,
    title: "KI-Automatisierung",
    description: "Praktische KI-Lösungen, die Zeit sparen und Prozesse optimieren",
    needsUrl: false
  },
  {
    id: "digitalisation",
    icon: Settings,
    title: "Digitalisierung",
    description: "Ihre Prozesse digitalisieren und manuelle Arbeit eliminieren",
    needsUrl: false
  },
  {
    id: "seo",
    icon: TrendingUp,
    title: "Wachstum & SEO",
    description: "Mehr Sichtbarkeit, mehr Traffic, mehr Conversions",
    needsUrl: true
  }
];

interface ServiceData {
  companyName: string;
  websiteUrl: string;
  description: string;
  timeline: string;
}

export default function OffertePage() {
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(new Set());
  const [serviceData, setServiceData] = useState<Record<string, ServiceData>>({});
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const [step, setStep] = useState<"categories" | "details" | "contact" | "review">("categories");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState("");

  const toggleCategory = (categoryId: string) => {
    const newSelected = new Set(selectedCategories);
    if (newSelected.has(categoryId)) {
      newSelected.delete(categoryId);
      const newData = { ...serviceData };
      delete newData[categoryId];
      setServiceData(newData);
    } else {
      newSelected.add(categoryId);
      setServiceData({
        ...serviceData,
        [categoryId]: {
          companyName: "",
          websiteUrl: "",
          description: "",
          timeline: ""
        }
      });
    }
    setSelectedCategories(newSelected);
  };

  const updateServiceData = (categoryId: string, field: keyof ServiceData, value: string) => {
    setServiceData({
      ...serviceData,
      [categoryId]: {
        ...(serviceData[categoryId] || { companyName: "", websiteUrl: "", description: "", timeline: "" }),
        [field]: value
      }
    });
  };

  const validateStep = () => {
    if (step === "details") {
      for (const categoryId of selectedCategories) {
        const data = serviceData[categoryId];
        if (!data || !data.companyName || !data.description || !data.timeline) {
          return false;
        }
        const category = serviceCategories.find(c => c.id === categoryId);
        if (category?.needsUrl && !data.websiteUrl) {
          return false;
        }
      }
    }
    if (step === "contact") {
      if (!contactInfo.name || !contactInfo.email) {
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validateStep()) {
      setError("Bitte füllen Sie alle erforderlichen Felder aus.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/offerte", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...contactInfo,
          selectedCategories: Array.from(selectedCategories).map(id => {
            const category = serviceCategories.find(c => c.id === id);
            return {
              id,
              title: category?.title || id,
              ...serviceData[id]
            };
          })
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Fehler beim Senden der Offerte");
      }

      setSubmitSuccess(true);
    } catch (err: any) {
      setError(err.message || "Fehler beim Senden. Bitte versuchen Sie es erneut.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <main>
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm"
              >
                <FileText className="h-4 w-4 text-slate-500" />
                Offerten-Anfrage
              </motion.span>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                Erstellen Sie Ihre Offerten-Anfrage
              </h1>
              <p className="mt-4 text-lg text-slate-600">
                Wählen Sie die Services aus, die Sie benötigen, beschreiben Sie Ihr Projekt und erhalten Sie eine personalisierte Offerte.
              </p>
            </motion.div>
          </div>
        </section>

        <SectionDivider />

        <section className="bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <div className="mb-12 flex items-center justify-center gap-4">
              {[
                { id: "categories", label: "Kategorien", step: 1 },
                { id: "details", label: "Details", step: 2 },
                { id: "contact", label: "Kontakt", step: 3 },
                { id: "review", label: "Übersicht", step: 4 }
              ].map((s, idx) => (
                <div key={s.id} className="flex items-center">
                  <button
                    onClick={() => {
                      if (step === "review" || (step === "contact" && idx <= 2) || (step === "details" && idx <= 1) || (step === "categories" && idx === 0)) {
                        setStep(s.id as any);
                      }
                    }}
                    className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all ${
                      step === s.id
                        ? "border-slate-900 bg-slate-900 text-white"
                        : step === "review" || (step === "contact" && idx <= 2) || (step === "details" && idx <= 1) || (step === "categories" && idx === 0)
                        ? "border-slate-300 bg-white text-slate-600 hover:border-slate-400"
                        : "border-slate-200 bg-white text-slate-400"
                    }`}
                  >
                    {s.step}
                  </button>
                  {idx < 3 && (
                    <div
                      className={`mx-2 h-0.5 w-12 ${
                        (step === "details" && idx === 0) || (step === "contact" && idx <= 1) || step === "review"
                          ? "bg-slate-900"
                          : "bg-slate-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            {submitSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative rounded-3xl border border-emerald-200 bg-emerald-50 p-12 text-center"
              >
                <ArchitectureLines />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500"
                >
                  <Check className="h-8 w-8 text-white" />
                </motion.div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Offerten-Anfrage erfolgreich gesendet!
                </h2>
                <p className="text-slate-600 mb-6">
                  Wir haben Ihre Anfrage erhalten und werden uns innerhalb von 24 Stunden bei Ihnen melden.
                  <br />
                  Sie erhalten dann eine detaillierte, massgeschneiderte Offerte per E-Mail.
                </p>
                <button
                  onClick={() => {
                    setSubmitSuccess(false);
                    setStep("categories");
                    setSelectedCategories(new Set());
                    setServiceData({});
                    setContactInfo({ name: "", email: "", phone: "" });
                  }}
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
                >
                  Neue Anfrage erstellen
                </button>
              </motion.div>
            ) : (
              <>
                {step === "categories" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                  >
                    {serviceCategories.map((category) => (
                      <motion.button
                        key={category.id}
                        onClick={() => toggleCategory(category.id)}
                        whileHover={{ y: -4 }}
                        whileTap={{ scale: 0.98 }}
                        className={`group relative w-full rounded-3xl border-2 p-8 text-left transition-all ${
                          selectedCategories.has(category.id)
                            ? "border-slate-900 bg-white shadow-lg"
                            : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-md"
                        }`}
                      >
                        <ArchitectureLines />
                        <div className="flex items-start gap-6">
                          <div className={`relative w-16 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${selectedCategories.has(category.id) ? "bg-slate-900" : "bg-slate-100"}`}>
                            <category.icon className={`h-5 w-5 transition-colors ${selectedCategories.has(category.id) ? "text-white" : "text-slate-700"}`} />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="text-xl font-bold text-slate-900">{category.title}</h3>
                              {selectedCategories.has(category.id) && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900"
                                >
                                  <Check className="h-4 w-4 text-white" />
                                </motion.div>
                              )}
                            </div>
                            <p className="text-slate-600">{category.description}</p>
                          </div>
                        </div>
                      </motion.button>
                    ))}

                    <div className="flex justify-end pt-6">
                      <button
                        onClick={() => {
                          if (selectedCategories.size > 0) {
                            setStep("details");
                          }
                        }}
                        disabled={selectedCategories.size === 0}
                        className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-sm font-semibold text-white shadow-lg hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Weiter zu Details
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === "details" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-8"
                  >
                    {Array.from(selectedCategories).map((categoryId) => {
                      const category = serviceCategories.find(c => c.id === categoryId);
                      if (!category) return null;
                      const data = serviceData[categoryId] || { companyName: "", websiteUrl: "", description: "", timeline: "" };
                      const IconComponent = category.icon;
                      
                      return (
                        <div
                          key={categoryId}
                          className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
                        >
                          <ArchitectureLines />
                          <div className="flex items-center gap-4 mb-6">
                            <div className="relative w-14 h-9 bg-slate-100 rounded-full flex items-center justify-center">
                              <IconComponent className="h-5 w-5 text-slate-700" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">{category.title}</h3>
                          </div>

                          <div className="space-y-4">
                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-2">
                                Firmenname <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="text"
                                value={data.companyName}
                                onChange={(e) => updateServiceData(categoryId, "companyName", e.target.value)}
                                className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
                                required
                                placeholder="Ihr Firmenname"
                              />
                            </div>

                            {category.needsUrl && (
                              <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">
                                  Aktuelle Website-URL <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                  <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                                  <input
                                    type="url"
                                    value={data.websiteUrl}
                                    onChange={(e) => updateServiceData(categoryId, "websiteUrl", e.target.value)}
                                    className="w-full rounded-lg border border-slate-300 pl-10 pr-4 py-3 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
                                    required
                                    placeholder="https://ihre-website.ch"
                                  />
                                </div>
                              </div>
                            )}

                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-2">
                                Beschreiben Sie genau, was Sie möchten <span className="text-red-500">*</span>
                              </label>
                              <textarea
                                value={data.description}
                                onChange={(e) => updateServiceData(categoryId, "description", e.target.value)}
                                rows={4}
                                className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
                                required
                                placeholder="Beschreiben Sie Ihr Projekt, Ihre Anforderungen und Ziele..."
                              />
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-2">
                                Wann benötigen Sie das? <span className="text-red-500">*</span>
                              </label>
                              <div className="relative">
                                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                                <select
                                  value={data.timeline}
                                  onChange={(e) => updateServiceData(categoryId, "timeline", e.target.value)}
                                  className="w-full rounded-lg border border-slate-300 pl-10 pr-4 py-3 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 appearance-none"
                                  required
                                >
                                  <option value="">Zeitrahmen auswählen</option>
                                  <option value="asap">So bald wie möglich</option>
                                  <option value="1-2-months">In 1-2 Monaten</option>
                                  <option value="3-6-months">In 3-6 Monaten</option>
                                  <option value="6-12-months">In 6-12 Monaten</option>
                                  <option value="exploring">Nur orientieren</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}

                    <div className="flex gap-4 pt-6">
                      <button
                        onClick={() => setStep("categories")}
                        className="flex-1 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                      >
                        Zurück
                      </button>
                      <button
                        onClick={() => {
                          if (validateStep()) {
                            setStep("contact");
                          } else {
                            setError("Bitte füllen Sie alle erforderlichen Felder aus.");
                          }
                        }}
                        className="flex-1 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
                      >
                        Weiter zu Kontakt
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === "contact" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
                  >
                    <ArchitectureLines />
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Ihre Kontaktdaten</h2>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={contactInfo.name}
                          onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                          className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          E-Mail <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          value={contactInfo.email}
                          onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                          className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Telefon (optional)
                        </label>
                        <input
                          type="tel"
                          value={contactInfo.phone}
                          onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                          className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
                        />
                      </div>
                    </div>
                    <div className="mt-6 flex gap-4">
                      <button
                        onClick={() => setStep("details")}
                        className="flex-1 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                      >
                        Zurück
                      </button>
                      <button
                        onClick={() => {
                          if (validateStep()) {
                            setStep("review");
                          } else {
                            setError("Bitte füllen Sie alle erforderlichen Felder aus.");
                          }
                        }}
                        className="flex-1 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
                      >
                        Weiter zur Übersicht
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === "review" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                  >
                    <div className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                      <ArchitectureLines />
                      <h2 className="text-2xl font-bold text-slate-900 mb-6">Übersicht Ihrer Anfrage</h2>
                      
                      <div className="mb-6 space-y-4">
                        <div>
                          <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Kontaktdaten</h3>
                          <p className="text-slate-900"><strong>{contactInfo.name}</strong></p>
                          <p className="text-slate-600">{contactInfo.email}</p>
                          {contactInfo.phone && <p className="text-slate-600">{contactInfo.phone}</p>}
                        </div>
                      </div>

                      <div className="space-y-6">
                        <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Ausgewählte Services</h3>
                        {Array.from(selectedCategories).map((categoryId) => {
                          const category = serviceCategories.find(c => c.id === categoryId);
                          if (!category) return null;
                          const data = serviceData[categoryId];
                          const IconComponent = category.icon;
                          return (
                            <div key={categoryId} className="rounded-lg border border-slate-200 bg-slate-50 p-6">
                              <div className="flex items-center gap-3 mb-4">
                                <div className="relative w-12 h-8 bg-slate-100 rounded-full flex items-center justify-center">
                                  <IconComponent className="h-4 w-4 text-slate-700" />
                                </div>
                                <h4 className="text-lg font-bold text-slate-900">{category.title}</h4>
                              </div>
                              <div className="space-y-2 text-sm">
                                <p><strong>Firma:</strong> {data.companyName}</p>
                                {data.websiteUrl && <p><strong>Website:</strong> <a href={data.websiteUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{data.websiteUrl}</a></p>}
                                <p><strong>Beschreibung:</strong> {data.description}</p>
                                <p><strong>Zeitrahmen:</strong> {
                                  data.timeline === "asap" ? "So bald wie möglich" :
                                  data.timeline === "1-2-months" ? "In 1-2 Monaten" :
                                  data.timeline === "3-6-months" ? "In 3-6 Monaten" :
                                  data.timeline === "6-12-months" ? "In 6-12 Monaten" :
                                  data.timeline === "exploring" ? "Nur orientieren" :
                                  data.timeline
                                }</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {error && (
                      <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-700">
                        {error}
                      </div>
                    )}

                    <div className="flex gap-4">
                      <button
                        onClick={() => setStep("contact")}
                        className="flex-1 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                      >
                        Zurück
                      </button>
                      <button
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800 disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          "Wird gesendet..."
                        ) : (
                          <>
                            <Mail className="h-4 w-4" />
                            Anfrage senden
                          </>
                        )}
                      </button>
                    </div>
                  </motion.div>
                )}
              </>
            )}
          </div>
        </section>

        <SectionDivider />
      </main>
      <Footer />
    </>
  );
}

