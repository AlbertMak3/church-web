#!/usr/bin/env python3
"""Turn the church's own photographs into the WebP set the site expects.

The originals arrive at full camera size (7008 px wide, ~14 MB, with EXIF) in
`picture resource/`. The site wants three widths per picture, named
`<name>-900.webp` / `-1400` / `-2000` in site/public/img/, which is what
`panel()` in src/content.js builds its srcSet from. Saving through Pillow drops
the EXIF block, which is what the photo notice on /privacy#photo-credits
promises.

The camera leaves these frames flat and slightly milky: white lettering on a
pale wall, no deep blacks. A small black/white-point correction plus a light
unsharp mask after the downscale makes the lettering hold up at card size
without turning it into a processed-looking graphic. Pass --raw to publish the
file untouched.

Run from anywhere:
    python site/scripts/prepare-church-photos.py
    python site/scripts/prepare-church-photos.py --only nameplate
    python site/scripts/prepare-church-photos.py --only nameplate --raw

Add a picture to PHOTOS below to publish another one. Keep the name short: it
becomes the file name and the key used in content.js.
"""

import argparse
import os

from PIL import Image, ImageEnhance, ImageFilter

REPO = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
SRC_DIR = os.path.join(REPO, 'picture resource')
OUT_DIR = os.path.join(REPO, 'site', 'public', 'img')

# name -> original file name
PHOTOS = {
    'nameplate': 'DSC03117.JPG',  # 葵涌平安福音堂 nameplate on the lobby wall — about page
}

WIDTHS = (900, 1400, 2000)


def tone(image):
    """Lift the photo out of its flat exposure without over-cooking it.

    autocontrast is deliberately not used: the frame is almost entirely pale
    wall, so stretching the histogram maps that wall to mid-grey and the photo
    turns dark and muddy. A pivot-around-mid-grey contrast bump keeps the
    scene's brightness and only separates the raised lettering from the wall.
    """
    image = ImageEnhance.Contrast(image).enhance(1.14)
    image = ImageEnhance.Color(image).enhance(1.04)
    return image.filter(ImageFilter.UnsharpMask(radius=2, percent=45, threshold=4))


def convert(source, name, raw=False):
    image = Image.open(source).convert('RGB')
    if not raw:
        image = tone(image)
    ratio = image.height / image.width
    written = []
    for width in WIDTHS:
        target = image.resize((width, round(width * ratio)), Image.Resampling.LANCZOS)
        if not raw:
            target = target.filter(ImageFilter.UnsharpMask(radius=1.1, percent=55, threshold=3))
        path = os.path.join(OUT_DIR, '{}-{}.webp'.format(name, width))
        target.save(path, 'WEBP', quality=84, method=6)
        written.append((path, target.size))
    return written


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--only', help='convert just this key from PHOTOS')
    parser.add_argument('--raw', action='store_true', help='skip the tone and sharpening pass')
    args = parser.parse_args()

    os.makedirs(OUT_DIR, exist_ok=True)
    for name, file_name in PHOTOS.items():
        if args.only and args.only != name:
            continue
        source = os.path.join(SRC_DIR, file_name)
        written = convert(source, name, raw=args.raw)
        for path, size in written:
            print('{}  {}x{}'.format(os.path.relpath(path, REPO), size[0], size[1]))
        width, height = written[-1][1]
        print('  use in content.js: width {} height {}'.format(width, height))


if __name__ == '__main__':
    main()
