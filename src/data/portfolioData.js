export const profile = {
  name: 'Sagar Gaydhane',
  firstName: 'Sagar',
  lastName: 'Gaydhane',
  roles: [
    'Android Developer',
    'Mobile Application Developer',
    'Application Developer',
    'AI Integration Engineer',
  ],
  location: 'Nagpur, Maharashtra, India',
  email: 'your.email@gmail.com',
  phone: '+91 XXXXXXXXXX',
  linkedin: 'http://www.linkedin.com/in/sagar-gaydhane',
  github: 'https://github.com/yourusername',
  summary:
    "Android Developer with 3+ years of professional experience building production-grade Android and cross-platform mobile applications. Proficient in Kotlin, MVVM + Clean Architecture, Jetpack components, and reactive programming with Coroutines & Flow. Hands-on experience with AI feature integrations, real-time systems (WebSockets, Firebase), payment gateways, wearable APIs (Apple Watch & Android Watch), and cross-platform development (React Native). Strong team collaborator with a product-first mindset.",
  stats: [
    { value: 3, label: 'Years exp.' },
    { value: 5, label: 'Apps shipped' },
    { value: 20, label: 'Tech skills' },
    { value: 3, label: 'Platforms' },
  ],
}

export const aboutParagraphs = [
  {
    text: 'Android developer with <strong>3+ years of production experience</strong> at Cluematrix Technology. I specialise in crafting mobile experiences that go beyond the screen — integrating AI, connecting to wearables, and building real-time systems that just work.',
  },
  {
    text: "My approach: clean architecture first, features second. Every project I ship uses <strong>MVVM + Clean Architecture</strong> with Hilt DI, so it's built to scale and easy to hand off.",
  },
  {
    text: "Outside native Android I've shipped cross-platform apps in <strong>React Native</strong> for iOS & Android, integrated Apple Watch & Android Watch APIs for live health telemetry, and built AI-powered modules that feel genuinely useful.",
  },
]

export const techPills = [
  'Kotlin',
  'MVVM',
  'Hilt DI',
  'Coroutines',
  'Flow',
  'Firebase',
  'WebSockets',
  'React Native',
  'AI Integration',
]

export const skills = [
  {
    icon: '⚡',
    name: 'Core Android',
    items: 'Kotlin (Advanced) · Java · MVVM · Clean Architecture · Repository Pattern · Jetpack Suite',
  },
  {
    icon: '🔄',
    name: 'Async & Reactive',
    items: 'Coroutines · Flow · StateFlow · LiveData · Sealed Classes · Extension Functions',
  },
  {
    icon: '🤖',
    name: 'AI Integration',
    items: 'AI Interview Module · AI Resume Builder · AI Menu Recommendation · Conversational AI',
  },
  {
    icon: '🔴',
    name: 'Firebase Ecosystem',
    items: 'Auth · Firestore · FCM · Crashlytics · Analytics · Realtime DB',
  },
  {
    icon: '⚡',
    name: 'Real-Time Systems',
    items: 'WebSockets · Socket.IO · Firebase Realtime DB · Live Chat',
  },
  {
    icon: '📱',
    name: 'Cross-Platform',
    items: 'React Native (iOS & Android, Production) · Apple Watch API · Android Watch API · Health Telemetry',
  },
  {
    icon: '🗄️',
    name: 'Data & Networking',
    items: 'Room DB · SQLite · Retrofit · REST APIs · JSON · JWT · Payment Gateway Integration',
  },
  {
    icon: '🛠️',
    name: 'DevOps & Tools',
    items: 'Git · GitHub · Gradle · CI/CD Pipelines · Firebase App Distribution · Proguard/R8',
  },
  {
    icon: '🎨',
    name: 'UI & Performance',
    items: 'Material Design · RecyclerView + DiffUtil · ViewPager · Glide · Coil · Memory Leak Fixing · ANR Debugging',
  },
]

export const projects = [
  {
    icon: '🎓',
    badge: 'AI · ANDROID',
    name: 'SkillPilots',
    sub: 'Placement & Training Portal',
    period: '07/2024 – Present',
    desc: 'AI-driven career platform with an AI Interview module (real-time question generation, evaluation & instant feedback), AI Resume Builder, Live Chat via WebSockets, Firebase Realtime DB, FCM, and payment gateway integration — built on MVVM + Clean Architecture with Hilt DI.',
    tags: ['Kotlin', 'MVVM', 'AI Integration', 'WebSockets', 'Firebase', 'Payment Gateway'],
  },
  {
    icon: '🍱',
    badge: 'REACT NATIVE · AI',
    name: 'Saojiwala',
    sub: 'Food Delivery — Customer, Vendor & Delivery Apps',
    period: '09/2025',
    desc: '3 cross-platform apps with real-time map tracking, Socket.IO live order updates, secure payment gateway, cart/offers/coupons/reorder modules, and an AI Assistant that recommends Saoji cuisine based on season, weather, and occasion with gesture-based, human-like conversation.',
    tags: ['React Native', 'Socket.IO', 'Maps API', 'AI Assistant', 'Payment Gateway'],
  },
  {
    icon: '⌚',
    badge: 'REACT NATIVE · WEARABLE',
    name: 'TURÓ',
    sub: 'Fitness & Health Tracking',
    period: '09/2025',
    desc: 'Cross-platform fitness app with Apple Watch & Android Watch integration for live health telemetry — steps, calories, heart rate, and activity synced in real time. Includes workout session tracking, meal plans, and progress dashboards for iOS and Android.',
    tags: ['React Native', 'Apple Watch API', 'Android Watch API', 'Health Telemetry'],
  },
  {
    icon: '💍',
    badge: 'ANDROID',
    name: 'WadhuWar',
    sub: 'Matrimony App',
    period: '2024 – Present',
    desc: 'Matrimony platform with intelligent profile matching, advanced filters (caste, age, location, education), photo uploads, ViewPager UI, and an optimised RecyclerView with DiffUtil for smooth performance.',
    tags: ['Java', 'XML', 'Firebase', 'RecyclerView', 'MVVM'],
  },
  {
    icon: '🖱️',
    badge: 'ANDROID · UTILITY',
    name: 'Mt Auto Clicker',
    sub: 'Automation Utility',
    period: '12/2024 – 05/2025',
    desc: 'Auto clicker with Foreground Service, draggable system overlay, and customisable tap settings. Secure accessibility service integration with MVVM + LiveData/ViewModel and a clean, responsive XML UI.',
    tags: ['Kotlin', 'Foreground Service', 'System Overlay', 'MVVM'],
  },
]

export const experience = [
  {
    period: '07/2023 — Present',
    role: 'Android Developer',
    company: 'Cluematrix Technology Pvt. Ltd. · Nagpur, India',
    bullets: [
      'Designed and integrated UI/UX features using Material Design, improving overall interface quality and experience',
      'Built and shipped 5 production apps — Android native and React Native cross-platform',
      'Integrated AI features: AI Interview module, AI Resume Builder, and intelligent recommendation systems',
      'Developed real-time features using WebSockets, Socket.IO, and Firebase Realtime DB',
      'Applied MVVM + Clean Architecture with Hilt DI, Coroutines & Flow across all production projects',
      'Integrated third-party APIs, payment gateways, and wearable APIs to enhance app functionality',
      'Participated in Agile/Scrum: sprint planning, daily stand-ups, and iterative feature delivery',
    ],
  },
  {
    period: '11/2023 — Present',
    role: 'B.E. in Computer Engineering',
    company: 'Rashtrasant Tukadoji Maharaj Nagpur University · Nagpur',
    bullets: [],
  },
  {
    period: '08/2019 — 07/2022',
    role: 'Diploma in Computer Technology',
    company: 'Government Polytechnic Bramhapuri · First-Class Distinction',
    bullets: [],
  },
]

export const softSkills = [
  'Requirement analysis & feature planning',
  'Agile/Scrum methodology',
  'Cross-functional team collaboration',
  'Legacy codebase improvement',
  'UX & product thinking',
]

export const languages = [
  'Marathi (Native)',
  'Hindi (Fluent)',
  'English (Professional Working Proficiency)',
]
