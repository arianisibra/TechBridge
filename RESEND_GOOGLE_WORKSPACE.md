# Resend mit Google Workspace - Keine Konflikte!

## ✅ Gute Nachricht

**Resend benötigt KEINE MX-Records!** Deine Google Workspace MX-Records bleiben unverändert und funktionieren weiterhin normal.

## Wie funktioniert das?

### Google Workspace (E-Mail-Empfang)
- **MX-Records:** Für E-Mail-Empfang (bleiben bei Google)
- **Zweck:** E-Mails empfangen an `info@tech-bridge.ch`
- **Wird nicht geändert!**

### Resend (E-Mail-Versand)
- **TXT-Records:** Nur für Domain-Verifizierung (SPF, DKIM)
- **Zweck:** E-Mails senden VON `noreply@tech-bridge.ch`
- **Keine MX-Records nötig!**

## Was muss hinzugefügt werden?

Resend benötigt nur **TXT-Records** für:
1. **Domain-Verifizierung** (einmalig)
2. **SPF-Record** (für E-Mail-Authentifizierung)
3. **DKIM-Record** (für E-Mail-Signatur)

Diese werden **zusätzlich** zu deinen bestehenden DNS-Einträgen hinzugefügt - nichts wird überschrieben!

## Schritt-für-Schritt

### 1. Domain in Resend hinzufügen

1. Gehe zu [resend.com/domains](https://resend.com/domains)
2. Klicke auf **"Add Domain"**
3. Gebe ein: `tech-bridge.ch`
4. Klicke auf **"Add"**

### 2. DNS-Einträge hinzufügen

Resend zeigt dir **TXT-Records**, die du hinzufügen musst:

**WICHTIG:** 
- Füge diese **zusätzlich** zu deinen bestehenden DNS-Einträgen hinzu
- **Ändere NICHT** deine Google Workspace MX-Records!
- Du kannst mehrere TXT-Records haben

**Beispiel:**
```
Bestehende DNS-Einträge (bleiben unverändert):
- MX-Records für Google Workspace
- Andere TXT-Records

Neue DNS-Einträge (von Resend):
- TXT-Record für Domain-Verifizierung
- TXT-Record für SPF
- TXT-Record für DKIM
```

### 3. In deinem Domain-Provider

1. Gehe zu deinem Domain-Provider (z.B. Namecheap, GoDaddy, etc.)
2. Öffne die DNS-Einstellungen für `tech-bridge.ch`
3. **Füge die TXT-Records von Resend hinzu** (nicht ersetzen!)
4. **Lasse alle Google Workspace Einträge unverändert**

### 4. Warten auf Verifizierung

- Die Verifizierung kann 5-60 Minuten dauern
- Resend prüft automatisch, ob die DNS-Einträge korrekt sind

## Nach der Verifizierung

### E-Mail-Fluss

**E-Mails empfangen:**
- `info@tech-bridge.ch` → Google Workspace (wie bisher)

**E-Mails senden:**
- Von `noreply@tech-bridge.ch` → Resend API → Empfänger
- Von `info@tech-bridge.ch` → Google Workspace (wie bisher)

### Environment Variables in Netlify

Nach der Verifizierung:
1. Gehe zu Netlify → Environment Variables
2. Füge hinzu:
   - **Key:** `RESEND_FROM_EMAIL`
   - **Value:** `TechBridge <noreply@tech-bridge.ch>`
3. Ändere:
   - **Key:** `RESEND_RECIPIENT_EMAIL` (oder entferne es)
   - **Value:** `info@tech-bridge.ch`
4. Deploye erneut

## Zusammenfassung

✅ **Google Workspace MX-Records:** Bleiben unverändert  
✅ **Resend TXT-Records:** Werden zusätzlich hinzugefügt  
✅ **Keine Konflikte:** Beide Systeme arbeiten parallel  
✅ **E-Mails empfangen:** Weiterhin über Google Workspace  
✅ **E-Mails senden:** Über Resend API (für Website-Kontaktformular)

## Testen

Nach der Verifizierung:
1. Teste das Kontaktformular auf deiner Website
2. E-Mail sollte an `info@tech-bridge.ch` (Google Workspace) ankommen
3. E-Mail wird von `noreply@tech-bridge.ch` (Resend) gesendet

