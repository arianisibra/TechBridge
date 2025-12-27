# Resend SPF-Verifizierung - Wichtig!

## Problem

Die Domain-Verifizierung (DKIM) ist fertig ✅, aber **SPF ist noch "Pending"**. Resend benötigt beide für den E-Mail-Versand.

## Lösung

### 1. SPF-Records hinzufügen

In deinem Resend Dashboard siehst du unter **"Enable Sending"** → **"SPF"** zwei Einträge:

1. **MX-Record** (Typ: MX, Name: `send`)
2. **TXT-Record** (Typ: TXT, Name: `send`)

**WICHTIG:** Füge beide in deinem Domain-Provider hinzu!

### 2. In deinem Domain-Provider

1. Gehe zu deinem Domain-Provider (z.B. Namecheap, GoDaddy, etc.)
2. Öffne die DNS-Einstellungen für `tech-bridge.ch`
3. Füge die beiden Einträge hinzu:
   - **MX-Record:** Name `send`, Content von Resend, Priority 10
   - **TXT-Record:** Name `send`, Content von Resend (SPF-Record)

**WICHTIG:** 
- Diese sind **zusätzlich** zu deinen bestehenden DNS-Einträgen
- **Ändere NICHT** deine Google Workspace MX-Records!
- Die Google Workspace MX-Records bleiben für `@` (Root-Domain)

### 3. "Enable Receiving" AUSSCHALTEN

**WICHTIG:** Da du Google Workspace verwendest:
- **"Enable Receiving"** sollte **AUS** sein (Toggle auf OFF)
- Du brauchst die MX-Records für "Enable Receiving" NICHT
- Diese würden deine Google Workspace E-Mails stören

### 4. Warten auf Verifizierung

- Nach dem Hinzufügen der SPF-Records: 5-60 Minuten warten
- Resend prüft automatisch, ob die DNS-Einträge korrekt sind
- Status sollte von "Pending" zu "Verified" wechseln

## Zusammenfassung

✅ **DKIM:** Verifiziert (fertig!)  
⏳ **SPF:** Noch "Pending" → DNS-Einträge hinzufügen  
❌ **Enable Receiving:** AUS lassen (Google Workspace verwendet)  
✅ **Enable Sending:** AN lassen (für E-Mail-Versand)

## Nach der SPF-Verifizierung

1. Alle Status sollten "Verified" sein
2. Teste das Kontaktformular erneut
3. E-Mails sollten jetzt funktionieren!

