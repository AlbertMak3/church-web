// Single source of placeholder content. Replace every （待填） before launch.

const ADDRESS = '九龍長沙灣瓊林街111號擎天廣場31樓'

export const church = {
  nameZh: '葵涌平安福音堂',
  nameZhFull: '葵涌平安福音堂（擎天堂）',
  nameEn: 'Kwai Chung Peace Evangelical Centre',
  slogan: '願平安與你同在',
  sloganEn: 'May the Peace of God be with you',
  tagline: '同心敬拜 · 彼此建立 · 見證基督',
  address: ADDRESS,
  phone: '+852 2487 9183',
  fax: '2427-5750',
  email: 'kwc@hkpec.org',
  instagram: 'https://www.instagram.com/',
  instagramHandle: '@handle（待填）',
  mapUrl: `https://maps.google.com/?q=${encodeURIComponent(ADDRESS)}`
}

export const times = [
  { icon: 'chapel', name: '主日崇拜', day: '逢星期日', time: '上午 10:30 – 12:00', venue: '本堂大禮堂' },
  { icon: 'book', name: '聖經學習', day: '逢星期三', time: '晚上 8:00 – 9:30', venue: '本堂副堂' },
  { icon: 'pray', name: '祈禱會', day: '逢星期五', time: '晚上 8:00 – 9:00', venue: '本堂副堂' }
]

export const rooms = [
  { name: '大堂', capacity: '（待填）', note: '主日崇拜與大型聚會', art: 'hall' },
  { name: '共享空間', capacity: '（待填）', note: '聚會前後的交通與休息', art: 'lounge' },
  { name: '安靜室', capacity: '（待填）', note: '個人安靜與禱告', art: 'quiet' },
  { name: '多用途室', capacity: '（待填）', note: '小組、課程與活動', art: 'multi' },
  { name: '兒主房', capacity: '（待填）', note: '兒童主日學', art: 'kids' },
  { name: 'BB房', capacity: '（待填）', note: '嬰幼兒與家長', art: 'baby' },
  { name: '鏡房', capacity: '（待填）', note: '練習與排練', art: 'mirror' }
]

export const gallery = [
  { variant: 'hall', label: '大堂' },
  { variant: 'hall', label: '大堂 · 講台方向' },
  { variant: 'lounge', label: '共享空間' },
  { variant: 'lounge', label: '共享空間 · 窗邊' },
  { variant: 'quiet', label: '安靜室' },
  { variant: 'multi', label: '多用途室' },
  { variant: 'kids', label: '兒主房' },
  { variant: 'baby', label: 'BB房' },
  { variant: 'mirror', label: '鏡房' },
  { variant: 'corridor', label: '走廊' },
  { variant: 'entrance', label: '入口' },
  { variant: 'window', label: '窗外' }
]

export const access = {
  lift: '（待填）由地下乘哪一部電梯、到幾樓',
  door: '（待填）聚會時間以外由哪一道門進入',
  parking: '（待填）附近的停車選擇'
}

export const quickLinks = [
  { to: '/about', icon: 'cross', title: '認識我們', sub: '教會簡介與異象' },
  { to: '/times', icon: 'calendar', title: '聚會時間', sub: '參與我們的聚會' },
  { to: '/facilities', icon: 'people', title: '設施', sub: '看看我們的空間' },
  { to: '/contact', icon: 'heart', title: '聯絡我們', sub: '歡迎與我們聯絡' }
]

// Warm-light photography cut from the church's own mood board
// (教會網站暖光背景拼貼.png, eight panels). Each panel is exported at 900 / 1400 /
// 2000 px wide so the browser picks one per viewport. These are design stand-ins and
// get replaced one by one when the church supplies its own room photographs;
// the wording that says so lives on /privacy#photo-credits.
const panel = (name, w, h) => ({
  src: `/img/${name}-1400.webp`,
  srcSet: `/img/${name}-900.webp 900w, /img/${name}-1400.webp 1400w, /img/${name}-2000.webp 2000w`,
  width: w,
  height: h
})

export const photos = {
  // 1 — lit cross on a wooden wall: home hero
  crossWall: { ...panel('cross-wall', 2000, 685), alt: '木牆上一座透著暖光的十字架，前景是散焦的綠葉' },
  // 2 — white dove on a wooden surface: about page, arch inset
  doveWood: { ...panel('dove-wood', 2000, 688), alt: '木桌上一隻白鴿擺設，背景是陽光下的教會內貌', focus: '88% 50%' },
  // 3 — church building exterior: about page hero
  exterior: { ...panel('church-exterior', 2000, 592), alt: '教會大樓外牆上的十字架與教會名稱，左邊是樹影' },
  // 4 — open bible before a wooden cross: meeting times hero
  bibleCross: { ...panel('bible-cross', 2000, 594), alt: '木桌上翻開的聖經，背後是木十字架與小盆栽' },
  // 5 — eucalyptus and leaf shadows: gallery hero, home section photo
  greeneryLight: { ...panel('greenery-light', 2000, 496), alt: '尤加利葉與牆上柔和的葉影' },
  // 6 — wooden sanctuary, rows of chairs: facilities hero
  sanctuaryWood: { ...panel('sanctuary-wood', 2000, 498), alt: '禮堂內一排排木椅，遠處是十字架' },
  // 7 — cream panel with a faint dove line drawing: decorative background
  doveLine: { ...panel('dove-line', 2000, 446), alt: '米色底上線條畫成的鴿子' },
  // 8 — baby’s breath in window light: contact hero
  whiteFlowers: { ...panel('white-flowers', 2000, 447), alt: '窗邊陽光下的白色滿天星' }
}
