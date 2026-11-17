// Traditional Chinese copy. Every visible string on the site lives here or in
// en.js, keyed identically: change both files together. `{name}` in a string is
// a slot filled by <Rich slots={{ name: … }} />, used where a link or a <strong>
// sits inside a sentence.

export default {
  brand: {
    primary: '葵涌平安福音堂',
    sub: '（擎天堂）',
    full: '葵涌平安福音堂（擎天堂）',
    nameEn: 'Kwai Chung Peace Evangelical Centre'
  },

  lang: {
    switchLabel: 'EN',
    switchAria: 'Switch to English',
    tag: 'en'
  },

  nav: {
    aria: '主選單',
    footerAria: '頁尾選單',
    skip: '跳到主要內容',
    crumbsAria: '麵包屑',
    crumbSeparator: '／',
    home: '主頁',
    items: [
      { to: '/', label: '主頁', end: true },
      { to: '/about', label: '關於我們' },
      { to: '/times', label: '聚會時間' },
      { to: '/facilities', label: '設施' },
      { to: '/contact', label: '聯絡我們' }
    ]
  },

  footer: {
    fax: '傳真',
    privacy: '隱私與相片聲明',
    credits: '相片來源'
  },

  home: {
    slogan: '願平安與你同在',
    tagline: '同心敬拜 · 彼此建立 · 見證基督',
    secondLine: 'May the Peace of God be with you',
    cta: '認識我們',
    quickAria: '四個入口',
    scheduleEyebrow: '每週聚會',
    scheduleHeading: '聚會時間',
    scheduleLead: '歡迎所有弟兄姊妹及新朋友參加，一同在主裡相聚。',
    scheduleDay: '主日崇拜',
    scheduleDayMeta: '逢星期日',
    scheduleTimeStrong: '上午 10:30',
    viewAll: '查看全部聚會',
    firstVisitEyebrow: '第一次來',
    firstVisitHeading: '不需要事先通知',
    firstVisitBody: '聚會在哪一層、搭哪一部電梯、聚會時間外要按哪一道門，都寫在{contactLink}那一頁。服裝隨意，歡迎你。',
    firstVisitCta: '查看交通指示',
    noteBody: '我們不會在網站刊登任何人的相片。空間的相片可以在{facilitiesLink}頁看到。'
  },

  about: {
    title: '關於我們',
    sub: '同心敬拜 · 彼此建立 · 見證基督',
    note: '頁首照片為設計階段的示意圖，不是教會大樓的實際外貌；聚會在瓊林街擎天廣場 31 樓。',
    introEyebrow: '教會簡介',
    introLead: '（待填）一段簡介：我們是怎樣的教會、在這區服侍了多久、為甚麼搬到今天這個地方。三至四句就夠，其餘留給下面的段落。',
    introCta: '聯絡我們',
    faithEyebrow: '信仰',
    faithHeading: '我們所相信的',
    faithLead: '以下五點由教會提供，以簡短、清楚為先。',
    faith: [
      '（待填）第一點',
      '（待填）第二點',
      '（待填）第三點',
      '（待填）第四點',
      '（待填）第五點'
    ],
    historyEyebrow: '歷史',
    historyHeading: '從起初到今天',
    historyBody: '（待填）教會在哪一年開始，起初在哪裡聚會，後來怎樣搬到今天這個地方。搬遷的故事值得寫兩三段，因為這是很多弟兄姊妹共同的記憶。',
    visionEyebrow: '願景',
    visionHeading: '我們想成為的教會',
    visionBody: '（待填）兩至三句，說明我們希望在這區成為怎樣的教會。'
  },

  times: {
    title: '聚會時間',
    sub: '一同敬拜 · 一起成長',
    eyebrow: '每週節奏',
    heading: '星期日，預留給神',
    body: '主日崇拜、聖經學習與祈禱會，都在同一層舉行。新朋友不需要事先登記，聚會前十分鐘到，會有人在門口接待。',
    instagramBody: '公眾假期或颱風期間的安排，會在{instagramLink}公布。',
    note: '歡迎所有弟兄姊妹及新朋友參加，一同在主裡相聚。'
  },

  facilities: {
    title: '設施',
    sub: '同一層，七個空間',
    eyebrow: '我們的空間',
    heading: '為聚會、相交與安靜而設',
    body: '我們在商業大廈的同一層。相片只拍攝空間本身，不會拍到人。以下為空間示意圖，實際照片會在拍攝後取代。',
    factsAria: '設施概要',
    factRooms: { count: '7', label: '個空間' },
    factFloors: { count: '1', label: '個樓層' },
    factFaces: { count: '0', label: '張人臉' },
    capacityUnknown: '容額待確認',
    capacity: '可容納 {n} 人',
    galleryEyebrow: '空間相片',
    galleryHeading: '更多空間角度',
    galleryLead: '大堂、共享空間與走廊的不同角度，讓第一次來的朋友先看看環境。聚會與活動的相片不會在網站刊登。',
    galleryNote: '以上為空間示意圖，實際相片拍攝後會取代；刊登前會移除拍攝時間與位置資料。',
    accessHeading: '怎樣上來',
    accessBody: '{lift}。詳細指示在{contactLink}頁。',
    diagramAlt: '教會空間示意圖'
  },

  contact: {
    title: '聯絡我們',
    sub: '歡迎與我們聯絡',
    detailsEyebrow: '教會資料',
    detailsHeading: '來之前，可以先問我們',
    address: '地址',
    phone: '電話',
    fax: '傳真',
    email: '電郵',
    location: '位置',
    locationBody: '我們在商業大廈內，先看地圖確認位置，再依下面指示乘電梯。',
    mapCta: '在地圖上查看',
    accessEyebrow: '怎樣上來',
    accessHeading: '到達這一層',
    accessLift: '電梯',
    accessDoor: '入口',
    accessParking: '泊車',
    replyEyebrow: '聯絡安排',
    replyHeading: '誰會回覆你',
    replyBody: '（待填）說明由誰接聽電話、甚麼時間方便聯絡。若在聚會時間致電沒人接，可以發訊息到 Instagram，我們通常當天回覆。',
    visitEyebrow: '第一次來',
    visitHeading: '不需要穿得特別正式',
    visitBody: '不需要事先通知。聚會前十分鐘到，會有人在門口接待。如有任何疑問，歡迎先致電或發訊息給我們。'
  },

  privacy: {
    title: '隱私與相片聲明',
    sub: '我們對弟兄姊妹的承諾',
    notHere: {
      eyebrow: '網站上不會有甚麼',
      heading: '不刊登個人資料',
      items: [
        '不會刊登任何人的相片，包括聚會、活動與小組的合照。',
        '不會刊登姓名、聯絡方法或任何個人資料。',
        '不設會員帳號、不收集電郵、不使用追蹤或廣告工具。'
      ]
    },
    here: {
      eyebrow: '網站上會有甚麼',
      heading: '只有教會與空間的資料',
      items: [
        '教會的聚會時間、地址、信仰與歷史。',
        '空間的照片：房間、家具、標示、窗外景色，畫面中沒有人。'
      ]
    },
    metadata: {
      eyebrow: '相片',
      heading: '刊登前移除中繼資料',
      body: '所有空間相片在刊登前都已移除拍攝時間與位置等中繼資料（EXIF）。若你發現任何相片令你不安，或拍到你不希望公開的內容，請電郵 {emailLink}，我們會盡快移除。'
    },
    outside: {
      eyebrow: '外面的平台',
      heading: 'Instagram 與 Google 地圖',
      body: 'Instagram 與 Google 地圖是外面的平台，各有自己的條款與私隱政策。我們在那裡張貼的內容不受本頁約束；若你不希望自己的相片出現在 Instagram，請直接向張貼者反映。'
    },
    credits: {
      eyebrow: '相片來源',
      heading: '實拍與示意相片',
      body: '「關於我們」頁的教會名牌牆照片，是教會空間的實拍，畫面中沒有人。其餘頁面的照片，暫時仍由設計階段製作的暖光拼貼（教會網站暖光背景拼貼.png）裁切而成，屬示意素材，不是教會空間的實拍，會在教會提供自己的空間照片後逐張取代。這些照片沒有人臉，亦不包含任何個人資料。',
      footnote: '較早版本使用的四張網上素材相片（Pexels 與 Wikimedia Commons）已不再使用。'
    }
  },

  notFound: {
    title: '找不到這一頁',
    body: '網址可能已經改變。你可以回到主頁，或直接查看聚會時間。',
    home: '回到主頁',
    times: '聚會時間',
    metaTitle: '找不到這一頁'
  },

  meta: {
    '/': {
      title: '葵涌平安福音堂（擎天堂）',
      description: '葵涌平安福音堂（擎天堂）—聚會時間、地址、設施與教會簡介。'
    },
    '/about': {
      title: '關於我們 · 葵涌平安福音堂（擎天堂）',
      description: '教會簡介、信仰、歷史與願景。'
    },
    '/times': {
      title: '聚會時間 · 葵涌平安福音堂（擎天堂）',
      description: '主日崇拜、聖經學習與祈禱會的時間與地點。'
    },
    '/facilities': {
      title: '設施 · 葵涌平安福音堂（擎天堂）',
      description: '大堂、共享空間、安靜室等七個空間。'
    },
    '/contact': {
      title: '聯絡我們 · 葵涌平安福音堂（擎天堂）',
      description: '地址、電話、電郵與交通指示。'
    },
    '/privacy': {
      title: '隱私與相片聲明 · 葵涌平安福音堂（擎天堂）',
      description: '我們不刊登任何人的相片，也不收集個人資料。'
    }
  }
}
