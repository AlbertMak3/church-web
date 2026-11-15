# 教會網站 — Phase 1 Spec (static introduction site)

Status: agreed direction, not started
Owner: Albert
Last updated: 2026-11-15
Supersedes: the full booking spec of 2026-11-08, parked in PHASE-2-BOOKING.md

---

## 1. What phase 1 is

Six static pages that answer the questions a stranger actually has: who we are, when we meet,
where we are, and what the place looks like. Plus links out to Instagram and Google Maps.

Nothing dynamic. No database, no server, no login, no admin panel, no booking, no PDF archive.

## 2. Why it shrank

The church is uneasy about publishing themselves online, and hesitant about the booking feature
in particular. A booking system is also their problem, not just ours: someone has to approve
requests, keep the calendar honest, and answer WhatsApp. Pushing it now risks a site that never
gets approved at all.

So phase 1 does the one job nobody can object to — being findable, and telling people when to
come — while collecting zero personal data. That is also the strongest privacy position
available: there is nothing to leak.

Booking is designed and parked. It can be proposed again once the site is live and the
conversation has cooled.

## 3. Scope

```
/            首頁      church name, one-sentence who-we-are, service times, address,
                       two buttons: 地圖 · Instagram
/about       關於我們   信仰 (5-6 short points), 歷史, 願景
/times       聚會時間   Sunday worship, prayer meeting, fellowship table (day / time / name)
/facilities  設施       the seven rooms: one photo each, capacity, one plain sentence
/gallery     相片       設施 photos only — no people, no faces
/contact     聯絡我們   address, phone, Google Maps link + embedded map, Instagram,
                       building access (which lift, which floor, which door after hours, parking)
/privacy     隱私聲明   what we publish, what we never publish, takedown contact
```

Every page shows the address and phone number in the footer. An elderly visitor should never have
to hunt for where the church is or how to call it.

Out of scope for phase 1, stated so nobody drifts: booking, weekly PDF archive, news posts,
admin panel, login, search, English, 3D tour, illustration, online giving.

## 4. Tech

React + Vite + react-router-dom. Build step produces static files. No backend, no API, no
database — nothing dynamic is being served, so there is no server to run.

Why React here: the content is static but the presentation is not trivial — shared layout, a
component-friendly room card, consistent nav and footer, and room to refine the UI without
copy-pasting markup into seven files. Maintenance of a Vite build is acceptable because the
developer owns and enjoys it, and because phase 2 would reuse this front end directly.

Deployment: a git repo on GitHub, Cloudflare Pages connected to `main`, build command
`npm run build`, output directory `dist`. A push goes live in about a minute. Free. Custom domain
optional (~US$12/year); the `*.pages.dev` subdomain is fine while testing.

Running cost for phase 1: US$0, or about US$1/month for a domain.

Backups: the repo is the site. Photos live in the repo under `public/img`, under 200 MB total. No
database means no backup plan that can silently fail.

## 5. Theme and typography — warm paper, built for older eyes

No cartoon theme. The visual language is taken from `葵涌平安福音堂網站介面合集.png` — cream paper,
tan buttons, serif titles, one brush line — and captured as tokens in `taste/kwai-chung-pec.md`
with measured pairs in `taste/kwai-chung-pec.json`. Read those before changing a colour.

The congregation skews older and reads Traditional Chinese; the design should disappear and let
the text do the work.

Colour tokens (body text ≥ 7:1, WCAG AAA; UI labels ≥ 4.5:1):

```
--paper      #f6efe7   cream ground, not pure white — less glare under fluorescent light
--panel      #fffdfa   cards, header, content wells
--sand       #f3e8de   footer band, note strips, photo placeholders
--ink        #241a14   body text and headings          14.94:1 on paper
--ink-soft   #4f4338   secondary text                  8.40:1 on paper, 7.94:1 on sand
--link       #6b4520   links                           7.38:1 on paper
--gold       #a6784d   decorative only: icons, rules, active underline
--gold-deep  #8b5a2b   button fill; white label 5.84:1
--line       #e4d8c9   1px dividers and card borders
```

The reference's tan (`#a6784d`) is 3.40:1 as text and 3.88:1 under white, so it is never used for
either — it stays decorative, and text uses the darkened gold and near-black brown instead. That
deviation, and the two others, are recorded in the taste file.

Rules:

- Base font size 19px (not 16px), line-height 1.75, measure capped near 36em.
- Serif (Noto Serif TC → Songti TC) for titles and names, sans (Noto Sans TC → PingFang TC) for
  anything longer than a line. One brush face (Kaiti TC → serif) used at exactly two places: the
  hero slogan and the footer slogan. No Google Fonts request, no CDN dependency.
- No weights below 400. No all-caps. No letter-spacing tricks. No thin display type.
- One accent family (gold), used for icons, rules and the active underline — never a second hue.
- No animation, no carousel, no auto-play, no hover-only information. Cards are flat with a 1px
  border, a 14px radius and a 5%-opacity shadow.
- Tap targets ≥ 44px. Navigation is plain large text, always visible on mobile; at 390px it takes
  its own row and balances 3 + 3. No hamburger.
- Photos get generous whitespace and a caption set in body-size text.
- `<html lang="zh-Hant">`, a skip-to-content link, and real `alt` text on every photo.
- A print stylesheet, because someone will print the address page and take it to a friend.

## 6. Photos and privacy

- Facility photos only: rooms, furniture, signage, the view. No faces, no identifiable
  individuals, no name badges, no whiteboards with names on them.
- Two photos minimum per room, shot on the same day in consistent light, with nobody in frame.
- Strip EXIF, including GPS, from every published image before committing. Phone cameras embed
  coordinates — a face-free photo can still publish exactly where the church meets and when.
- Resize to max 1600px wide, export JPEG quality 80 (~200–400 KB each). All photos together under
  8 MB.
- Instagram is linked, not embedded. The privacy page says Instagram is an external platform under
  its own terms; if a face appears there, that is the poster's decision, and this site does not
  host it.

## 7. Content required before launch

- Church name, full and short, and a one-sentence self-description
- Service and fellowship times, plus the contact names the church is willing to publish
- Statement of faith, 5–6 points, short
- History: founding year, and the story of moving into this building
- Vision, two or three sentences
- Address, phone, Instagram handle
- Building access: which lift, which floor, which door after hours, where to park
- The seven room names and their capacities (安靜室 共享空間 大堂 BB房 鏡房 多用途室 兒主房)
- 14–21 facility photos, EXIF stripped
- Who answers the phone, and a takedown contact for the privacy page

## 8. Acceptance checks

- [ ] Lighthouse mobile: performance ≥ 90, accessibility 100
- [ ] Body text renders at 19px; contrast verified with a tool, not by eye
- [ ] Usable at 200% browser zoom with no horizontal scrolling
- [ ] Keyboard-only: tab through every page, focus ring always visible
- [ ] Every image has `alt`; no stored image contains a GPS tag
- [ ] Heaviest page under 1.5 MB total
- [ ] Address and phone visible in the footer of every page
- [ ] Map link opens the correct location on iPhone and on Android
- [ ] Instagram link opens the church account, not a login wall

## 9. Delivery order

1. Repo, HTML skeleton, CSS tokens, shared header/footer, seven page shells
2. Copy: 首頁, 關於我們, 聚會時間 — real text, not placeholder
3. Photos: shoot, strip EXIF, resize, build 設施 and 相片
4. 聯絡我們 and 隱私聲明; verify the map link on a real phone
5. Cloudflare Pages, deploy, review on a phone and on an old tablet
6. Show the church, collect corrections, iterate on copy

## 10. Parked for later

Phase 2 — booking, 週報 archive, admin: fully designed in PHASE-2-BOOKING.md. Needs a server, a
database and an ongoing ops commitment. Propose only after phase 1 is live and trusted.

Phase 3 — 3D facility tour (separate repo), AI cartoon art, English locale.

## 11. Decision log

| Date | Decision | Why |
|---|---|---|
| 2026-11-08 | Java + React, one jar, full booking system | Developer's stack; the original agreed design |
| 2026-11-15 | Phase 1 is a static site, no backend | Church hesitates on booking and privacy; six pages need no server |
| 2026-11-15 | React + Vite, not plain HTML | Content is static but presentation is not; shared layout, room cards, and a UI worth refining — maintenance is accepted as the cost |
| 2026-11-15 | Cloudflare Pages over a VPS | Free, deploys on push, no patching, no backup drill |
| 2026-11-15 | No cartoon theme | Church's own preference; illustration deferred to phase 3 |
| 2026-11-15 | 19px base type, 7:1 contrast, no animation | Congregation skews older; legibility beats style |
| 2026-11-15 | Booking parked, not deleted | The design is sound; the timing and the trust are not |
