#!/bin/zsh
# Rendert ein Cover als PNG (Bildschirm) und als Vektor-PDF (13,5 × 21,5 cm).
#   ./render.sh                                               → cover.html nach export/cover-vorderseite.*
#   ./render.sh varianten/b-faeden.html varianten/b-faeden    → export/varianten/b-faeden.*
#   ./render.sh cover.html varianten/titel-x 'title=…&title2=…' → mit anderen Texten
set -e
DIR="${0:A:h}"
SRC="${1:-cover.html}"
NAME="${2:-cover-vorderseite}"
QUERY="${3:-}"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
URL="$(python3 -c '
import pathlib, sys, urllib.parse as u
url = pathlib.Path(sys.argv[1]).as_uri()
if sys.argv[2]:
    url += "?" + u.urlencode(u.parse_qsl(sys.argv[2]), quote_via=u.quote)
print(url)' "$DIR/$SRC" "$QUERY")"
OUT="$DIR/export/$NAME"
mkdir -p "${OUT:h}"

"$CHROME" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=2 \
  --window-size=900,1433 --virtual-time-budget=5000 \
  --screenshot="$OUT.png" "$URL" 2>/dev/null

"$CHROME" --headless=new --disable-gpu --no-pdf-header-footer --virtual-time-budget=5000 \
  --print-to-pdf="$OUT.pdf" "$URL" 2>/dev/null

echo "Fertig: $OUT.png / .pdf"
