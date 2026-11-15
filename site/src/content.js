// Single source of placeholder content. Replace every （待填） before launch.

const ADDRESS = '地址（待填）'

export const church = {
  name: '教會名稱（待填）',
  tagline: '一句話說明我們是誰——讓路過的鄰居看得懂（待填）',
  address: ADDRESS,
  phone: '電話（待填）',
  instagram: 'https://www.instagram.com/',
  instagramHandle: '@handle（待填）',
  mapUrl: `https://maps.google.com/?q=${encodeURIComponent(ADDRESS)}`
}

export const times = [
  { day: '星期日', name: '主日崇拜', time: '上午 10:00（待填）' },
  { day: '星期三', name: '祈禱會', time: '晚上 8:00（待填）' },
  { day: '星期五', name: '團契', time: '晚上 7:30（待填）' }
]

export const rooms = [
  { name: '大堂', capacity: '（待填）', note: '主日崇拜與大型聚會' },
  { name: '共享空間', capacity: '（待填）', note: '聚會前後的交通與休息' },
  { name: '安靜室', capacity: '（待填）', note: '個人安靜與禱告' },
  { name: '多用途室', capacity: '（待填）', note: '小組、課程與活動' },
  { name: '兒主房', capacity: '（待填）', note: '兒童主日學' },
  { name: 'BB房', capacity: '（待填）', note: '嬰幼兒與家長' },
  { name: '鏡房', capacity: '（待填）', note: '練習與排練' }
]

export const access = {
  lift: '（待填）由地下乘哪一部電梯、到幾樓',
  door: '（待填）聚會時間以外由哪一道門進入',
  parking: '（待填）附近的停車選擇'
}
