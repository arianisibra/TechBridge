# Netlify Environment Variable Wert hinzufügen

## Problem
Der Environment Variable Key `RESEND_API_KEY` existiert, aber hat keinen Wert zugewiesen. Alle Deploy-Contexts zeigen "Empty".

## Lösung

### Schritt 1: Wert für Production hinzufügen

1. **Klicken Sie auf "Production" in der Tabelle**
   - Oder klicken Sie auf den Key `re_YJ9TJS7h_BasD7bvqV6NrXu2Ap9KAZCPC`
   - Dann auf "Production" → "Edit" oder "Add value"

2. **Fügen Sie den Resend API-Key ein**
   - Der Wert sollte sein: `re_YJ9TJS7h_BasD7bvqV6NrXu2Ap9KAZCPC`
   - (Das ist derselbe Wert wie der Key-Name, aber er muss als **Value** eingegeben werden)

3. **Speichern Sie**

### Schritt 2: Optional - Für andere Contexts

Falls Sie auch Deploy Previews testen möchten:
- Wiederholen Sie Schritt 1 für "Deploy Previews"
- Gleicher Wert: `re_YJ9TJS7h_BasD7bvqV6NrXu2Ap9KAZCPC`

### Schritt 3: Deploy erneut

1. Gehen Sie zu **"Deploys"**
2. Klicken Sie auf **"Trigger deploy"** → **"Clear cache and deploy site"**
3. Oder: Machen Sie einen neuen Commit und Push (falls automatisches Deploy aktiviert ist)

## Wichtig

- Der **Key-Name** ist: `RESEND_API_KEY`
- Der **Wert** ist: `re_YJ9TJS7h_BasD7bvqV6NrXu2Ap9KAZCPC`
- Beide müssen vorhanden sein!

## Testen

Nach dem Deploy:
1. Gehen Sie zu Ihrer Live-Website
2. Öffnen Sie die Kontaktseite
3. Senden Sie eine Test-Nachricht
4. Überprüfen Sie:
   - Netlify Function Logs (sollte jetzt "✅ Email sent successfully!" zeigen)
   - Resend Dashboard ([resend.com/emails](https://resend.com/emails))
   - E-Mail-Postfach `info@tech-bridge.ch`

