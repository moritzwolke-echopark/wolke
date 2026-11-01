# Zu viel für gestern
**Warum ADHS im KI-Zeitalter zur Superkraft wird**, Buchprojekt von Moritz Wolke

## Aufbau

| Ordner | Inhalt |
|---|---|
| `ideen/eingang.md` | Jede neue Idee von Moritz, im Originalwortlaut, neueste oben |
| `konzept/gliederung.md` | Die lebendige Gliederung, in die alle Ideen einsortiert werden |
| `konzept/` | außerdem: Titel & Positionierung, Stil & Einleitung |
| `cover/` | Cover-Quelle (`cover.html`, siehe unten), Schriften, `metaprompt.md`, `briefings.md`, `bewertung.md`; `varianten/` mit den Designs B–G |
| `cover/export/` | Fertige Dateien: `cover-vorderseite.png` / `.pdf` (13,5 × 21,5 cm), `varianten/`, `varianten-uebersicht.png` |
| `manuskript/` | Kapitel, sobald das Schreiben beginnt |
| `CLAUDE.md` | Arbeitsregeln für Claude: wie Ideen festgehalten und einsortiert werden |
| `memory/` | Claudes Langzeitnotizen zum Projekt (Stand, Stil) |

## Cover ändern

Titel, Autor und Texte stehen oben in `cover/cover.html` im Block `TEXT`, das Feld lässt sich über `FIELD` einstellen.
Danach neu rendern:

```bash
./cover/render.sh                                             # Mac, braucht Google Chrome
node cover/render.js varianten/d-zeugnis.html varianten/d-zeugnis   # überall mit Playwright (auch in der Cloud)
```

## Wo das Projekt liegt

Das Projekt liegt im GitHub-Repo `moritzwolke-echopark/wolke` im Ordner `buch/`. So ist es in jeder Claude-Sitzung verfügbar (App, Web, Mac), ohne dass der Mac laufen muss.

**Noch auf dem Mac, fehlt hier:** die Quelle von Cover A (`cover/cover.html`), die Original-PDFs von Cover A und den Titel-Alternativen und das Original von `konzept/titel-und-positionierung.md` (hier nur rekonstruiert). Den alten Projektordner einmal hierher kopieren, sobald der Mac läuft. `cover/export/cover-vorderseite.png` ist bis dahin eine Vorschaukopie (1256 × 2000 px) aus dem Chatverlauf.

## Nächste Schritte

- Titel festlegen und auf Dopplungen prüfen (VLB, Händler), ggf. Titelschutzanzeige
- Gliederung zu Kapiteln ausbauen
- Für den Druck: Rückseite, Buchrücken und Beschnitt nach den Vorgaben von Verlag oder Druckerei ergänzen
