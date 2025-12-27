import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden bg-white py-24 sm:py-28">
        <div className="relative mx-auto max-w-4xl px-4 md:px-6">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-8">
            Allgemeine Geschäftsbedingungen
          </h1>
          <p className="text-slate-600 mb-12">Stand: {new Date().toLocaleDateString('de-CH')}</p>

          <div className="prose prose-slate max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Geltungsbereich</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Leistungen und Verträge zwischen TechBridge 
                (nachfolgend "Auftragnehmer") und seinen Kunden (nachfolgend "Auftraggeber"). Abweichende Bedingungen 
                des Auftraggebers werden nicht anerkannt, es sei denn, der Auftragnehmer stimmt ihrer Geltung ausdrücklich schriftlich zu.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. Leistungsumfang</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Der Leistungsumfang ergibt sich aus der schriftlichen Vereinbarung, dem Angebot oder der Projektbeschreibung. 
                Änderungen und Ergänzungen bedürfen der schriftlichen Bestätigung durch den Auftragnehmer.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. Preise und Zahlung</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Alle Preise verstehen sich in Schweizer Franken (CHF) zuzüglich der gesetzlichen Mehrwertsteuer. 
                Rechnungen sind innerhalb von 30 Tagen nach Rechnungsdatum ohne Abzug zur Zahlung fällig. 
                Bei Zahlungsverzug werden Verzugszinsen in Höhe von 5% p.a. berechnet.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Urheberrecht</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Alle vom Auftragnehmer erstellten Werke (Code, Designs, Dokumentationen) bleiben bis zur vollständigen 
                Zahlung der vereinbarten Vergütung Eigentum des Auftragnehmers. Nach vollständiger Zahlung erhält der 
                Auftraggeber die vereinbarten Nutzungsrechte.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. Gewährleistung</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Der Auftragnehmer gewährleistet, dass die erbrachten Leistungen den vereinbarten Spezifikationen entsprechen. 
                Die Gewährleistungsfrist beträgt 12 Monate ab Abnahme. Ansprüche des Auftraggebers verjähren nach Ablauf 
                der Gewährleistungsfrist.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Haftung</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Die Haftung des Auftragnehmers ist auf Vorsatz und grobe Fahrlässigkeit beschränkt. 
                Die Haftung für leichte Fahrlässigkeit ist ausgeschlossen, soweit gesetzlich zulässig.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">7. Datenschutz</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Der Auftragnehmer verarbeitet personenbezogene Daten im Rahmen der gesetzlichen Bestimmungen. 
                Nähere Informationen finden Sie in unserer Datenschutzerklärung.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">8. Schlussbestimmungen</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Es gilt schweizerisches Recht. Gerichtsstand ist der Geschäftssitz des Auftragnehmers. 
                Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
              </p>
            </section>

            <section className="mt-12 pt-8 border-t border-slate-200">
              <p className="text-slate-600">
                Bei Fragen zu diesen AGB kontaktieren Sie uns bitte unter:{" "}
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

