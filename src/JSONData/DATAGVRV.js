import {
  Briefcase,
  FileCode,
  Github,
  Home,
  Linkedin,
  Mail,
} from "lucide-react";
export const experiences = [
  {
    company: "Google Developer Group On Campus",
    role: "Development Lead",
    period: "2024 - 2025",
    logo: "/googlelogo.webp",
    details:
      "Organized a national-level GDG hackathon with 250+ participants, built a registration system with payment and QR verification, and led the development team to a Tier 1 position in Google Cloud Study Jam. Developed an event platform with blogs, dashboards, bulk emailing, and custom templates, ensuring timely, high-quality delivery with cross-functional teams.",
    technologies: ["Leadership", "Development Lead", "Hackathon Organizer"],
  },
  {
    company: "EboNow",
    role: "Full Stack Developer",
    period: "2023 - 2023",
    logo: "/EboNow.webp",
    details:
      "Contributed to a Party Decor Application using the MERN stack, improving functionality, responsiveness, and scalability, while collaborating with design and product teams to implement features and resolve bugs.",
    technologies: ["MERN Stack"],
  },
];
export const ProfessionalSKills = [
  {
    Name: "MERN Stack",
    level: "90%",
    Exp: "2024 - 2025",
    logo: "/PSkills/MERN.png",
    details:
      "Built full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Implemented authentication, REST APIs, and database management. Developed scalable platforms with dashboards, blogs, and event management features.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
  {
    Name: "Next.js",
    level: "93%",
    Exp: "2023 - 2023",
    logo: "/PSkills/Next.png",
    details:
      "Developed server-side rendered and static websites with Next.js. Optimized SEO, improved performance using dynamic routing, API routes, and middleware. Integrated TailwindCSS and Appwrite/Firebase for backend support.",
    technologies: ["Next.js", "React", "TailwindCSS", "Appwrite", "Firebase"],
  },
  {
    Name: "React Native",
    level: "50%",
    Exp: "2023 - 2023",
    logo: "/PSkills/ReactNative.png",
    details:
      "Created cross-platform mobile applications for Android and iOS using React Native. Worked on UI components, navigation, and API integration. Ensured responsiveness and performance optimization.",
    technologies: ["React Native", "Expo", "JavaScript", "REST APIs"],
  },
  {
    Name: "Git and GitHub",
    level: "88%",
    Exp: "2023 - 2023",
    logo: "/PSkills/GitGithub.png",
    details:
      "Experienced with version control using Git and collaboration on GitHub. Managed branching, pull requests, and code reviews. Automated workflows with GitHub Actions and maintained open-source contributions.",
    technologies: ["Git", "GitHub", "GitHub Actions", "CI/CD"],
  },
  {
    Name: "AI Automation (N8n)",
    level: "78%",
    Exp: "2024 - 2025",
    logo: "/PSkills/N8n.png",
    details:
      "Built intelligent automation workflows using N8n to connect APIs, databases, and AI services. Designed no-code/low-code pipelines for lead generation, email automation, webhook handling, and AI-powered data processing using OpenAI integrations.",
    technologies: [
      "N8n",
      "OpenAI API",
      "Webhooks",
      "REST APIs",
      "Workflow Automation",
    ],
  },
];

export const Education = [
  {
    Institute: "Government College Of Engineering, Nagpur",
    branch: "Computer Science & Engineering",
    period: "2023 - 2026",
    logo: "/GCOEN.jpg",
  },
  {
    Institute: "Government Polytechnic, Arvi",
    branch: "Computer Engineering",
    period: "2020 - 2023",
    logo: "/GPA.jpg",
  },
];

export const socialLinks = [
  {
    href: "https://www.linkedin.com/in/gaurav-n-503716204",
    icon: <Linkedin size={20} />,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/gvrv03",
    icon: <Github size={20} />,
    label: "GitHub",
  },
  {
    href: "mailto:gxurav.work@gmail.com",
    icon: <Mail size={20} />,
    label: "Email",
  },
];
export const projects = [
  {
    title: "Event Ease",
    description:
      "EventEase – A smart event planning platform to find managers, vendors, explore past events, and use AI to instantly generate event ideas.",
    technologies: ["Next.js", "AppWrite"],
    category: "Fullstack",
    repo: "https://github.com/gvrv03/EventEase",
    liveUrl: "https://eventeasenew.vercel.app/",
    image: "/Projects/FoundUs.png",
  },
  {
    title: "The Hustler union",
    description:
      "the exclusive affiliate program designed for creators with large audiences. Earn industry-leading 70% commission on every sale.",
    technologies: ["Next.js", "AppWrite"],
    category: "Fullstack",
    repo: "https://github.com/gvrv03/The-Hustler-Union",
    liveUrl: "https://thehustlerunion.vercel.app/",
    image: "/Projects/FoundUs.png",
  },
  {
    title: "Lost & Found Portal",
    description:
      "A platform for students to report lost and found items, with a dashboard for admins to manage listings.",
    technologies: ["Next.js", "AppWrite"],
    category: "Fullstack",
    repo: "https://github.com/gvrv03/Found-Us",
    liveUrl: "https://foundus.vercel.app/",
    image: "/Projects/FoundUs.png",
  },
  {
    title: "GDGC Event Platform",
    description:
      "A platform to list GDG events, publish blogs, and send bulk emails with custom templates for outreach.",
    technologies: ["Next.js", "Node.js", "MongoDB"],
    category: "Fullstack",
    repo: "",
    liveUrl: "http://gdgc.gcoen.club/",
    image: "/Projects/GDGPlatform.png",
  },
  {
    title: "DSY College Finder",
    description:
      "An application for diploma students to find engineering colleges based on their eligibility criteria.",
    technologies: ["React.js", "Node.js", "MongoDB"],
    category: "Fullstack",
    repo: "https://github.com/gvrv03/DSYConsultancy",
    liveUrl: "https://dsyconsultancy.netlify.app/",
    image: "/Projects/DSYConsultancy.png",
  },

  {
    title: "Digital Product Store",
    description:
      "An application where admins can sell digital products, with payments handled via Razorpay API.",
    technologies: ["React.js", "Node.js", "MongoDB", "Razorpay API"],
    category: "Fullstack",
    repo: "https://github.com/gvrv03/Wealth-Summit",
    liveUrl: "https://wealth-summit.vercel.app/",
    image: "/Projects/WealthSummit.png",
  },
  {
    title: "Campus Plant Lens",
    description:
      "An application for plant management within a campus, featuring QR codes for plant identification.",
    technologies: ["React.js", "Node.js", "MongoDB"],
    category: "Fullstack",
    repo: "https://github.com/gvrv03/CampusPlantLens",
    liveUrl: "https://campusplantlens.netlify.app/",
    image: "/Projects/CampusPlantLense.png",
  },
  {
    title: "AppforgeX Website",
    description:
      "A modern landing page designed for a startup, built with performance and UI optimization in mind.",
    technologies: ["Next.js", "Tailwind CSS"],
    category: "Client",
    repo: "",
    liveUrl: "http://appforgex.live/",
    image: "/Projects/appforgex.png",
  },
  {
    title: "English Jr. College",
    description:
      "A website for an educational institution to manage events, updates, and student information.",
    technologies: ["WordPress"],
    category: "Client",
    repo: "",
    liveUrl: "https://theenglishjuniorcollege.org.in/",
    image: "/Projects/ENCNer.png",
  },

  {
    title: "Savali NGO Website",
    description:
      "A platform for an NGO to manage data, share events, and provide updates about their initiatives.",
    technologies: ["Next.js", "Tailwind CSS"],
    category: "Client",
    repo: "",
    liveUrl: "https://savalibahuddyeshiysansthanew.vercel.app/",
    image: "/Projects/Savali.png",
  },

  {
    title: "Portfolio Website",
    description:
      "A portfolio website for a developer to showcase their projects and skills.",
    technologies: ["Next.js", "Tailwind CSS"],
    category: "Landing Page",
    repo: "https://github.com/gvrv03/Gaurav-Professional-Portfolio",
    liveUrl: "https://gvrvnew.vercel.app",
    image: "/Projects/PortfolioLandingPage.png",
  },
  {
    title: "Personal Blog App",
    description:
      "A blogging platform where only the admin can create and publish content, while users can save posts.",
    technologies: ["React.js", "Node.js", "MongoDB", "Rich Text Editor"],
    category: "Fullstack",
    repo: "",
    liveUrl: "",
    image: "/Projects/BlogApp.png",
  },
  {
    title: "Evently",
    description:
      "Evently – A smart event planning platform to vendors, explore past events",
    technologies: ["React.js", "Node.js", "MongoDB", "Rich Text Editor"],
    category: "Fullstack",
    repo: "https://github.com/gvrv03/Evently",
    liveUrl: "https://eventlynew.vercel.app",
    image: "/Projects/BlogApp.png",
  },
  {
    title: "BrenzoMedia",
    description: "A Content Marketing Agency landing page",
    technologies: ["Next JS", "Tailwind CSS"],
    category: "Landing Page",
    repo: "",
    liveUrl: "https://brenzo-media.vercel.app/",
    image: "/Projects/BlogApp.png",
  },
];
