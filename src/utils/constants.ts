export const projects = [
  {
    title: "SoundCloud Track Downloader",
    description: "Chrome extension I built for myself to download SoundCloud tracks — now at 15,000+ users. One-click inline downloads, full playlist and likes support, background bulk jobs with pause/resume, and virtualized selection for thousands of tracks.",
    images: [
      "./project-images/STD1.jpeg",
      "./project-images/STD2.jpeg",
      "./project-images/STD3.jpeg",
      "./project-images/STD4.jpeg",
      "./project-images/STD5.jpeg",
      "./project-images/STD6.jpeg",
    ],
    tech: ['javascript', 'html', 'css'],
    link: 'https://chromewebstore.google.com/detail/soundcloud-track-download/ekmbbjdpakacalghjkikfppebgdpoebb'
  },
  {
    title: "Spori",
    description: "Reveals your musical DNA by surfacing top artists, tracks, and dominant genres while visualizing audio features like energy, danceability, and valence. Explore detailed insights across playlists, albums, and artists with a responsive dark-mode interface.",
    images: [
      "./project-images/spori1.png",
      "./project-images/spori2.png",
      "./project-images/spori3.png",
      "./project-images/spori4.png",
      "./project-images/spori5.png",
      "./project-images/spori6.png",
      "./project-images/spori7.png",
    ],
    tech: ['next', 'react', 'typescript', 'tailwind'],
    link: "https://github.com/vittoopugliese/SpotifyMusicDashboard"
  },
  {
    title: "GPTherapist",
    description: " I made 'by hand' a chatbot app to conclude my first AI product. Talk about your problems with GPT-based therapist trained with experienced psycologist data. June 2023, Now under maintenance.",
    image: "./project-images/image2.png",
    tech: ['react', 'javascript', 'openai'],
    link: 'https://github.com/vittoopugliese/gptherapist'
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
    title: "Product Engineer - Luno (Wollen Labs)",
    date: "Nov 2025 - Today",
    jobItems: [
      "Building CampusHub, a college marketplace, simultaneously for Android, iOS and Web from a single monorepo: Next.js 16 web app, React Native (Expo) app, and a Hono + tRPC backend.",
      "Writing shared components in packages, reused and optimized per platform with Tamagui, React 19 and TypeScript.",
      "Also developing OS, the internal back-office, in parallel with the consumer apps.",
      "Heavy AI usage across the workflow, drastically reducing time-per-feature.",
    ],
  },
  {
    title: "FrontEnd Developer - Kubrik Digital",
    date: "Sep 2022 - Nov 2025",
    jobItems: [
      "Led a React Native (Expo) app for a Canadian client, fully owning the project from June 2024 — scalable architecture, Excel reports automation, and direct client communication with excellent feedback.",
      "Migrated an internal ERP from Angular 9 to 16, cutting response times by 25%.",
      "Built reusable components alongside the UX/UI team to speed up development.",
      "Stack: React Native, Expo, TypeScript, Redux, Angular, HTML5, CSS, Git.",
    ],
  },
  {
    title: "Journey Begins...",
    date: "Aug 2020",
    jobItems: [
      "Self-taught from day one: learned HTML, CSS and JavaScript on my own instead of going straight to university.",
      "In 2024, with two years of work experience, enrolled at UTN (Universidad Tecnológica Nacional) for a Computer Science degree — graduated in 2026!",
    ],
  },
];

export const planets = [
  { texture: "/gas.png", system: "jupiter", moonName: "europa" },
  { texture: "/saturn.webp", system: "saturn", moonName: "titan" },
  { texture: "/neptune.webp", system: "neptune", moonName: "triton" },
  { texture: "/uranus.webp", system: "uranus", moonName: "umbriel" },
  // { texture: "/earth.webp", system: "earth", moonName: "moon" },
  { texture: "/mars.webp", system: "mars", moonName: "deimos" },
  // { texture: "/venus.webp", system: "venus", moonName: null },
  // { texture: "/mercury.webp", system: "mercury", moonName: null },
  { texture: "/pluto.webp", system: "pluto", moonName: "charon" },
  // { texture: "/sun.webp", system: "sun", moonName: null },
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
      hasRings: false,
      extraMoons: [
        { name: "Io", size: 0.12, orbitRadius: 6.5, orbitSpeed: 0.7, orbitDirection: 1, phase: 0, color: 0xffaa44 },
        { name: "Ganymede", size: 0.18, orbitRadius: 9.5, orbitSpeed: 0.35, orbitDirection: 1, phase: 1.5, color: 0x888899 },
        { name: "Callisto", size: 0.14, orbitRadius: 11, orbitSpeed: 0.25, orbitDirection: 1, phase: 3, color: 0x665544 },
      ],
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
      hasRings: true,
      // Proporciones reales: anillo C desde ~1.24 radios, anillo A hasta ~2.27 radios. Inclinación axial de Saturno ~26.7°
      ringConfig: { innerFactor: 1.24, outerFactor: 2.27, tiltX: 0.42, tiltZ: 0.12, opacity: 1, style: "saturn" },
      extraMoons: [
        { name: "Enceladus", size: 0.08, orbitRadius: 5.5, orbitSpeed: 0.55, orbitDirection: 1, phase: 0.5, color: 0xeeeeff },
        { name: "Rhea", size: 0.12, orbitRadius: 8.5, orbitSpeed: 0.28, orbitDirection: 1, phase: 2, color: 0xcccccc },
        { name: "Iapetus", size: 0.11, orbitRadius: 10, orbitSpeed: 0.18, orbitDirection: 1, phase: 4, color: 0x998877 },
      ],
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
      hasRings: false,
      extraMoons: [
        { name: "Proteus", size: 0.09, orbitRadius: 3.8, orbitSpeed: 0.6, orbitDirection: 1, phase: 1, color: 0x777788 },
      ],
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
      hasRings: true,
      // Urano tiene anillos finos y oscuros, casi verticales (inclinación axial ~98°)
      ringConfig: { innerFactor: 1.6, outerFactor: 2.0, tiltX: 1.4, tiltZ: 0.25, opacity: 0.55, style: "uranus" },
      extraMoons: [
        { name: "Miranda", size: 0.06, orbitRadius: 3.2, orbitSpeed: 0.5, orbitDirection: 1, phase: 0, color: 0xaaaabb },
        { name: "Ariel", size: 0.08, orbitRadius: 4.2, orbitSpeed: 0.38, orbitDirection: 1, phase: 1.2, color: 0x99aacc },
        { name: "Titania", size: 0.1, orbitRadius: 5.5, orbitSpeed: 0.25, orbitDirection: 1, phase: 2.5, color: 0x8899aa },
        { name: "Oberon", size: 0.09, orbitRadius: 6.5, orbitSpeed: 0.2, orbitDirection: 1, phase: 3.8, color: 0x778899 },
      ],
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
      hasRings: false,
      extraMoons: [],
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
      hasRings: false,
      extraMoons: [
        { name: "Phobos", size: 0.04, orbitRadius: 1.4, orbitSpeed: 0.45, orbitDirection: 1, phase: 0, color: 0xaa8866 },
      ],
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
      hasRings: false,
      extraMoons: [],
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
      hasRings: false,
      extraMoons: [],
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
      hasRings: false,
      extraMoons: [
        { name: "Nix", size: 0.006, orbitRadius: 0.35, orbitSpeed: 0.3, orbitDirection: 1, phase: 0.8, color: 0xbbbbcc },
        { name: "Hydra", size: 0.005, orbitRadius: 0.42, orbitSpeed: 0.22, orbitDirection: 1, phase: 2.2, color: 0x999aaa },
      ],
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
      hasRings: false,
      extraMoons: [],
    }
  };

  return moonData[systemName];
}

/** Dirección de la luz principal del planeta (debe coincidir con el Sol visible). */
export const PLANET_LIGHT_POSITION = { x: 5, y: 3, z: 5 } as const;

export const SPACE_EFFECTS = [
  { id: "meteors", label: "Meteors", icon: "fa-solid fa-meteor" },
  { id: "sun", label: "Sun", icon: "fa-solid fa-sun" },
  { id: "blackHole", label: "Black Hole", icon: "fa-solid fa-circle" },
  { id: "neutronStar", label: "Neutron Star", icon: "fa-solid fa-atom" },
  { id: "distantStar", label: "Star", icon: "fa-solid fa-star" },
  { id: "galaxy", label: "Galaxy", icon: "fa-solid fa-hurricane" },
] as const;

export type SpaceEffectId = (typeof SPACE_EFFECTS)[number]["id"];