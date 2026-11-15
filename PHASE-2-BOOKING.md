# Phase 2 — Booking, 週報 and Admin (parked design)

Status: designed, not approved, not started
Parked: 2026-11-15, because the church hesitated on booking and privacy
Depends on: phase 1 static site being live and trusted

Nothing here should be built before the church asks for it. It is kept so the design work is not
lost and so the proposal, when it comes, is concrete rather than a wish.

---

## Why it was parked

A booking system is not just software. It creates obligations: someone must approve requests,
keep the calendar honest, answer WhatsApp, and live with the complaints when two fellowships want
the same room. The church flinched at exactly that. Publishing an introduction site has no such
cost, which is why it ships first.

## What it adds

Four things the static site cannot do:

1. Facility booking — request, approve, refuse, with a calendar that tells the truth
2. 週報 / 文章 archive — weekly PDFs, downloadable forever
3. 消息公告 — short news posts
4. An admin surface — one login, no roles

## Tech

Unchanged from the earlier design: Java 25 + Spring Boot 3, Spring Data JPA, Flyway,
Spring Security form login, OWASP Java HTML Sanitizer, Thumbnailator, PostgreSQL 16, and the
existing static front end either served by the jar or kept on Cloudflare Pages with the API on
`/api`. One VPS, Docker Compose (app, postgres, cloudflared), Cloudflare Tunnel — no open ports.

Cost: VPS US$4–6, Backblaze B2 ~US$1, domain ~US$1. Around US$8/month, US$15 ceiling.

## Data model

```sql
create table rooms (
  id            bigserial primary key,
  name          text not null,                  -- 安靜室, 共享空間, 大堂, BB房, 鏡房, 多用途室, 兒主房
  slug          text not null unique,
  capacity      int  not null,
  photo_path    text,
  special_rules text,
  sort_order    int  not null default 0,
  active        boolean not null default true
);

create table bookings (
  id             bigserial primary key,
  ref            text not null unique,           -- BK-7F3A2C
  room_id        bigint not null references rooms(id),
  requester_name text not null,
  phone          text not null,
  fellowship     text not null,
  purpose        text not null,
  headcount      int  not null,
  status         text not null default 'pending', -- pending|approved|rejected|cancelled
  admin_note     text,
  created_at     timestamptz not null default now(),
  decided_at     timestamptz
);

create table booking_slots (
  id         bigserial primary key,
  booking_id bigint not null references bookings(id) on delete cascade,
  slot_date  date not null,
  start_time time not null,
  end_time   time not null,
  check (start_time < end_time)
);
create index on booking_slots (slot_date, booking_id);

create table posts (
  id           bigserial primary key,
  slug         text not null unique,             -- ascii: 2026-11-08-bulletin
  type         text not null,                    -- bulletin|news|article
  title        text not null,
  body_html    text not null,                    -- sanitized on save
  issue_date   date,
  published_at timestamptz,
  status       text not null default 'draft',
  pdf_path     text,
  pdf_bytes    bigint,
  locale       text not null default 'zh-Hant',
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);
create index on posts (status, published_at desc);
create index on posts (type, issue_date desc);

create table albums (
  id         bigserial primary key,
  slug       text not null unique,
  title      text not null,
  event_date date,
  caption    text,
  status     text not null default 'draft',
  sort_order int not null default 0
);

create table photos (
  id         bigserial primary key,
  album_id   bigint not null references albums(id) on delete cascade,
  path       text not null,
  thumb_path text not null,
  width      int not null,
  height     int not null,
  alt        text,
  sort_order int not null default 0
);
create index on photos (album_id, sort_order);

create table admin_user (
  id            bigserial primary key,
  username      text not null unique,
  password_hash text not null,                   -- BCrypt cost 12
  updated_at    timestamptz not null default now()
);
```

## Booking rules

| Rule | Value |
|---|---|
| Opening hours | 09:00–20:00 daily |
| Closed | Sunday 00:00–12:30, all seven rooms |
| Lead time | minimum 3 calendar days (Asia/Hong_Kong) |
| Horizon | maximum 3 months ahead |
| Rooms per request | exactly one |
| Dates per request | one or more, same timeslot each |
| Public holidays | allowed, staff discretion |
| Recurring series | unsupported; staff duplicate a request |
| Approval | single admin, approve/reject, optional internal note |
| Blocked slots in UI | greyed with the reason, never hidden |

Validation on submit: room active; ≥1 date; every date within the lead time and horizon;
`start < end`; inside 09:00–20:00; no Sunday slot starting before 12:30; name, phone, fellowship
and purpose non-empty; headcount > 0.

On submit: booking (pending) + one slot row per date, human-readable `ref`, shown to the requester
with "we will contact you on WhatsApp". No email.

On approve: one transaction, re-query approved slots for that room overlapping any requested slot;
on overlap refuse and name the conflicting dates; otherwise approve. Support approving a subset of
dates — one clash must not force the requester to retype six dates.

```
shortcut: conflict check at approval, not a DB exclusion constraint; the race is moot while one
admin approves serially. Upgrade to EXCLUDE USING gist if approval ever becomes concurrent.
```

Pending requests do not block slots, so the admin queue must badge any pending request that
overlaps another pending one for the same room.

Lookup: `ref` + `phone` must both match. Rate-limit by IP.

## Admin surface

```
/admin            pending count + overlapping-pending warnings
/admin/bookings   queue, filtered by status and date range, approve/reject/cancel + note
/admin/posts      table CRUD, PDF upload, draft/published, delete-then-reupload
/admin/albums     album CRUD, multi-photo upload, drag ordering
/admin/rooms      name, capacity, special rules, photo, order, active
/admin/password   change the single admin password
```

Post body allowlist: `p br strong em u h2 h3 ul ol li blockquote a[href]`. Sanitized server-side
regardless of what the client sends. Tiptap is the editor; markdown was rejected because the
editor may be a volunteer.

Consider Cloudflare Access in front of `/admin` — free to 50 users, email OTP, no code, and it
survives a bug in the login flow. Keep Spring Security behind it.

## Ops

Nightly 03:00:

```sh
docker exec pg pg_dump -Fc church > /srv/backup/church-$(date +%F).dump
rclone copy --immutable /srv/church/uploads       b2:church-uploads/
rclone copy --immutable /srv/backup/church-*.dump b2:church-db/
# retention: 7 daily, 4 weekly
```

`restore.sh`, executed and verified once before launch:

1. `docker compose up -d pg-restore` (second postgres, empty volume)
2. fetch the newest dump from B2, `pg_restore --clean --if-exists`
3. pull uploads from B2 into a restore volume
4. start a second app container against `pg-restore`, reachable by a temporary tunnel hostname
5. confirm a PDF downloads, an album renders, an approved booking appears

Takedown rule: when a photo is removed for privacy reasons, delete it from B2 as well, or a
restore resurrects the very image the policy promised to remove.

Uptime: a free health check (Cloudflare or UptimeRobot) emailing Albert when the site stops
answering.

## Migration path from phase 1

The static pages stay as they are. Add a `pages` table only if the church wants to edit 聚會時間
without a developer; otherwise those pages keep being code edits plus a push.

## Phase 2 acceptance checks

- [ ] Sunday 10:00 request rejected, reason shown on the calendar
- [ ] 2 days out rejected; 4 days out accepted; 4 months out rejected; 3 months out accepted
- [ ] Approving an overlapping booking is refused and names the conflicting dates
- [ ] A 6-date request with 1 clash can be approved for the other 5
- [ ] Two overlapping pending requests are flagged in the queue
- [ ] Lookup returns status only for the correct ref + phone pair
- [ ] A post containing a `<script>` tag renders it stripped
- [ ] Uploaded photo bytes carry no GPS tag
- [ ] PDF downloads with its original Chinese filename
- [ ] Restore drill serves a PDF and an album from restored data
- [ ] Export of all bookings (CSV) for a room and year
