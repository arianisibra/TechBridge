# Resend Domain-Verifizierung

## Problem
Resend erlaubt im Test-Modus nur E-Mails an die verifizierte E-Mail-Adresse (`arianisibra@gmail.com`). Um E-Mails an `info@tech-bridge.ch` zu senden, muss die Domain verifiziert werden.

## Lösung: Domain verifizieren

### Schritt 1: Domain in Resend hinzufügen

1. Gehen Sie zu [resend.com/domains](https://resend.com/domains)
2. Klicken Sie auf **"Add Domain"**
3. Geben Sie ein: `tech-bridge.ch` oder `techbridge.ch`
4. Klicken Sie auf **"Add"**

### Schritt 2: DNS-Einträge hinzufügen

Resend zeigt Ihnen DNS-Einträge, die Sie hinzufügen müssen:

1. **Gehen Sie zu Ihrem Domain-Provider** (z.B. Namecheap, GoDaddy, etc.)
2. **Öffnen Sie die DNS-Einstellungen** für `tech-bridge.ch`
3. **Fügen Sie die DNS-Einträge hinzu**, die Resend anzeigt:
   - Typischerweise: TXT-Einträge für Domain-Verifizierung
   - Und: MX-Einträge oder andere Einträge für E-Mail-Versand

### Schritt 3: Warten auf Verifizierung

- Die Verifizierung kann 5-60 Minuten dauern
- Resend prüft automatisch, ob die DNS-Einträge korrekt sind

### Schritt 4: Environment Variable aktualisieren

Nach der Verifizierung:

1. Gehen Sie zu Netlify → Environment Variables
2. Fügen Sie hinzu oder ändern Sie:
   - **Key:** `RESEND_FROM_EMAIL`
   - **Value:** `TechBridge <noreply@tech-bridge.ch>`
   - (Oder `noreply@techbridge.ch`, je nachdem welche Domain verifiziert wurde)

3. Deployen Sie erneut

## Alternative: Temporäre Lösung

Falls Sie die Domain nicht sofort verifizieren können:

1. Ändern Sie die E-Mail-Adresse in der API-Route temporär zu `arianisibra@gmail.com`
2. Oder: Verwenden Sie einen anderen E-Mail-Service

## Nach der Verifizierung

- E-Mails können an jede Adresse gesendet werden
- Die "from" Adresse kann `noreply@tech-bridge.ch` sein
- Professionelleres E-Mail-Setup

