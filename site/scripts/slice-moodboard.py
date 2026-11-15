#!/usr/bin/env python3
"""Cut the eight photographs out of the mood board, ready for the site.

The source is a 1672x941 PNG: eight panels in a 4 x 2 grid, separated by
near-white gutters. The boxes below were measured from those gutters, so the
cropping is repeatable instead of by eye. Each panel is written as WebP at
three widths (900 / 1400 / 2000 px) into site/public/img/.

Run from anywhere:
    python site/scripts/slice-moodboard.py
    python site/scripts/slice-moodboard.py --src 其他拼貼.png

Panels narrower than the target width are upscaled with LANCZOS and a light
unsharp mask. The originals are about 835 px wide, so 1400 and 2000 are
enlargements: they look acceptable behind the cream scrim, but a real
photograph from the church should replace them rather than a bigger upscale.
"""

import argparse
import os

from PIL import Image, ImageFilter

REPO = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
DEFAULT_SRC = os.path.join(REPO, '教會網站暖光背景拼貼.png')
DEFAULT_OUT = os.path.join(REPO, 'site', 'public', 'img')

# (left, top, right, bottom) inclusive, measured from the gutters at
# rows 286-290 / 538-542 / 750-754 and column 835-839.
ROWS = [(0, 285), (291, 537), (543, 749), (755, 940)]
COLS = [(0, 834), (840, 1671)]

PANELS = [
    ('cross-wall',      ROWS[0], COLS[0]),   # lit cross on a wooden wall — home hero
    ('dove-wood',       ROWS[0], COLS[1]),   # white dove on a wooden surface — about inset
    ('church-exterior', ROWS[1], COLS[0]),   # building exterior — about hero (stand-in)
    ('bible-cross',     ROWS[1], COLS[1]),   # open bible before a cross — times hero
    ('greenery-light',  ROWS[2], COLS[0]),   # eucalyptus and leaf shadows — home section
    ('sanctuary-wood',  ROWS[2], COLS[1]),   # wooden sanctuary — facilities hero
    ('dove-line',       ROWS[3], COLS[0]),   # cream panel, dove line drawing — privacy hero
    ('white-flowers',   ROWS[3], COLS[1]),   # baby's breath — contact hero
]

WIDTHS = [900, 1400, 2000]


def main():
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument('--src', default=DEFAULT_SRC)
    ap.add_argument('--out', default=DEFAULT_OUT)
    args = ap.parse_args()

    os.makedirs(args.out, exist_ok=True)
    board = Image.open(args.src).convert('RGB')

    for name, (y0, y1), (x0, x1) in PANELS:
        panel = board.crop((x0, y0, x1 + 1, y1 + 1))
        w, h = panel.size
        for target in WIDTHS:
            out = panel.resize((target, round(h * target / w)), Image.Resampling.LANCZOS)
            if target > w:
                out = out.filter(ImageFilter.UnsharpMask(radius=1.6, percent=55, threshold=2))
            path = os.path.join(args.out, f'{name}-{target}.webp')
            out.save(path, 'WEBP', quality=84, method=6)
            print(f'{path}  {out.size[0]}x{out.size[1]}')


if __name__ == '__main__':
    main()
