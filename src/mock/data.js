import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello,my name is ',
  name: 'Efusanya Ayomide Emmanuel.',
  subtitle: 'I am a full stack developer with hands on experience using many technologies.',
  cta: 'Know more ...',
};

// ABOUT DATA
export const aboutData = {
  img: 'index.png',
  // paragraphOne: 'I .',
  // paragraphTwo: ``,
  paragraphOne:
    'I have experience working across various tech stacks using various languages and their respective frameworks to facilitate various forms of web and mobile development.',
  resume: 'https://drive.google.com/file/d/1ARdrDNw4mmRqFU9jhtZmhv7svMKtOHkR/view?usp=sharing', // if no resume, the button will not show up
};

export const projectsData = [
  {
    id: nanoid(),
    img: 'live_gists.png',
    title: 'Live-Gists',
    info:
      'Live-Gists is an online realtime code collaboration,sharing and social media platform. It supports realtime pair coding with a role based system for editing and viewing. Share code snippets with the click of a button, like others gists, chat with other users and receive notifications on activities and messages through an always online push server, view feed and posts of other users you are following all in one platform.',
    info2:
      'NODEJS  |  EXPRESS  |  REDIS |  SOCKETIO  | REACT  | WEBPUSH| GITHUB-OAUTH | GOOGLE-OAUTH',
    url: 'https://live-gists.netlify.app',
  },
  {
    id: nanoid(),
    img: 'abbey_bank.png',
    title: 'ABBEY INTERNET BANKING',
    info: 'Online banking for Abbey mortgage bank.',
    info2: 'ASP.NET 4.6 | JAVASCRIPT | SERVICE-WORKERS  ',
  },
  {
    id: nanoid(),
    img: 'videoo.png',
    title: 'VIDEEO',
    info:
      'Video call platform much akin to google meet. Share your screen,enable or diable camera and microphone.',
    info2: 'NODEJS  |  EXPRESS  |  HEROKU  |  REACT | WEBRTC',
    url: 'https://videeo.netlify.app/',
  },
  {
    id: nanoid(),
    img: 'science_guru_dash.png',
    title: 'SCIENCE GURU DASHBOARD',
    info: `This is the dashboard for the sciece facts guru app built for a client.It allows to interface the  server to update database entries and create notifications. Features include sending big picture notifications to users through fcm, oauth login,general crud.`,
    info2: 'NODEJS |  EXPRESS  |  TYPESCRIPT | APOLLO | FIREBASE ADMIN ',
    url: 'https://science-guru.netlify.app',
  },
  {
    id: nanoid(),
    img: 'campus_x.jpeg',
    title: 'CAMPUS X',
    info:
      'This is a social media platform for students in Nigerian universities. It aims at connecting students regardless of instutution with the latest happenings and trends in other unis.',
    info2: 'NODEJS | EXPRESSS | TYPESCRIPT | SENTRY | FIREBASE | CIRCLECI | FLUTTER | GETX',
    url: 'https://play.google.com/store/apps/details?id=com.insightx.campusx1',
  },
  {
    id: nanoid(),
    img: 'manga_api.png',
    title: 'MANGA API',
    info:
      'This is a graphql based open source manga api made from a scraper I wrote and published on npm.',
    info2: 'TYPESCRIPT |APOLLO | NODE  |  EXPRESS  |  HEROKU  |   GITHUB',
    url: 'https://regedit-manga-api.herokuapp.com/graphql',
  },
  {
    id: nanoid(),
    img: 'manga_api_scraper.png',
    title: 'MANGA RAW SCRAPER',
    info:
      'A manga scraper which exposes functions to get various datasets published as an npm package.',
    info2: 'NODEJS  |  EXPRESS  | NPM  ',
    url: 'https://www.npmjs.com/package/@regedit-msc/manga_raw_scraper',
    repo: 'https://github.com/Regedit-msc/manga_raw_scraper', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'trust_mobile.jpeg',
    title: 'TRUST MOBILE',
    info: 'The official mobile banking application for Living Trust Mortgage bank.',
    info2: 'FLUTTER | ASP.NET',
    url: 'https://play.google.com/store/apps/details?id=com.mdot.livingtrust',
  },
  {
    id: nanoid(),
    img: 'unn.jpeg',
    title: 'UNNMFB MOBILE',
    info: 'The official mobile banking application for University of Nigerial Microfinance Bank.',
    info2: 'FLUTTER',
    url: 'https://play.google.com/store/apps/details?id=com.mdot.unnmobile',
  },
  {
    id: nanoid(),
    img: 'science_guru.jpeg',
    title: 'Science facts Guru',
    info:
      'Science facts guru has over 2000 local facts, receive daily facts notications, share and even download fact videos and images.',
    info2: 'TypeScript | NodeJS | FLUTTER | RIVERPOD ',
  },
  {
    id: nanoid(),
    img: 'dark.png',
    title: 'Regedit-theme-dark',
    info: 'An aesthetic black theme to keep you coding for longer hours.',
    info2: 'TypeScript | NodeJS   ',
    url: 'https://github.com/regedit-msc/regedit-theme/tree/true-dark',
    repo: 'https://github.com/Regedit-msc/regedit-theme/tree/true-dark', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'regedit-theme.png',
    title: 'Regedit-theme',
    info: 'An aesthetic purplish theme to keep you coding for longer hours.',
    info2: 'TypeScript | NodeJS   ',
    url: 'https://github.com/regedit-msc/regedit-theme',
    repo: 'https://github.com/Regedit-msc/regedit-theme', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'webcomic.jpeg',
    title: 'Webcomic',
    info:
      'Webcomic is a manga reader app. Bookmark favourites, crete collections and share links to them(Deep links), dowload and read chapters offline,push notification when comic is updated(JOB).Easily witch themes.',
    info2:
      'Express | NodeJS  | TypeScript | FLUTTER-BLOC | GRAPHQL(ALL ENDPOINTS)| FIREBASE MESSAGING | FIREBASE DYNAMIC LINKS',
  },
  {
    id: nanoid(),
    img: 'travel_tubr.jpeg',
    title: 'Patner Central',
    info:
      'Patner central is the admin interface for the traveltube collection of apps. It allows restaurants keep track of , accept and manage orders, manage their store details in the consumer app.',
    info2: 'Laravel | GETX | FIREBASE MESSAGING ',
    url: 'https://play.google.com/store/apps/details?id=com.traveltube.order_tracker',
  },
  {
    id: nanoid(),
    img: 'r_launcher.jpeg',
    title: 'R Launcher',
    info:
      'R Launcher is a standalone mobile app launcher built in flutter. It is open source and work is still in progress.',
    info2: 'FLUTTER | DART | KOTLIN',

    repo: 'https://github.com/Regedit-msc/r_launcher',
  },
  {
    id: nanoid(),
    img: 'ankora.png',
    title: 'Ankora',
    info:
      'Calendar dashboard interface for nurses to view, create and edit appointment of doctors. Interview Test',
    info2: 'REACT | STYLED-COMPONENTS | CONTEXT-API',

    repo: 'https://github.com/Regedit-msc/interview-test',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'efusanyaae@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'whatsapp',
      url: 'https://wa.link/gjpxot',
    },
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/efusanyaayomide',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/efusanya-ayomide-692008192',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Regedit-msc',
    },
    {
      id: nanoid(),
      name: 'play',
      url: 'https://regedit-msc.github.io/index',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
