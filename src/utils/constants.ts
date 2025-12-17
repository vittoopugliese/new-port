export const projects = [
  {
    title: "Spori",
    description: "Reveals your musical DNA by surfacing top artists, tracks, and dominant genres while visualizing audio features like energy, danceability, and valence. Explore detailed insights across playlists, albums, and artists with a responsive dark-mode interface.",
    image: "./project-images/image1.png",
    tech: ['next', 'react', 'typescript', 'tailwind'],
    link: ''
  },
  {
    title: "GPTherapist",
    description: "Made in 2023, now this project is under maintenance. Talk about your problems with an GPT-based therapist trained with experienced psycologist data. App interactions costs credits.",
    image: "./project-images/image2.png",
    tech: ['react', 'javascript', 'openai'],
    link: 'https://vittoopugliese.github.io/gptherapist/'
  },
];

export const moreProjects = [
  {
    title: "NFTorio",
    description: "Digital market. Watch, listen and buy my personal list of images and music NFT's. Integrated Crypto payments. Includes a built-in music player made with vanilla JS.",
    tech: ["html", "css", "javascript"],
    link: 'https://vittoopugliese.github.io/NFTorio/',
    aos: 'fade-right'
  },
  {
    title: "drumPads",
    description:
      "Assign a letter and a sound to a pad, then play the drums like an expert!",
    link: "https://vittoopugliese.github.io/drumpads/",
    tech: ["html", "css", "javascript"],
    aos: 'fade-left'
  },
  {
    title: "TopCloud",
    description:
      "Music page where you can create an account and upload your own music. Made with Angular 9 and Firebase, and integrated a music player made with in Angular.",
    link: "https://topcloud-9b8d4.web.app/",
    tech: ["angular", "typescript", "firebase"],
    aos: 'fade-right'
  },
  {
    title: "Breaking Bad Quotes",
    description: "Simple page to get quotes from Breaking Bad's characters.",
    link: "https://vittoopugliese.github.io/breakingBadQuotes-/",
    tech: ["react", "breakingbad"],
    aos: 'fade-right'
  },
  {
    title: "Previous Portfolio",
    description: "My own old portfolio page made with vanilla JS.",
    link: "https://vittoopugliese.github.io/portfolio/",
    tech: ["html", "css", "javascript"],
    aos: 'fade-left'
  },
];

export const techslogos = [
  {name: "HTML", desc: "Hypertext markup language, it gives structure to the page. This works with 'Tags'."},
  {name: "CSS", desc: "Responsible for giving Style to the page. This works whit classes."},
  {name: "JavaScript", desc: "Programming language that allows you to put logic onto web pages."},
  {name: "TypeScript", desc: "Superset of JavaScript that adds static typing to the language."},
  {name: "Angular", desc: "Front-end framework by Google. Used for building dynamic and scalable apps."},
  {name: "RxJS", desc: "Reactive programming library. It allows working with asynchronous data streams."},
  {name: "React", desc: "JavaScript library by Meta that's used for building user interfaces."},
  {name: "Next", desc: "Full Stack React framework for building server-side rendered and static websites."},
  {name: "Expo", desc: "Framework for React Native that allows you to build mobile apps."},
  {name: "Tailwind", desc: "CSS framework that works with classes."},
  {name: "NodeJS", desc: "A JS runtime environment that allows JS to be run on the server-side."},
  {name: "Firebase", desc: "Application development software. Databases, user registration & more."},
  {name: "Git", desc: "Source code management tool. It's used to control the versions of the page."},
];

export const socials = [
  { name: "LinkedIn", color: "#466cf4", link: "https://www.linkedin.com/in/vittoopugliese/", },
  { name: "GitHub", color: "#d5d5d5", link: "https://github.com/vittoopugliese" },
  { name: "Twitter", color: "#549ef9", link: "https://twitter.com/vittoopugliese", },
  { name: "SoundCloud", color: "#f09c34", link: "https://soundcloud.com/tttorio", },
];

export const experience = [
  {
    title: "Product Engineer - Wollen Labs",
    date: "Nov 2025 - Today",
    jobItems: [
      "Developing a web and mobile application using Next.js 16 and React 19 with Tamagui and TypeScript to create a college marketplace where students can buy and sell their products.",
    ],
  },
  {
    title: "FrontEnd Developer - Kubrik Digital",
    date: "Sep 2022 - Nov 2025",
    jobItems: [
      "Led the complete development of a React Native mobile application for a Canadian client, taking full responsibility for the project from June 2024.",
      "Designed and implemented a scalable architecture that enables product growth, including Excel reports automation.",
      "Successfully completed a comprehensive migration from Angular 9 to Angular 16 for an internal ERP project, implementing performance optimizations that resulted in a 25% reduction in application response times.",
      "Developed reusable components to reduce development time and collaborated closely with the UX/UI team to ensure intuitive interfaces aligned with design standards.",
      "Maintained direct communication with clients, receiving excellent feedback.",
      "Technologies used: React Native, Expo, TypeScript, Redux, Angular, HTML5, CSS, Git"
    ],
  },
  {
    title: "Journey Begins...",
    date: "Aug 2020",
    jobItems: [
      "By beeing interested in programming, I started to do some research and learned that programming is hard. So I learned the basics about HTML, CSS and JavaScript. I was not interested on starting a University degree, so I started to learn by my own.",
      "Eventually, and already with nearly two years of work experience, joined in 2024 to University UTN (Universidad Tecnológica Nacional) to get a degree in Computer Science... which I graduated in 2026!",
    ],
  },
];

export const planets = [
  { texture: "/gas.png", system: "jupiter", moonName: "europa" },
  { texture: "/saturn.webp", system: "saturn", moonName: "titan" },
  { texture: "/neptune.webp", system: "neptune", moonName: "triton" },
  { texture: "/uranus.webp", system: "uranus", moonName: "umbriel" },
  { texture: "/earth.webp", system: "earth", moonName: "moon" },
  { texture: "/mars.webp", system: "mars", moonName: "deimos" },
  { texture: "/venus.webp", system: "venus", moonName: null },
  { texture: "/mercury.webp", system: "mercury", moonName: null },
  { texture: "/pluto.webp", system: "pluto", moonName: "charon" },
  { texture: "/sun.webp", system: "sun", moonName: null },
];

export function getPlanetData(systemName) {
  const moonData = {
    jupiter: {
      texturePath: "/jupiter.webp",
      geometrySize: 2.5,        // Jupiter es el planeta más grande (diámetro ~142,984 km)
      moonTexturePath: "/europa.webp",
      moonGeometrySize: 0.15,   // Europa es una de las lunas más pequeñas de Júpiter
      orbitRadius: 8,           // Órbita más grande por ser el planeta más grande
      orbitSpeed: 0.5,
      orbitDirection: 1,
      initialPosition: [8, 0, 0],
      hasRings: false
    },
    saturn: {
      texturePath: "/saturn.webp",
      geometrySize: 2.2,        // Saturno es el segundo más grande (diámetro ~120,536 km)
      moonTexturePath: "/titan.webp",
      moonGeometrySize: 0.25,   // Titán es la luna más grande de Saturno
      orbitRadius: 7,
      orbitSpeed: 0.3,
      orbitDirection: 1,
      initialPosition: [7, 0, 0],
      hasRings: true            // Saturno es famoso por sus anillos
    },
    neptune: {
      texturePath: "/neptune.webp",
      geometrySize: 1.7,        // Neptuno (diámetro ~49,244 km)
      moonTexturePath: "/triton.webp",
      moonGeometrySize: 0.15,    // Tritón es grande comparado con Neptuno
      orbitRadius: 5,
      orbitSpeed: 0.4,
      orbitDirection: -1,       // Tritón orbita en dirección retrógrada
      initialPosition: [5, 0, 0],
      hasRings: false
    },
    uranus: {
      texturePath: "/uranus.webp",
      geometrySize: 1.8,        // Urano (diámetro ~50,724 km)
      moonTexturePath: "/umbriel.webp",
      moonGeometrySize: 0.1,   // Umbriel es una de las lunas medianas
      orbitRadius: 4,
      orbitSpeed: 0.35,
      orbitDirection: 1,
      initialPosition: [4, 0, 0],
      hasRings: true            // Urano tiene anillos, aunque son menos visibles que los de Saturno
    },
    earth: {
      texturePath: "/earth.webp",
      geometrySize: 1.5,        // Tierra (diámetro ~12,742 km)
      moonTexturePath: "/moon.webp",
      moonGeometrySize: 0.1,   // Luna es 1/4 del tamaño de la Tierra
      orbitRadius: 1.5,
      orbitSpeed: 0.2,
      orbitDirection: 1,
      initialPosition: [2, 2, 0],
      hasRings: false
    },
    mars: {
      texturePath: "/mars.webp",
      geometrySize: 0.8,        // Marte (diámetro ~6,779 km)
      moonTexturePath: "/deimos.webp",
      moonGeometrySize: 0.05,  // Deimos es muy pequeño
      orbitRadius: 2,
      orbitSpeed: 0.25,
      orbitDirection: 1,        // Deimos orbita en la misma dirección que Marte rota
      initialPosition: [1, 2, 0],
      hasRings: false
    },
    venus: {
      texturePath: "/venus.webp",
      geometrySize: 1.5,        // Venus (diámetro ~12,104 km)
      moonTexturePath: null,
      moonGeometrySize: 0,      // Venus no tiene lunas
      orbitRadius: 0,
      orbitSpeed: 0,
      orbitDirection: 1,
      initialPosition: [10, 0, 0],
      hasRings: false
    },
    mercury: {
      texturePath: "/mercury.webp",
      geometrySize: 1.4,        // Mercurio (diámetro ~4,880 km)
      moonTexturePath: null,
      moonGeometrySize: 0,      // Mercurio no tiene lunas
      orbitRadius: 0,
      orbitSpeed: 0,
      orbitDirection: 1,
      initialPosition: [0, 0, 0],
      hasRings: false
    },
    pluto: {
      texturePath: "/pluto.webp",
      geometrySize: 1.2,        // Plutón (diámetro ~2,377 km)
      moonTexturePath: "/charon.webp",
      moonGeometrySize: 0.009,  // Caronte es casi la mitad del tamaño de Plutón
      orbitRadius: 0.5,         // Órbita muy cercana
      orbitSpeed: 0.15,
      orbitDirection: 1,
      initialPosition: [0.5, 0, 0],
      hasRings: false
    },
    sun: {
      texturePath: "/sun.webp",
      geometrySize: 10.0,       // Sol (diámetro ~1,391,000 km)
      moonTexturePath: null,
      moonGeometrySize: 0,      // El Sol no tiene lunas (los planetas orbitan alrededor de él)
      orbitRadius: 0,
      orbitSpeed: 0,
      orbitDirection: 1,
      initialPosition: [0, 0, 0],
      hasRings: false
    }
  };

  return moonData[systemName];
}