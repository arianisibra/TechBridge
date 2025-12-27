import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function ImprintPage() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden bg-white py-24 sm:py-28">
        <div className="relative mx-auto max-w-4xl px-4 md:px-6">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-12">
            Impressum
          </h1>

          <div className="prose prose-slate max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Angaben gemäß Art. 8 ZGB</h2>
              <div className="text-slate-600 leading-relaxed space-y-2">
                <p><strong>Firmenname:</strong> TechBridge</p>
                <p><strong>Rechtsform:</strong> Einzelunternehmen / GmbH</p>
                <p><strong>Geschäftssitz:</strong> Schweiz</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Kontakt</h2>
              <div className="text-slate-600 leading-relaxed space-y-2">
                <p>
                  <strong>E-Mail:</strong>{" "}
                  <a href="mailto:info@tech-bridge.ch" className="text-slate-900 underline hover:text-slate-700">
                    info@tech-bridge.ch
                  </a>
                </p>
                <p><strong>Website:</strong> techbridge.ch</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Haftungsausschluss</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, 
                Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, 
                welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, 
                durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden ausgeschlossen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Urheberrechte</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf der Website 
                gehören ausschließlich TechBridge oder den speziell genannten Rechtsinhabern. 
                Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung der Urheberrechtsträger im Voraus einzuholen.
              </p>
            </section>

            <section className="mt-12 pt-8 border-t border-slate-200">
              <p className="text-slate-600">
                Bei Fragen zum Impressum kontaktieren Sie uns bitte unter:{" "}
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

