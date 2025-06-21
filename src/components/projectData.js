const projectData = [
  
  {
    id: 1,
    name: "Geospatial Aero2Astro",
    poster:
      "https://res.cloudinary.com/dz3yaj24a/image/upload/v1750181218/Screenshot_2025-06-17_120104_jg3el0.png",
    points: [
      `Designed and built a full-stack GIS Processing Member Registration system at Aero2Astro, enabling authenticated
users to register and manage GIS data through a multi-step form with validation and progress tracking.`,
      `Implemented secure login/signup with phone and email OTP verification, JWT-based authentication, and
role-based access using Node.js and MongoDB on the backend.`,
      `Developed a responsive and user-friendly frontend using Next.js, featuring dynamic routing, conditional rendering,
and seamless navigation across admin and user dashboard and profile pages. `,
    ],
    technologies: ["NextJs", "ExpressJS", "NodeJS", "TailwindCSS", "MongoDB"],
    github: "https://github.com/a2a-research/geospatial",
    live: "https://geospatial.aero2astro.com/",
  },
  {
    id: 2,
    name: "PriceWise (Amazon Price-tracker Web App)",
    poster:
      "https://res.cloudinary.com/dz3yaj24a/image/upload/v1750181250/Screenshot_2025-06-17_115954_xradh5.png",
    points: [
      `Developed a smart price tracking app that fetches and displays product data (title, image, price history) using Amazon product links.`,
      `Built backend logic to extract and display current, lowest, highest, and average prices from product pages.`,
      `Integrated email notifications to alert users about price drops and stock availability.`,
      `Designed a responsive UI with Tailwind CSS and integrated MongoDB for flexible, schema-less data 
      storage.`,
    ],
    technologies: ["NextJs", "ExpressJS", "TailwindCSS", "MongoDB"],
    github: "https://github.com/rajnish032/price_tracker",
    live: "https://price-tracker-gilt-five.vercel.app/",
  },
  {
    id: 3,
    name: "FeedX(360 degree Feedback Platform) ",
    poster:
      "https://res.cloudinary.com/dz3yaj24a/image/upload/v1750418973/Screenshot_2025-06-20_165907_miesnv.png",
    points: [
      `Built a MERN stack HR platform with real-time 360° feedback and performance analytic.`,
      `Implemented 360-degree feedback, goal tracking, and performance analytics with a focus on realtime continuous
feedback`,
      `Won the GoFloww’s Atom HR P.S. by delivering a secure, scalable, and user-friendly solution.`,
    ],
    technologies: [
      "ReactJs",
      "ExpressJS",
      "NodeJS",
      "TailwindCSS",
      "Cron Job",
      "Gemini Ai analytics"
    ],
    github: "https://github.com/HarryOhm33/feedx",
    live: "https://feedxmarkii.netlify.app",
  },
  {
    id: 4,
    name: "Wonderlust(Hotel-booking Web App) ",
    poster:
      "https://res.cloudinary.com/dz3yaj24a/image/upload/v1750418839/Screenshot_2025-06-20_165628_yowvcm.png",
    points: [
      `Developed Wanderlust, a full-stack hotel booking web application allowing users to explore, list, and book stays with an intuitive interface and seamless user experience.`,
      `Implemented core features like property listings, search and filter functionality, booking system, and user authentication.`,
      `Focused on performance, responsiveness, and usability while integrating modern web development practices and clean UI/UX.`,
      
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Node.js","Express.js","MongoDB","EJS"],
    github:
      "https://github.com/rajnish032/Wonderlust",
    live: "https://wonderlust-yl83.onrender.com/listings",
  },
  {
    id: 4,
    name: "Zeoradha frontend Clone",
    poster:
      "https://res.cloudinary.com/dz3yaj24a/image/upload/v1750420401/Screenshot_2025-06-20_171331_ymrwbp.png",
    points: [
      `Developed a full-fledged Zerodha clone using React.js, replicating the UI and core components like landing page, pricing section, and navigation for a seamless user experience.`,
      `Implemented responsive design using Tailwind CSS to ensure the application works smoothly across mobile, tablet, and desktop screens.`,
      `Created reusable and modular components (e.g., navbar, footer, pricing cards, CTA sections) to maintain clean code structure and scalability.`,
      `Utilized React Router for multi-page navigation and managed state effectively to simulate real-world brokerage platform behavior.`,
    ],
    technologies: ["ReactJs", "Redux", "TailwindCSS"],
    github:
      "https://github.com/rajnish032/Zerodha",
    live: "https://frontendzerodha.netlify.app/",
  },
  {
    id: 4,
    name: "Weather App",
    poster:
      "https://res.cloudinary.com/dz3yaj24a/image/upload/v1750420420/Screenshot_2025-06-20_171220_lfg0q6.png",
    points: [
      `Built a real-time Weather Web App using React.js and Tailwind CSS that displays current temperature, humidity, minimum and maximum temperature based on user’s city input.`,
      `Integrated OpenWeatherMap API to fetch and display accurate weather data dynamically, ensuring responsiveness and real-world functionality.`,
      `Designed a clean, modern UI with Tailwind CSS including search input, weather icons, and animated transitions for a polished user experience.`,
      `Handled API errors, loading states, and user input validation to improve app reliability and usability across different devices.`,
    ],
    technologies: ["ReactJs","TailwindCSS"],
    github:
      "https://github.com/rajnish032/Wheather-App",
    live: "https://wheatherrajnish.netlify.app/",
  },
  
];
export default projectData;
