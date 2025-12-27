import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden bg-white py-24 sm:py-28">
        <div className="relative mx-auto max-w-4xl px-4 md:px-6">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-8">
            Datenschutzerklärung
          </h1>
          <p className="text-slate-600 mb-12">Stand: {new Date().toLocaleDateString('de-CH')}</p>

          <div className="prose prose-slate max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Verantwortliche Stelle</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Verantwortlich für die Datenverarbeitung auf dieser Website ist TechBridge. 
                Kontakt: <a href="mailto:info@tech-bridge.ch" className="text-slate-900 underline">info@tech-bridge.ch</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. Erhebung und Speicherung personenbezogener Daten</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Beim Besuch unserer Website werden automatisch Informationen an den Server unserer Website gesendet. 
                Diese Informationen umfassen u.a. Browsertyp, verwendetes Betriebssystem, Referrer-URL, IP-Adresse, 
                Datum und Uhrzeit des Zugriffs. Diese Daten werden zur Gewährleistung der Sicherheit und Stabilität 
                der Website verwendet und nach 7 Tagen automatisch gelöscht.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. Kontaktformular</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Wenn Sie uns über das Kontaktformular kontaktieren, speichern wir die von Ihnen angegebenen Daten 
                (Name, E-Mail-Adresse, Nachricht) zur Bearbeitung Ihrer Anfrage. Diese Daten werden gelöscht, 
                sobald sie für die Bearbeitung nicht mehr erforderlich sind.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Cookies</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Wir setzen Cookies ein, um die Funktionalität unserer Website zu gewährleisten. 
                Sie können Ihre Browser-Einstellungen so anpassen, dass Cookies abgelehnt werden. 
                Dies kann jedoch die Funktionalität der Website beeinträchtigen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. Ihre Rechte</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Sie haben jederzeit das Recht auf Auskunft über Ihre gespeicherten personenbezogenen Daten, 
                deren Herkunft und Empfänger sowie den Zweck der Datenverarbeitung. Außerdem haben Sie ein Recht 
                auf Berichtigung, Löschung oder Sperrung Ihrer Daten. Kontaktieren Sie uns hierfür unter:{" "}
                <a href="mailto:info@tech-bridge.ch" className="text-slate-900 underline">info@tech-bridge.ch</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Datensicherheit</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Wir setzen technische und organisatorische Maßnahmen ein, um Ihre Daten gegen Verlust, 
                Manipulation oder unberechtigten Zugriff zu schützen.
              </p>
            </section>

            <section className="mt-12 pt-8 border-t border-slate-200">
              <p className="text-slate-600">
                Bei Fragen zum Datenschutz kontaktieren Sie uns bitte unter:{" "}
                <a href="mailto:info@tech-bridge.ch" className="text-slate-900 underline hover:text-slate-700">
                  info@tech-bridge.ch
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

