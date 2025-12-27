# Resend DNS-Verifizierung - Troubleshooting

## Problem: DNS-Records sind korrekt, aber Status bleibt "Pending"

Wenn die DNS-Records korrekt konfiguriert sind, aber Resend sie immer noch als "Pending" anzeigt, gibt es mehrere mögliche Ursachen:

## 🔍 Schritt 1: DNS-Records überprüfen

### 1.1 Externe DNS-Prüfung

Verwende einen externen DNS-Checker, um zu sehen, was tatsächlich im DNS steht:

**Tools:**
- [MXToolbox](https://mxtoolbox.com/SuperTool.aspx)
- [DNS Checker](https://dnschecker.org/)
- [WhatsMyDNS](https://www.whatsmydns.net/)

**So prüfst du:**

1. **MX-Record prüfen:**
   - Gehe zu MXToolbox
   - Wähle "MX Lookup"
   - Gebe ein: `send.tech-bridge.ch` (oder deine Domain)
   - Prüfe, ob der MX-Record mit dem von Resend übereinstimmt

2. **TXT-Record prüfen:**
   - Gehe zu MXToolbox
   - Wähle "TXT Lookup"
   - Gebe ein: `send.tech-bridge.ch` (oder deine Domain)
   - Prüfe, ob der SPF-Record vorhanden ist

### 1.2 Record-Name prüfen

**WICHTIG:** Der Record-Name muss EXAKT übereinstimmen!

- ✅ **Richtig:** Name = `send` (für Subdomain `send.tech-bridge.ch`)
- ✅ **Richtig:** Name = `@` (für Root-Domain `tech-bridge.ch`)
- ❌ **Falsch:** Name = `send.tech-bridge.ch` (wenn Resend nur `send` verlangt)
- ❌ **Falsch:** Name = `tech-bridge.ch` (wenn Resend `send` verlangt)

**Prüfe in Resend:**
- Schaue genau, welchen Namen Resend verlangt
- Meistens ist es `send` für SPF-Records

### 1.3 Record-Content prüfen

**MX-Record:**
- Content muss EXAKT übereinstimmen (inkl. aller Zeichen)
- Beispiel: `feedback-smtp.eu-west-1.amazonses.com`
- Keine zusätzlichen Leerzeichen oder Zeichen

**TXT-Record (SPF):**
- Content muss EXAKT übereinstimmen
- Beispiel: `v=spf1 include:amazonses.com ~all`
- Keine zusätzlichen Leerzeichen

## 🔧 Schritt 2: Häufige Probleme beheben

### Problem 1: DNS-Propagierung dauert länger

**Lösung:**
- DNS-Änderungen können 5 Minuten bis 48 Stunden dauern
- Normalerweise: 15-60 Minuten
- **Tipp:** Warte mindestens 1 Stunde nach dem Hinzufügen der Records

**Beschleunigen:**
- Setze TTL auf niedrigeren Wert (z.B. 300 Sekunden = 5 Minuten)
- Warte, bis der alte TTL abgelaufen ist

### Problem 2: Mehrere SPF-Records

**WICHTIG:** Du kannst nur EINEN SPF-Record pro Domain haben!

**Problem:**
- Wenn du bereits einen SPF-Record hast (z.B. für Google Workspace)
- Und Resend einen neuen SPF-Record verlangt
- **Lösung:** Kombiniere beide in EINEM Record!

**Beispiel:**

**Vorher (Google Workspace):**
```
v=spf1 include:_spf.google.com ~all
```

**Nachher (Google Workspace + Resend):**
```
v=spf1 include:_spf.google.com include:amazonses.com ~all
```

**So machst du es:**
1. Nimm deinen bestehenden SPF-Record
2. Füge `include:amazonses.com` hinzu (oder was Resend verlangt)
3. Ersetze den alten SPF-Record durch den kombinierten
4. **Lösche NICHT** den alten Record, sondern **ersetze** ihn!

### Problem 3: Falscher Record-Typ

**MX-Record:**
- Typ muss **MX** sein (nicht TXT!)
- Name: `send` (oder was Resend verlangt)
- Priority: `10` (oder was Resend verlangt)

**TXT-Record:**
- Typ muss **TXT** sein (nicht MX!)
- Name: `send` (oder was Resend verlangt)
- Content: Der SPF-String von Resend

### Problem 4: TTL zu hoch

**Problem:**
- TTL (Time To Live) ist zu hoch (z.B. 86400 = 24 Stunden)
- DNS-Änderungen werden nicht schnell genug propagiert

**Lösung:**
- Setze TTL auf niedrigeren Wert (z.B. 300 = 5 Minuten)
- Oder: Warte einfach länger

### Problem 5: DNS-Cache

**Problem:**
- Resend prüft von verschiedenen Servern
- Einige Server sehen die neuen Records noch nicht (Cache)

**Lösung:**
- Warte einfach länger (bis zu 24 Stunden)
- Oder: Kontaktiere Resend-Support

## 🚀 Schritt 3: Manuelle Verifizierung forcieren

### Option 1: Records löschen und neu hinzufügen

1. Lösche die DNS-Records in deinem Domain-Provider
2. Warte 5-10 Minuten
3. Füge sie erneut hinzu (exakt wie Resend es verlangt)
4. Warte 15-60 Minuten

### Option 2: Resend-Support kontaktieren

Wenn nach 24 Stunden immer noch "Pending":
1. Gehe zu [resend.com/support](https://resend.com/support)
2. Erkläre das Problem
3. Gib an:
   - Domain-Name
   - Welche Records du hinzugefügt hast
   - Screenshot von deinen DNS-Einstellungen
   - Screenshot von Resend (mit "Pending"-Status)

## ✅ Checkliste

Bevor du Resend-Support kontaktierst, prüfe:

- [ ] DNS-Records sind seit mindestens 1 Stunde aktiv
- [ ] Record-Name stimmt EXAKT überein (z.B. `send` oder `@`)
- [ ] Record-Content stimmt EXAKT überein (keine zusätzlichen Zeichen)
- [ ] Record-Typ ist korrekt (MX für MX-Record, TXT für TXT-Record)
- [ ] Externe DNS-Checker zeigen die Records korrekt an
- [ ] SPF-Record ist kombiniert (wenn du bereits einen hattest)
- [ ] TTL ist nicht zu hoch (empfohlen: 300-3600 Sekunden)

## 🔍 DNS-Records nochmal prüfen

### Beispiel-Konfiguration für Resend:

**MX-Record:**
```
Type: MX
Name: send
Content: feedback-smtp.eu-west-1.amazonses.com
TTL: Auto (oder 300)
Priority: 10
```

**TXT-Record (SPF):**
```
Type: TXT
Name: send
Content: v=spf1 include:amazonses.com ~all
TTL: Auto (oder 300)
Priority: (leer)
```

**WICHTIG:**
- Diese Records sind für "Enable Sending"
- "Enable Receiving" sollte AUS sein (wenn du Google Workspace verwendest)

## 📞 Nächste Schritte

1. Prüfe die DNS-Records mit externen Tools
2. Warte mindestens 1 Stunde
3. Prüfe Resend-Dashboard erneut
4. Falls immer noch "Pending": Kontaktiere Resend-Support

## 💡 Tipp

Manchmal hilft es, die Domain in Resend zu löschen und neu hinzuzufügen:
1. Gehe zu Resend → Domains
2. Lösche die Domain
3. Füge sie erneut hinzu
4. Füge die DNS-Records erneut hinzu
5. Warte auf Verifizierung

