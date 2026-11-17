// English copy. Mirrors zh.js key for key: any key added here needs the same key
// there, and vice versa. `{name}` slots are filled by <Rich slots={{ name: … }} />.

export default {
  brand: {
    primary: 'Kwai Chung Peace Evangelical Centre',
    sub: "King's Tower",
    full: "Kwai Chung Peace Evangelical Centre (King's Tower)",
    nameEn: '葵涌平安福音堂'
  },

  lang: {
    switchLabel: '中文',
    switchAria: '切換至中文版',
    tag: 'zh'
  },

  nav: {
    aria: 'Main menu',
    footerAria: 'Footer menu',
    skip: 'Skip to main content',
    crumbsAria: 'Breadcrumb',
    crumbSeparator: '/',
    home: 'Home',
    items: [
      { to: '/', label: 'Home', end: true },
      { to: '/about', label: 'About us' },
      { to: '/times', label: 'Service times' },
      { to: '/facilities', label: 'Facilities' },
      { to: '/contact', label: 'Contact' }
    ]
  },

  footer: {
    fax: 'Fax',
    privacy: 'Privacy & photo notice',
    credits: 'Photo credits'
  },

  home: {
    slogan: 'May the peace of God be with you',
    tagline: 'Worship together · Build one another up · Bear witness to Christ',
    secondLine: '願平安與你同在',
    cta: 'About us',
    quickAria: 'Four quick links',
    scheduleEyebrow: 'Weekly rhythm',
    scheduleHeading: 'Service times',
    scheduleLead: 'Members and first-time visitors are all welcome — come and be together in the Lord.',
    scheduleDay: 'Sunday Worship',
    scheduleDayMeta: 'Every Sunday',
    scheduleTimeStrong: '10:30 am',
    viewAll: 'See all service times',
    firstVisitEyebrow: 'First time here',
    firstVisitHeading: 'No need to tell us in advance',
    firstVisitBody: 'Which floor we meet on, which lift to take and which door to use outside service times are all set out on the {contactLink} page. Come as you are.',
    firstVisitCta: 'Getting here',
    noteBody: 'We never publish photographs of people. Photographs of the rooms are on the {facilitiesLink} page.'
  },

  about: {
    title: 'About us',
    sub: 'Worship together · Build one another up · Bear witness to Christ',
    note: 'The photograph at the top is a design stand-in, not a picture of our building; we meet on the 31st floor of King’s Tower on King Lam Street.',
    introEyebrow: 'Who we are',
    introLead: '(To be supplied) A short introduction: what kind of church we are, how long we have served in this district, and why we moved to where we are today. Three or four sentences is enough; the rest belongs in the sections below.',
    introCta: 'Contact us',
    faithEyebrow: 'Faith',
    faithHeading: 'What we believe',
    faithLead: 'The five points below come from the church itself, kept short and clear.',
    faith: [
      '(To be supplied) First point',
      '(To be supplied) Second point',
      '(To be supplied) Third point',
      '(To be supplied) Fourth point',
      '(To be supplied) Fifth point'
    ],
    historyEyebrow: 'History',
    historyHeading: 'From the beginning to today',
    historyBody: '(To be supplied) The year the church began, where it first met, and how it came to this place. The story of the move deserves two or three paragraphs, because it is a memory many of us share.',
    visionEyebrow: 'Vision',
    visionHeading: 'The church we want to be',
    visionBody: '(To be supplied) Two or three sentences on what we hope to be in this district.'
  },

  times: {
    title: 'Service times',
    sub: 'Worship and grow together',
    eyebrow: 'Weekly rhythm',
    heading: 'Sunday, set aside for God',
    body: 'Sunday worship, Bible study and the prayer meeting are all held on the same floor. You do not need to register in advance — arrive ten minutes early and someone will welcome you at the door.',
    instagramBody: 'Arrangements for public holidays and typhoons are announced on {instagramLink}.',
    note: 'Members and first-time visitors are all welcome — come and be together in the Lord.'
  },

  facilities: {
    title: 'Facilities',
    sub: 'Seven spaces, one floor',
    eyebrow: 'Our spaces',
    heading: 'Made for worship, for company and for quiet',
    body: 'We are on a single floor of an office building. The photographs show the rooms themselves and never show people. The pictures below are illustrations; real photographs will replace them once they have been taken.',
    factsAria: 'Facilities at a glance',
    factRooms: { count: '7', label: 'spaces' },
    factFloors: { count: '1', label: 'floor' },
    factFaces: { count: '0', label: 'faces' },
    capacityUnknown: 'Capacity to be confirmed',
    capacity: 'Seats {n}',
    galleryEyebrow: 'Room photos',
    galleryHeading: 'More views of the space',
    galleryLead: 'Different angles of the hall, the shared space and the corridor, so that first-time visitors know what to expect. Photographs of services and events are never published.',
    galleryNote: 'These are illustrations of the rooms, and real photographs will replace them once they have been taken. Capture time and location data are removed before anything is published.',
    accessHeading: 'How to get up here',
    accessBody: '{lift}. Full directions are on the {contactLink} page.',
    diagramAlt: 'Illustration of a room in the church'
  },

  contact: {
    title: 'Contact us',
    sub: 'We would be glad to hear from you',
    detailsEyebrow: 'Church details',
    detailsHeading: 'Ask us before you come',
    address: 'Address',
    phone: 'Phone',
    fax: 'Fax',
    email: 'Email',
    location: 'Where we are',
    locationBody: 'We are inside an office building. Check the map first, then take the lift as described below.',
    mapCta: 'Open in Google Maps',
    accessEyebrow: 'Getting here',
    accessHeading: 'Up to the 31st floor',
    accessLift: 'Lift',
    accessDoor: 'Entrance',
    accessParking: 'Parking',
    replyEyebrow: 'When we reply',
    replyHeading: 'Who will answer you',
    replyBody: '(To be supplied) Who answers the phone, and when it is easiest to reach us. If nobody picks up during a service, send us a message on Instagram — we usually reply the same day.',
    visitEyebrow: 'First time here',
    visitHeading: 'No need to dress up',
    visitBody: 'No need to let us know in advance. Arrive ten minutes early and someone will welcome you at the door. If you have any questions, ring or message us first.'
  },

  privacy: {
    title: 'Privacy & photo notice',
    sub: 'Our commitment to one another',
    notHere: {
      eyebrow: 'Not on this site',
      heading: 'No personal information',
      items: [
        'No photographs of people — not of services, events or small groups.',
        'No names, contact details or other personal information.',
        'No member accounts, no email collection, no tracking or advertising tools.'
      ]
    },
    here: {
      eyebrow: 'On this site',
      heading: 'Only the church and its rooms',
      items: [
        'Service times, address, beliefs and history.',
        'Photographs of the rooms: furniture, signage, the view from a window, with no one in frame.'
      ]
    },
    metadata: {
      eyebrow: 'Photographs',
      heading: 'Metadata removed before publishing',
      body: 'Every photograph of the rooms has had its capture time and location data (EXIF) removed before publication. If a photograph troubles you, or shows something you would rather not have public, please email {emailLink} and we will remove it promptly.'
    },
    outside: {
      eyebrow: 'Other platforms',
      heading: 'Instagram and Google Maps',
      body: 'Instagram and Google Maps are outside platforms, each with its own terms and privacy policy. What we post there is not covered by this page; if you would rather not have a photograph of yourself on Instagram, please raise it with whoever posted it.'
    },
    credits: {
      eyebrow: 'Photo credits',
      heading: 'Photographs and design stand-ins',
      body: 'The nameplate photograph on the About page is a real photograph of our premises, with no one in frame. The photographs on the other pages are still cut from the warm-light collage made at the design stage (教會網站暖光背景拼貼.png). They are design stand-ins rather than photographs of our rooms, and will be replaced one by one as the church supplies its own. They contain no faces and no personal information.',
      footnote: 'Four stock photographs used in an earlier version (Pexels and Wikimedia Commons) are no longer in use.'
    }
  },

  notFound: {
    title: 'Page not found',
    body: 'The address may have changed. You can go back to the homepage, or go straight to our service times.',
    home: 'Back to the homepage',
    times: 'Service times',
    metaTitle: 'Page not found'
  },

  meta: {
    '/': {
      title: "Kwai Chung Peace Evangelical Centre (King's Tower)",
      description: "Kwai Chung Peace Evangelical Centre (King's Tower): service times, address, facilities and an introduction to the church."
    },
    '/about': {
      title: "About us · Kwai Chung Peace Evangelical Centre",
      description: 'Who we are, what we believe, our history and our vision.'
    },
    '/times': {
      title: 'Service times · Kwai Chung Peace Evangelical Centre',
      description: 'When and where Sunday worship, Bible study and the prayer meeting meet.'
    },
    '/facilities': {
      title: 'Facilities · Kwai Chung Peace Evangelical Centre',
      description: 'Seven spaces on one floor: hall, shared space, quiet room and more.'
    },
    '/contact': {
      title: 'Contact us · Kwai Chung Peace Evangelical Centre',
      description: 'Address, phone, email and how to find us.'
    },
    '/privacy': {
      title: 'Privacy & photo notice · Kwai Chung Peace Evangelical Centre',
      description: 'We publish no photographs of people and collect no personal information.'
    }
  }
}
