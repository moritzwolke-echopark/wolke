# Buchprojekt „Zu viel für gestern“

Sachbuch von Moritz Wolke über ADHS als Superkraft im KI-Zeitalter. Arbeitssprache: Deutsch.

## Meine Rolle

Moritz wirft immer wieder Ideen ein, oft spontan und ungeordnet. Meine Aufgabe ist, alles zu ordnen und später ein Buch daraus zu machen.

## Wenn eine neue Idee kommt

1. **Festhalten:** In `ideen/eingang.md` oben einen neuen Eintrag anlegen: Datum, Moritz' Worte möglichst im Original, dann eine Zeile, worum es im Kern geht.
2. **Einsortieren:** In `konzept/gliederung.md` beim passenden Teil/Kapitel als Stichpunkt eintragen, mit Verweis auf die Nummer im Eingang (z. B. `→ #4`). Passt sie nirgends hin: unter „Noch ohne Platz“.
3. **Status setzen** im Eingang: `einsortiert`, `offen` oder `verworfen` (nur wenn Moritz das sagt).
4. **Zurückmelden:** kurz sagen, wo die Idee gelandet ist und ob sie etwas an der Gliederung verändert.

Ideen nie umformulieren und dann das Original löschen. Moritz' eigene Formulierungen sind Rohmaterial für das Buch.

## Stil

Siehe `konzept/stil-und-einleitung.md`: Humor und Sarkasmus, nicht zu extrem, Ton wie Harari, *Eine kurze Geschichte der Menschheit*. Persönliches darf wehtun. Für deutsche Texte vor dem Abschluss den Skill `humanizer-de` nutzen.

## Feste Entscheidungen

- Titel „Zu viel für gestern“, Untertitel „Warum ADHS im KI-Zeitalter zur Superkraft wird“. Nicht ungefragt ändern.
- Cover: Design A („Feld“) ist gesetzt. Die Quelle `cover/cover.html` liegt noch auf Moritz' Mac und fehlt im Repo; bis dahin gibt es nur das Bild `cover/export/cover-vorderseite.png`. Varianten B–G liegen in `cover/varianten/`, Bewertung in `cover/bewertung.md`.

## Sitzungen & Speichern

- Das Projekt lebt im Repo `moritzwolke-echopark/wolke`, Ordner `buch/`. Cloud-Sitzungen sind kurzlebig: **Nach jeder Änderung committen und pushen**, sonst ist sie weg.
- Rendern in der Cloud: `node cover/render.js <quelle.html> <name>` (Playwright). Auf dem Mac geht auch `./cover/render.sh`.
- Langzeitnotizen (Stand, Stil) stehen in `memory/`. Bei wichtigen Entscheidungen dort nachtragen.
