# TechBridge Logo Setup

## Logo-Datei hinzufügen

1. **Lade das Logo-Bild hoch:**
   - Lege die Logo-Datei in den `public` Ordner
   - Benenne sie: `logo.svg` oder `logo.png`
   - Empfohlene Formate: SVG (beste Qualität) oder PNG

2. **Logo-Datei platzieren:**
   ```
   public/
     logo.svg  (oder logo.png)
   ```

## Nach dem Hochladen

Die Komponenten (Navbar, Footer) wurden bereits aktualisiert und verwenden automatisch:
- `/logo.svg` (falls vorhanden)
- Oder `/logo.png` (falls vorhanden)
- Fallback: Text-Logo "TB" (falls kein Bild vorhanden)

## Empfohlene Logo-Größen

- **Navbar:** ca. 120-150px Breite
- **Footer:** ca. 120-150px Breite
- **Format:** SVG (skalierbar) oder PNG mit transparentem Hintergrund

