# E-Mail-Versand mit Resend - Setup Anleitung

Das Kontaktformular verwendet jetzt **Resend** für den direkten E-Mail-Versand.

## 🚀 Schnellstart

### 1. Resend Account erstellen

1. Gehen Sie zu [resend.com](https://resend.com)
2. Erstellen Sie einen kostenlosen Account
3. Im kostenlosen Plan erhalten Sie:
   - 3.000 E-Mails/Monat
   - 100 E-Mails/Tag
   - API-Zugriff

### 2. API-Key erstellen

1. Gehen Sie zu [API Keys](https://resend.com/api-keys)
2. Klicken Sie auf "Create API Key"
3. Geben Sie einen Namen ein (z.B. "TechBridge Website")
4. Kopieren Sie den API-Key (beginnt mit `re_`)

### 3. Lokale Entwicklung

1. Erstellen Sie eine `.env.local` Datei im Projekt-Root:
```bash
cp .env.local.example .env.local
```

2. Fügen Sie Ihren API-Key ein:
```
RESEND_API_KEY=re_Ihr_API_Key_hier
```

3. Optional: Eigene "from" E-Mail-Adresse:
```
RESEND_FROM_EMAIL=TechBridge <noreply@techbridge.ch>
```

**Hinweis:** Ohne Domain-Verifizierung können Sie `onboarding@resend.dev` verwenden (nur für Tests).

### 4. Domain verifizieren (Optional, aber empfohlen)

1. Gehen Sie zu [Domains](https://resend.com/domains)
2. Klicken Sie auf "Add Domain"
3. Geben Sie `techbridge.ch` ein
4. Fügen Sie die DNS-Einträge hinzu (werden angezeigt)
5. Nach Verifizierung können Sie `noreply@techbridge.ch` verwenden

### 5. Netlify Deployment

1. Gehen Sie zu Ihrem Netlify Dashboard
2. Wählen Sie Ihre Site aus
3. Gehen Sie zu **Site settings → Environment variables**
4. Klicken Sie auf **Add variable**
5. Fügen Sie hinzu:
   - **Key:** `RESEND_API_KEY`
   - **Value:** Ihr Resend API-Key (beginnt mit `re_`)
6. Optional: Fügen Sie `RESEND_FROM_EMAIL` hinzu
7. Klicken Sie auf **Save**
8. Deployen Sie die Site erneut

## ✅ Testen

1. Starten Sie den Development-Server:
```bash
npm run dev
```

2. Gehen Sie zu `/contact`
3. Füllen Sie das Formular aus
4. Senden Sie eine Test-Nachricht
5. Überprüfen Sie Ihr E-Mail-Postfach (`info@tech-bridge.ch`)

## 🔧 Troubleshooting

### E-Mail wird nicht gesendet

1. **API-Key prüfen:**
   - Stellen Sie sicher, dass `RESEND_API_KEY` korrekt gesetzt ist
   - Überprüfen Sie die Umgebungsvariablen in Netlify

2. **Resend Dashboard prüfen:**
   - Gehen Sie zu [Logs](https://resend.com/emails)
   - Überprüfen Sie, ob Fehler angezeigt werden

3. **Console-Logs prüfen:**
   - Öffnen Sie die Browser-Console
   - Prüfen Sie die Network-Tab für API-Fehler

### "From" E-Mail-Adresse wird abgelehnt

- Verwenden Sie `onboarding@resend.dev` für Tests
- Oder verifizieren Sie Ihre Domain in Resend

## 📧 E-Mail-Format

Die E-Mails werden im folgenden Format gesendet:
- **An:** info@tech-bridge.ch
- **Von:** TechBridge <noreply@techbridge.ch> (oder onboarding@resend.dev)
- **Reply-To:** E-Mail-Adresse des Absenders
- **Format:** HTML + Plain Text

## 💰 Kosten

- **Free Tier:** 3.000 E-Mails/Monat (ausreichend für die meisten Websites)
- **Pro Plan:** Ab $20/Monat für mehr E-Mails

## 🔒 Sicherheit

- Der API-Key wird nie im Frontend-Code verwendet
- Alle E-Mails werden serverseitig über die API-Route gesendet
- Der API-Key sollte nur in Umgebungsvariablen gespeichert werden
