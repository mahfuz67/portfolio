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
  name: 'Efusanya Ayomide',
  subtitle: 'I am a full stack mobile and web Developer.',
  cta: 'About me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am a student of the University Of Lagos.',
  paragraphTwo: `Currently studying mechanical engineering. 
    I write mostly in Javascript and php for web development (front and backend JS), Kotlin and Flutter(front and backend) for mobile.`,
  paragraphThree: 'I am interested in all kinds of technology.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.png',
    title: 'BloggerVille',
    info: 'This is a CMS for blogging with full CRUD user priviledges.',
    info2: 'NODEJS  |  EXPRESS  |  MONGODB  |  EJS  | BOOTSTRAP  |  AJAX  |  JQUERY',
    url: 'https://agile-journey-44785.herokuapp.com/',
    repo: 'https://github.com/Regedit-msc/BloggerVille', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'unilagweb.png',
    title: 'UNILAG-LANDING',
    info: 'This is a clone of the unilag website landing page.',
    info2: 'HTML  |  CSS  ',
    url: 'https://regedit-msc.github.io/unilagClone',
    repo: 'https://github.com/Regedit-msc/unilag-website-clone', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ytdl.png',
    title: 'YOUTUBE VIDEO/AUDIO DOWNLOADER',
    info: 'This is a website for downloading youtube content.',
    info2: 'NODEJS  |  EXPRESS  |  HEROKU  |  YTDL-CORE  ',
    url: 'https://frightening-alien-47733.herokuapp.com/',
    repo: 'https://github.com/Regedit-msc/youtube-dl-node', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'pizza.png',
    title: "AY's PIZZA",
    info: 'This is a website for tracking pizza orders (FULL CRUD).',
    info2: 'PHP  |  APACHE  |  HEROKU ',
    url: 'https://shrouded-gorge-22697.herokuapp.com/',
    repo: 'https://github.com/Regedit-msc/ays-pizza', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'amazon.png',
    title: 'AMAZON CLONE',
    info:
      'This is a clone of the former amazon website (FULL USER VALIDATION AND AUTHENTICATION , ECOMMERCE CARTING SYSTEM)',
    info2: 'REACT | FIREBASE ',
    url: 'https://clone-10ad0.web.app/',
    repo: 'https://github.com/Regedit-msc/amazon-clone-react', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'infinite.png',
    title: 'INFINITE-SCROLL-REACT',
    info:
      'This is an infinite image gallery which fetches data from an unsplash-js server I set up',
    info2: 'REACT | UNSPLASH-API  |  NODE  |  EXPRESS  |  HEROKU ',
    url: 'https://youthful-goldberg-e4a2d3.netlify.app/',
    repo: 'https://github.com/Regedit-msc/client-infinite-scroll', // if no repo, the button will not show up
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
