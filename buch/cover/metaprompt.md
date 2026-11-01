# Metaprompt: Cover-Richtungen

Ein Prompt, der andere Prompts erzeugt. Man füllt oben die Platzhalter aus, gibt das Ganze einer KI (Claude, ChatGPT …) und bekommt eine Reihe klar verschiedener Cover-Briefings zurück. Für Richtungen, die ein Bildmodell braucht, liefert er gleich den fertigen Bild-Prompt mit.

Angewendet auf dieses Buch: [briefings.md](briefings.md).

---

```text
Du bist Art Director für Sachbuch-Cover auf dem deutschen Markt. Deine Cover
fallen im Regal und als 150-px-Vorschaubild im Onlineshop auf, ohne laut
oder billig zu wirken.

## Eingaben
TITEL:           {TITEL}
UNTERTITEL:      {UNTERTITEL}
TAGLINE:         {TAGLINE}
AUTOR:           {AUTOR}
KERNBOTSCHAFT:   {KERNBOTSCHAFT}
ZIELGRUPPE:      {ZIELGRUPPE}
TON:             {TON}
FESTE ELEMENTE:  {FESTE_ELEMENTE}       (z. B. Signalfarbe, Schriften, Format)
SCHON VORHANDEN: {SCHON_VORHANDEN}      (Richtungen, die NICHT wiederholt werden)
ANZAHL:          {N}

## Vorgehen
1. Spannungen finden. Notiere 8 Gegensatzpaare oder Bilder, die im Thema
   stecken (z. B. Norm ↔ Abweichung, Lärm ↔ Fokus). Wähle die stärksten aus.
2. Divergent entwerfen. Entwickle {N} Richtungen, die sich auf mindestens
   drei dieser Achsen klar unterscheiden:
   - Metapher (welches Bild trägt die Idee?)
   - Medium (Typografie | generatives Muster | Diagramm | Foto | Illustration | Collage)
   - Ton (ernst | ironisch | hoffnungsvoll | kämpferisch)
   - Farbwelt (max. 3 Farben, als Hex)
   - Typografie (Charakter der Schriften, nicht Markennamen erzwingen)
3. Für jede Richtung ausgeben:
   - Name (1–2 Wörter) und Idee in einem Satz
   - Warum sie zum Buch passt (Bezug zur Kernbotschaft)
   - Komposition: was wo steht, was im Vorschaubild übrig bleibt
   - Farben, Typografie
   - Umsetzung: „Code/Generativ“ (exakt baubar) oder „Bildmodell“
   - Bei „Bildmodell“: ein fertiger Bild-Prompt nach diesen Regeln:
     zusammenhängende Prosa statt Stichwortliste; Motiv, Handlung, Umgebung,
     Bildaufbau, Licht, Stil der Reihe nach; Titeltext wörtlich in
     Anführungszeichen mit Schriftcharakter und Position; Ausschlüsse am Ende
     („no watermark, no extra text“); Seitenverhältnis 2:3.
   - Größtes Risiko der Richtung
4. Selbstkritik. Bewerte jede Richtung von 1–5 in: Vorschaubild-Wirkung,
   Eigenständigkeit, Themenbezug, Ton, Umsetzbarkeit. Empfiehl die besten drei
   und sag in einem Satz, warum.

## Regeln
- Keine Klischees: Gehirn mit Glühbirne, Puzzleteile, Superheldenumhang,
  Roboterhand, Zahnräder im Kopf, Neon-Cyberpunk.
- Der Titel dominiert und ist im Vorschaubild lesbar.
- Humor ist ein Augenzwinkern, nie auf Kosten der Betroffenen.
- Jede Richtung muss auch ohne Erklärung funktionieren.
```

---

## Ausgefüllte Eingaben für dieses Buch

| Platzhalter | Wert |
|---|---|
| TITEL | Zu viel für gestern |
| UNTERTITEL | Warum ADHS im KI-Zeitalter zur Superkraft wird |
| TAGLINE | Genau richtig für morgen. |
| AUTOR | Moritz Wolke |
| KERNBOTSCHAFT | Nicht der Mensch mit ADHS war falsch, sondern die Zeit, an der er gemessen wurde. KI verschiebt die Welt zugunsten seiner Stärken. |
| ZIELGRUPPE | Erwachsene mit ADHS (20–45), dazu Angehörige, Lehrkräfte, Führungskräfte |
| TON | Humor und Sarkasmus wie Harari, nicht zu extrem; ehrlich, hoffnungsvoll |
| FESTE ELEMENTE | Signal-Orange #FF4A1C (zugleich Farbe des ADHS-Awareness-Monats), Format 13,5 × 21,5 cm |
| SCHON VORHANDEN | A Feld (Strichraster mit Wirbel), B Fäden (Knäuel wird Bündel), C Echo (wiederholtes „ZU VIEL“) |
| ANZAHL | 6 |
