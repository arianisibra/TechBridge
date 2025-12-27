# Netlify Environment Variables Setup

## Resend API Key auf Netlify hinzufügen

### Schritt-für-Schritt Anleitung:

1. **Gehen Sie zu Ihrem Netlify Dashboard**
   - Öffnen Sie [app.netlify.com](https://app.netlify.com)
   - Melden Sie sich an

2. **Wählen Sie Ihre Site aus**
   - Klicken Sie auf die Site "TechBridge" (oder wie auch immer sie heißt)

3. **Gehen Sie zu Site Settings**
   - Klicken Sie auf **"Site settings"** im Menü links
   - Oder: Klicken Sie auf **"Site configuration"** → **"Environment variables"**

4. **Fügen Sie die Environment Variable hinzu**
   - Klicken Sie auf **"Add variable"** oder **"Add environment variable"**
   - **Key:** `RESEND_API_KEY`
   - **Value:** Ihr Resend API-Key (der gleiche wie in `.env.local`)
     - Beginnt mit `re_`
     - Beispiel: `re_YJ9TJS7h_BasD7bvqV6NrXu2Ap9KAZCPC`
   - **Scopes:** Lassen Sie es auf "All scopes" (oder wählen Sie "Production" und "Deploy previews")
   - Klicken Sie auf **"Save"**

5. **Optional: RESEND_FROM_EMAIL hinzufügen**
   - Falls Sie eine eigene "from" E-Mail-Adresse verwenden möchten:
   - **Key:** `RESEND_FROM_EMAIL`
   - **Value:** `TechBridge <noreply@techbridge.ch>`
   - (Nur nach Domain-Verifizierung in Resend)

6. **Deployen Sie erneut**
   - Gehen Sie zu **"Deploys"** im Menü
   - Klicken Sie auf **"Trigger deploy"** → **"Clear cache and deploy site"**
   - Oder: Machen Sie einen neuen Commit und Push zu GitHub (falls automatisches Deploy aktiviert ist)

## ✅ Testen

Nach dem Deploy:
1. Gehen Sie zu Ihrer Live-Website
2. Öffnen Sie die Kontaktseite
3. Senden Sie eine Test-Nachricht
4. Überprüfen Sie das E-Mail-Postfach `info@tech-bridge.ch`

## 🔍 Troubleshooting

### E-Mail wird immer noch nicht gesendet

1. **Überprüfen Sie die Environment Variables:**
   - Gehen Sie zu Site settings → Environment variables
   - Stellen Sie sicher, dass `RESEND_API_KEY` vorhanden ist
   - Prüfen Sie, ob der Wert korrekt ist (keine Leerzeichen, vollständiger Key)

2. **Überprüfen Sie die Netlify Logs:**
   - Gehen Sie zu **"Functions"** → **"Logs"**
   - Oder: Gehen Sie zu **"Deploys"** → Wählen Sie den neuesten Deploy → **"View build logs"**
   - Suchen Sie nach Fehlermeldungen

3. **Überprüfen Sie Resend Dashboard:**
   - Gehen Sie zu [resend.com/emails](https://resend.com/emails)
   - Prüfen Sie, ob E-Mails dort ankommen (auch wenn sie fehlschlagen)
   - Prüfen Sie die Fehlermeldungen

4. **Testen Sie die API-Route direkt:**
   - Öffnen Sie: `https://ihre-domain.netlify.app/api/contact`
   - Sollte einen Fehler zeigen (weil GET nicht erlaubt ist), aber bestätigt, dass die Route existiert

## 📝 Wichtige Hinweise

- **API-Key Sicherheit:** Der API-Key wird nie im Frontend-Code verwendet, nur serverseitig
- **Domain-Verifizierung:** Ohne verifizierte Domain müssen Sie `onboarding@resend.dev` verwenden
- **Free Tier:** Resend bietet 3.000 E-Mails/Monat kostenlos

