# 葵涌平安福音堂網站介面合集 — Design DNA

Source: `葵涌平安福音堂網站介面合集.png` (1536×1024, five page panels + footer strip)
Captured: 2026-11-15. Colours sampled from pixels with PIL, not read off by eye.
Applies to: the phase 1 church site in `../site`.

---

## Design Map

### Colour

| Role | Hex | Where it appears | On-screen area |
|---|---|---|---|
| Ground / page | `#f1e8e0` | collage gutter, page background behind every panel | largest single tone (10.8%) |
| Panel / card | `#fbf8f4` | header bars, card fills, content wells | 6–8% per panel |
| Footer band | `#f3e8de` | full-width footer strip | 27–35% of that strip |
| Ink | `#211814` | headings, service names, brand wordmark | text only |
| Ink secondary | `#5b4e44` | nav links, subtitles, captions | text only |
| Tan / gold | `#a6784d` | buttons, line icons, active underline, logo | <5% of any panel |
| Deep tan | `#8b5a2b` | pill button fill, icon strokes at small sizes | <2% |
| Hairline | `#ddd0c2` | row dividers, card borders | 1px rules |

Photo tones inside the hero average `#a6784d`–`#c4a587`; the images are the only place the palette goes
saturated, and they are the only place that carries no text except white overlay copy.

Shipped site tokens differ from the reference in three measurable places, each because the reference
value failed a target:

| Token | Reference | Shipped | Reason |
|---|---|---|---|
| Accent text | `#a6784d` (3.40:1 on paper) | `#6b4520` (7.38:1) | tan fails 7:1 for text; it stays decorative |
| Button fill | `#af8250` (3.88:1 with white) | `#8b5a2b` (5.84:1) | white on the lighter tan is unreadable at small sizes |
| Secondary text | `#5b4e44` (6.65:1 on sand) | `#4f4338` (7.94:1) | footer band is darker than the page |

### Type

| Level | Face | Size | Weight | Line height |
|---|---|---|---|---|
| Hero slogan | brush/kai (`Kaiti TC` → serif) | ~48–58px at 1440 | 400 | 1.35 |
| Page title (h1) | serif (`Noto Serif TC` → Songti TC) | 28–45px | 600 | 1.4 |
| Section (h2) | serif | 24–29px | 600 | 1.4 |
| Row name | serif | 21px | 600 | 1.4 |
| Body | sans (`Noto Sans TC` → PingFang TC) | 19px | 400 | 1.75 |
| Meta / caption | sans | 17–18px | 400 | 1.6 |
| English subline | sans, 0.72–0.88rem | 14–17px | 400 | 1.3 |

Two families only, split by job: serif for anything that is a name or a title, sans for anything a
person has to read at length. The one brush face is reserved for a single line that is spoken
liturgically, never for navigation or body copy. Latin text never sets uppercase and never gets
letter-spacing.

### Space and shape

- Header 64–72px tall; logo block 40px; nav gap 18–24px.
- Card radius 14px; pill buttons `999px`; rows separated by 1px `#ddd0c2`.
- Card padding 20–24px; section rhythm 40–48px between blocks; hero 315–420px tall.
- Grid: 4-up quick links above the fold, 5-column row grid (icon 42px + name + day + time + venue), 2–3 column footer at 52em.
- Shadows: `0 1px 3px rgba(36,26,20,.05)` on cards only — enough to lift them off the cream, not enough to read as elevation.

---

## Taste DNA

### 1. Photography carries the emotion, colour carries nothing

**Trigger** — a church has to feel warm without using illustration, and must not show faces.
**Decision** — all warmth lives in full-bleed photographs and a cream paper tone; the interface itself stays within five flat colours and 1px rules.
**Reason** — warmth that lives in the chrome (gradients, gold foil, drop shadows) reads as decoration and dates within two years; warmth in a photograph of the actual room reads as the place.
**Evidence** — five heroes, five photographs, zero gradients; the only saturated surface anywhere is a photo. Every UI surface is `#f1e8e0`, `#fbf8f4`, or `#f3e8de`.

### 2. Two type families with a single brush exception

**Trigger** — Traditional Chinese titles need gravity; body copy needs to be readable at 19px on a phone.
**Decision** — serif for titles and names, sans for anything longer than a line, and one brush face used exactly twice: the hero slogan and the footer slogan.
**Reason** — a brush face at 3 places is an identity; at 20 places it is a gimmick and it destroys scanning. Restricting it to the one sentence the church actually says out loud keeps it meaningful.
**Evidence** — the same 願平安與你同在 appears in brush at the hero and once in the footer, and nowhere in nav, buttons, or headings.

**Restraint trade-off:** the reference could have used brush headings for all five page titles — it is the obvious move for a Chinese church site. It did not, which is what keeps the 服務時間 rows skimmable.

### 3. Pill buttons, because the audience is not 25

**Trigger** — most of the congregation is over 60 and presses buttons on a phone.
**Decision** — every action is a 44–48px pill with a 6px vertical rhythm, a filled tan for the primary and an outline for the secondary. No text links as the primary call to action.
**Reason** — a capsule reads as pressable at arm's length; a small underlined link does not. The pill shape also survives translation into a 48px tap target without looking wrong.
**Evidence** — 4 pill CTAs across the panels (主日直播, 認識我們, 查看 Google 地圖, 閱讀更多), 0 primary actions as bare text.

### 4. The reference page structure is a questionnaire, not a brochure

**Trigger** — a visitor arrives with three questions: when, where, who are you.
**Decision** — the homepage answers them in order below the hero: four icon cards act as an index, the service-times card repeats the times in full, and the address never leaves the footer.
**Reason** — a church site is not read, it is interrogated. Each block exists to end one question, which is why the time card is a dense 5-column row rather than a list of paragraphs.
**Evidence** — times appear twice on the home panel (card index + full row), the footer repeats address and phone on all five panels, and the breadcrumb shows position on every subpage.

---

## What this DNA rejects

- No carousel autoplay — the reference has pagination dots; the shipped site uses one static hero. Motion costs older eyes and the dots imply content that does not exist.
- No 3D, no illustration, no cartoon — the reference is photographic; illustration would break the one-warm-surface rule.
- No second accent colour — Facebook blue appears in the reference footer and is deliberately dropped.
