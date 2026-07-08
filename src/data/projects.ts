export interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  image: string;
  alt: string;
  buttonText: string;
  siteUrl?: string;
  siteButtonText?: string;
}

export const PROJECTS: Project[] = [

   //  {
   //  id: 'prayer-chat',
   //  title: 'Prayer-Chat',
   //  description: 'Christian AI chatbots with biblical wisdom. Transform your ministry or business website into an intelligent assistant rooted in Christian values.',
   //  url: 'https://www.prayer-chat.com/',
   //  image: '/images/prayer-chat.png',
   //  alt: 'A serene Christian AI chatbot interface with biblical elements',
   //  buttonText: 'Visit Prayer-Chat'
   // },
      {
      id: 'change-my-image',
      title: 'Change-My Image Converter',
      description: 'A modern, ad-free image converter supporting formats like JPG, PNG, WEBP, HEIC, and more. Fast, secure, and privacy-friendly — built for individuals and creators who value simplicity.',
      url: 'https://www.change-my.com/',
      image: '/images/projects/change-my.webp',
      alt: 'Change-My Image Converter interface',
      buttonText: 'Visit Change-My.com'
    },
   {
     id: 'skills-hub',
     title: 'Recommended Stack',
     description: 'This project is about exploring and recommending different technology stacks for web development. It\'s a tool I\'m developing to help developers find the right tools for their projects.',
     url: 'https://raimon.pythonanywhere.com/',
     image: '/images/projects/skills-hub.webp',
     alt: 'A serene setup with a developer exploring technology stacks',
     buttonText: 'Visit SkillsHub'
  },
  {
     id: 'tanach',
     title: 'Tanach Explorer',
     description: 'An interactive tool for exploring the Hebrew Bible (Tanach). Dive into the sacred texts of the Torah, Nevi\'im, and Ketuvim with an intuitive interface designed for study and reflection.',
     url: 'https://tanach.vercel.app/',
     image: '/images/projects/tanach.webp',
     alt: 'An open Jewish bible with a Star of David and Hebrew text',
     buttonText: 'Explore Tanach'
   },
  {
    id: 'physics-calculator',
    title: 'Speed Calculation',
    description: 'I recently worked on a project called Speed Calculation, designed to make calculating speed, acceleration, and time as simple as possible. With flexible units and a clear interface, it saves time by automatically performing conversions.',
    url: 'https://www.physics-calculator.raimonvibe.com/',
    image: '/images/projects/physics-calc.webp',
    alt: 'A minimal workspace with a computer showing a blank screen',
    buttonText: 'Visit Velocity Calculator'
  },
  {
    id: 'physics-flashcards',
    title: 'Physics Formulas Flashcards',
    description: 'In this project, Physics Formulas Cheat Sheet, I\'ve created a handy reference guide full of essential physics formulas useful for students, engineers, and anyone interested in physics.',
    url: 'https://www.physics-flashcards.raimonvibe.com/',
    image: '/images/projects/flashcards.webp',
    alt: 'A workspace featuring physics-themed diagrams',
    buttonText: 'Visit Physics Flashcards'
  },
  {
    id: 'retro-monitor',
    title: 'Retro Typewriter Monitor',
    description: 'This unique setup combines the nostalgic feel of a vintage typewriter with the modern functionality of a quiz-based application, creating an engaging and interactive experience.',
    url: 'https://retro-monitor.raimonvibe.com/',
    image: '/images/projects/retro-monitor.webp',
    alt: 'A vintage-inspired workspace with a retro typewriter',
    buttonText: 'Visit Retro Monitor'
  },
{
  id: 'animal-guesses',
  title: 'Animal Guesses',
  description:
    'Free educational animal quiz for kids and families. 21 animals, photos and sounds, true/false questions — no ads, no in-app purchases.',
  url: 'https://play.google.com/store/apps/details?id=com.raimonvibe.animalguesses2',
  image: '/images/projects/animal-guesses.webp',
  alt: 'Animal Guesses app on Google Play',
  buttonText: 'Get it on Play Store',
  siteUrl: '/apps/animal-guesses',
  siteButtonText: 'App info & privacy',
},
{
  id: 'music-guesses',
  title: 'Music Guesses',
  description:
    'Free educational music quiz for Android. Listen to instrument sounds, look at pictures, and answer true/false questions — no ads, no in-app purchases.',
  url: 'https://play.google.com/store/apps/details?id=com.raimonvibe.musicguesses',
  image: '/images/projects/music-guesses.webp',
  alt: 'Music Guesses app on Google Play',
  buttonText: 'Get it on Play Store',
  siteUrl: '/apps/music-guesses',
  siteButtonText: 'App info & privacy',
},
  {
    id: 'emf-simulator',
    title: 'Motional EMF Simulator',
    description: 'Explore the principles of electromagnetic induction with this interactive simulator. Adjust variables like displacement, magnetic field, length, and time to see how they affect the induced voltage.',
    url: 'https://www.emf-simulator.raimonvibe.com/',
    image: '/images/projects/emf-simulator.webp',
    alt: 'A visualization of a physics simulator',
    buttonText: 'Visit EMF-Simulator'
  },
  {
    id: 'tetris',
    title: 'Tetris 2.0',
    description: 'This isn\'t just a game about blocks — it\'s about timing, space, and the quiet rhythm of decisions. For those who find peace in patterns, movement in stillness, and clarity in form.',
    url: 'https://tetris2.0.raimonvibe.com/',
    image: '/images/projects/tetris.webp',
    alt: 'A minimalist visualization of a Tetris game interface',
    buttonText: 'Visit Tetris 2.0'
  },
  {
    id: 'periodic-table',
    title: 'The Periodic Table',
    description: 'Not just rows and columns — it\'s a silent map of everything. Every element has a story: iron in our blood, carbon in our breath, gold in our dreams.',
    url: 'https://periodic-table.raimonvibe.com/',
    image: '/images/projects/periodic-table.webp',
    alt: 'An interactive periodic table',
    buttonText: 'Visit The Periodic Table'
  },
  {
    id: 'unsmoke',
    title: 'Unsmoke',
    description: 'A supportive quit-smoking and vaping tracker that helps you take back control of your health. Log your quit date, track your progress, and stay motivated on your journey to a smoke-free life — all stored privately in your browser.',
    url: 'https://unsmoke-five.vercel.app/',
    image: '/images/projects/unsmoke.webp',
    alt: 'Unsmoke app interface with a green sprout logo and quit smoking tracker',
    buttonText: 'Visit Unsmoke'
  },
  {
    id: 'rootwork',
    title: 'Rootwork',
    description: 'A compassionate resource platform helping people build confidence and success in the world of work. Rootwork explores how early experiences shape our professional lives and offers practical guidance for moving forward.',
    url: 'https://rootwork-teal.vercel.app/',
    image: '/images/projects/rootwork.webp',
    alt: 'Rootwork hero section with the tagline You\'ve come a long way. Now let\'s move forward.',
    buttonText: 'Visit Rootwork'
  },
  {
    id: 'google-login-edu',
    title: 'Google Login EDU',
    description: 'An authentication system tailored for educational platforms, offering secure, streamlined access through Google accounts.',
    url: 'https://google-login-edu.raimonvibe.com/',
    image: '/images/projects/google-login-edu.webp',
    alt: 'A Google Login EDU interface',
    buttonText: 'Visit Google Login EDU'
  }
];
