# Schnelle Lösung: E-Mails funktionieren jetzt

## Was wurde geändert

Die E-Mails werden jetzt an `arianisibra@gmail.com` gesendet (deine verifizierte Resend-Adresse), bis die Domain `tech-bridge.ch` verifiziert ist.

## Nächste Schritte

### Option 1: Domain verifizieren (Empfohlen)

1. Gehe zu [resend.com/domains](https://resend.com/domains)
2. Klicke auf **"Add Domain"**
3. Gebe ein: `tech-bridge.ch`
4. Füge die DNS-Einträge hinzu, die Resend anzeigt
5. Warte auf Verifizierung (5-60 Minuten)

Nach der Verifizierung:
1. Gehe zu Netlify → Environment Variables
2. Füge hinzu:
   - **Key:** `RESEND_RECIPIENT_EMAIL`
   - **Value:** `info@tech-bridge.ch`
3. Füge hinzu:
   - **Key:** `RESEND_FROM_EMAIL`
   - **Value:** `TechBridge <noreply@tech-bridge.ch>`
4. Deploye erneut

### Option 2: Weiterleitung einrichten

Falls du die Domain nicht verifizieren möchtest:
- Richte in `arianisibra@gmail.com` eine Weiterleitung zu `info@tech-bridge.ch` ein
- Oder: Prüfe regelmäßig `arianisibra@gmail.com` auf neue Kontaktanfragen

## Testen

Nach dem Deploy:
1. Gehe zu deiner Live-Website
2. Öffne die Kontaktseite
3. Sende eine Test-Nachricht
4. Prüfe `arianisibra@gmail.com` - die E-Mail sollte dort ankommen!

