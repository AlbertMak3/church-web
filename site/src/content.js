// Structured data only: church details, service times, rooms, quick links and the
// photographs. Page prose lives in src/i18n/zh.js and src/i18n/en.js; every
// string here that appears on the page is a { zh, en } pair, read with pick()
// from src/i18n/index.jsx.

const ADDRESS = {
  zh: '九龍長沙灣瓊林街111號擎天廣場31樓',
  en: "31/F, King's Tower, 111 King Lam Street, Cheung Sha Wan, Kowloon"
}

export const church = {
  nameZh: '葵涌平安福音堂',
  nameZhFull: '葵涌平安福音堂（擎天堂）',
  nameEn: 'Kwai Chung Peace Evangelical Centre',
  nameEnSub: "King's Tower",
  phone: '+852 2487 9183',
  fax: '2427-5750',
  email: 'kwc@hkpec.org',
  instagram: 'https://www.instagram.com/',
  instagramHandle: { zh: '@handle（待填）', en: '@handle (to be confirmed)' },
  address: ADDRESS,
  // The church's own Google Maps place link (resolves to the 31/F place ID, in
  // either locale). Tracking params from the share sheet are stripped.
  mapUrl: 'https://maps.app.goo.gl/Xuz2VJFTttjzhW146'
}


export const times = [
  {
    id: 'worship',
    day: { zh: '每逢星期日', en: 'Every Sunday' },
    icon: 'chapel',
    name: { zh: 'A 堂（成人崇拜）', en: 'Service A (Adult Worship)' },
    time: { zh: '上午 09:30–11:05', en: '9:30–11:05 am' },
    note: { zh: '講道後擘餅，期間設有會眾分享時段。', en: 'The breaking of bread follows the sermon and includes time for the congregation to share.' }
  },
  {
    id: 'worship-b',
    day: { zh: '每逢星期日', en: 'Every Sunday' },
    icon: 'chapel',
    name: { zh: 'B 堂', en: 'Service B' },
    time: { zh: '上午 11:30–中午 12:30', en: '11:30 am–12:30 pm' }
  },
  {
    id: 'children',
    day: { zh: '每逢星期日', en: 'Every Sunday' },
    icon: 'book',
    name: { zh: '兒童主日學', en: 'Children’s Sunday School' },
    time: { zh: '上午 11:30–中午 12:30', en: '11:30 am–12:30 pm' }
  },
  {
    id: 'bible',
    icon: 'book',
    name: { zh: '聖經學習', en: 'Bible Study' },
    day: { zh: '逢星期三', en: 'Every Wednesday' },
    time: { zh: '晚上 8:00 – 9:30', en: '8:00 – 9:30 pm' },
    venue: { zh: '本堂副堂', en: 'Side hall' }
  },
  {
    id: 'prayer',
    icon: 'pray',
    name: { zh: '祈禱會', en: 'Prayer Meeting' },
    day: { zh: '逢星期五', en: 'Every Friday' },
    time: { zh: '晚上 8:00 – 9:00', en: '8:00 – 9:00 pm' },
    venue: { zh: '本堂副堂', en: 'Side hall' }
  }
]

// capacity stays null until the church confirms a figure for each room.
export const rooms = [
  { id: 'hall', art: 'hall', capacity: null, name: { zh: '大堂', en: 'Hall' }, note: { zh: '主日崇拜與大型聚會', en: 'Sunday worship and larger gatherings' } },
  { id: 'lounge', art: 'lounge', capacity: null, name: { zh: '共享空間', en: 'Shared space' }, note: { zh: '聚會前後的交通與休息', en: 'Conversation and rest before and after services' } },
  { id: 'quiet', art: 'quiet', capacity: null, name: { zh: '安靜室', en: 'Quiet room' }, note: { zh: '個人安靜與禱告', en: 'Personal quiet and prayer' } },
  { id: 'multi', art: 'multi', capacity: null, name: { zh: '多用途室', en: 'Multi-purpose room' }, note: { zh: '小組、課程與活動', en: 'Small groups, classes and activities' } },
  { id: 'kids', art: 'kids', capacity: null, name: { zh: '兒主房', en: 'Children’s room' }, note: { zh: '兒童主日學', en: 'Sunday school for children' } },
  { id: 'baby', art: 'baby', capacity: null, name: { zh: 'BB房', en: 'Baby room' }, note: { zh: '嬰幼兒與家長', en: 'Infants and parents' } },
  { id: 'mirror', art: 'mirror', capacity: null, name: { zh: '鏡房', en: 'Mirror room' }, note: { zh: '練習與排練', en: 'Practice and rehearsal' } }
]

export const gallery = [
  { id: 'hall-1', variant: 'hall', label: { zh: '大堂', en: 'Hall' } },
  { id: 'hall-2', variant: 'hall', label: { zh: '大堂 · 講台方向', en: 'Hall, facing the platform' } },
  { id: 'lounge-1', variant: 'lounge', label: { zh: '共享空間', en: 'Shared space' } },
  { id: 'lounge-2', variant: 'lounge', label: { zh: '共享空間 · 窗邊', en: 'Shared space, by the window' } },
  { id: 'quiet-1', variant: 'quiet', label: { zh: '安靜室', en: 'Quiet room' } },
  { id: 'multi-1', variant: 'multi', label: { zh: '多用途室', en: 'Multi-purpose room' } },
  { id: 'kids-1', variant: 'kids', label: { zh: '兒主房', en: 'Children’s room' } },
  { id: 'baby-1', variant: 'baby', label: { zh: 'BB房', en: 'Baby room' } },
  { id: 'mirror-1', variant: 'mirror', label: { zh: '鏡房', en: 'Mirror room' } },
  { id: 'corridor-1', variant: 'corridor', label: { zh: '走廊', en: 'Corridor' } },
  { id: 'entrance-1', variant: 'entrance', label: { zh: '入口', en: 'Entrance' } },
  { id: 'window-1', variant: 'window', label: { zh: '窗外', en: 'View out' } }
]

export const access = {
  lift: { zh: '（待填）由地下乘哪一部電梯、到幾樓', en: '(To be supplied) which lift from the ground floor, and which floor' },
  door: { zh: '（待填）聚會時間以外由哪一道門進入', en: '(To be supplied) which door to use outside service times' },
  parking: { zh: '（待填）附近的停車選擇', en: '(To be supplied) parking options nearby' }
}

export const quickLinks = [
  { to: '/about', icon: 'cross', title: { zh: '認識我們', en: 'About us' }, sub: { zh: '教會簡介與異象', en: 'Our story and vision' } },
  { to: '/times', icon: 'calendar', title: { zh: '聚會時間', en: 'Service times' }, sub: { zh: '參與我們的聚會', en: 'Join us this week' } },
  { to: '/facilities', icon: 'people', title: { zh: '設施', en: 'Facilities' }, sub: { zh: '看看我們的空間', en: 'See our spaces' } },
  { to: '/contact', icon: 'heart', title: { zh: '聯絡我們', en: 'Contact' }, sub: { zh: '歡迎與我們聯絡', en: 'Get in touch' } }
]

// Warm-light photography cut from the church's own mood board
// (教會網站暖光背景拼貼.png, eight panels). Each panel is exported at 900 / 1400 /
// 2000 px wide so the browser picks one per viewport. These are design stand-ins and
// get replaced one by one when the church supplies its own room photographs;
// the wording that says so lives on /privacy#photo-credits.
const panel = (name, w, h) => ({
  // BASE_URL keeps image URLs valid when the build is served from a sub-path
  // (GitHub Pages project site: /church-web/img/...). It always ends in "/".
  src: `${import.meta.env.BASE_URL}img/${name}-1400.webp`,
  srcSet: `${import.meta.env.BASE_URL}img/${name}-900.webp 900w, ${import.meta.env.BASE_URL}img/${name}-1400.webp 1400w, ${import.meta.env.BASE_URL}img/${name}-2000.webp 2000w`,
  width: w,
  height: h,
  source: 'moodboard',
  subject: 'church-space'
})

// Real photographs of the premises, prepared by site/scripts/prepare-church-photos.py
// from the originals in picture resource/. Same three widths, EXIF stripped.
const photo = (name, w, h) => ({ ...panel(name, w, h), source: 'church', subject: 'premises' })

export const photos = {
  // 1 — lit cross on a wooden wall: home hero
  crossWall: {
    ...panel('cross-wall', 2000, 685),
    alt: {
      zh: '木牆上一座透著暖光的十字架，前景是散焦的綠葉',
      en: 'A cross glowing in warm light on a wooden wall, with out-of-focus leaves in the foreground'
    }
  },
  // 2 — white dove on a wooden surface: about page, arch inset
  doveWood: {
    ...panel('dove-wood', 2000, 688),
    alt: {
      zh: '木桌上一隻白鴿擺設，背景是陽光下的教會內貌',
      en: 'A white dove ornament on a wooden table, with the sunlit church interior behind it'
    },
    focus: '88% 50%'
  },
  // 3 — church building exterior: about page hero
  exterior: {
    ...panel('church-exterior', 2000, 592),
    alt: {
      zh: '教會大樓外牆上的十字架與教會名稱，左邊是樹影',
      en: 'The cross and church name on the outside of the building, with tree shadows to the left'
    }
  },
  // 4 — open bible before a wooden cross: meeting times hero
  bibleCross: {
    ...panel('bible-cross', 2000, 594),
    alt: {
      zh: '木桌上翻開的聖經，背後是木十字架與小盆栽',
      en: 'An open Bible on a wooden table, with a wooden cross and a small plant behind it'
    }
  },
  // 5 — eucalyptus and leaf shadows: gallery hero, home section photo
  greeneryLight: {
    ...panel('greenery-light', 2000, 496),
    alt: {
      zh: '尤加利葉與牆上柔和的葉影',
      en: 'Eucalyptus leaves and their soft shadows on the wall'
    }
  },
  // 6 — wooden sanctuary, rows of chairs: facilities hero
  sanctuaryWood: {
    ...panel('sanctuary-wood', 2000, 498),
    alt: {
      zh: '禮堂內一排排木椅，遠處是十字架',
      en: 'Rows of wooden chairs in the hall, with the cross in the distance'
    }
  },
  // 7 — cream panel with a faint dove line drawing: decorative background
  doveLine: {
    ...panel('dove-line', 2000, 446),
    alt: {
      zh: '米色底上線條畫成的鴿子',
      en: 'A dove drawn in line on a cream background'
    }
  },
  // 8 — baby’s breath in window light: contact hero
  whiteFlowers: {
    ...panel('white-flowers', 2000, 447),
    alt: {
      zh: '窗邊陽光下的白色滿天星',
      en: 'White baby’s breath in the light of a window'
    }
  },
  // 9 — real photograph: the church nameplate on the lobby wall, no people in frame
  nameplate: {
    ...photo('nameplate', 2000, 1126),
    alt: {
      zh: '擎天堂大堂牆上白底立體字教會名牌，寫著「葵涌平安福音堂（擎天堂）」及「KWAI CHUNG PEC (KING’S TOWER CHURCH)」',
      en: 'The church nameplate in white raised lettering on the lobby wall: 葵涌平安福音堂（擎天堂） and KWAI CHUNG PEC (KING’S TOWER CHURCH)'
    },
    focus: '50% 56%'
  }
}
