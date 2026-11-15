// Single source of placeholder content. Replace every （待填） before launch.

const ADDRESS = '地址（待填）'

export const church = {
  nameZh: '葵涌平安福音堂',
  nameZhFull: '葵涌平安福音堂（擎天堂）',
  nameEn: 'Kwai Chung PEC (King’s Tower Church)',
  slogan: '願平安與你同在',
  sloganEn: 'May the Peace of God be with you',
  tagline: '同心敬拜 · 彼此建立 · 見證基督',
  address: ADDRESS,
  phone: '電話（待填）',
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
