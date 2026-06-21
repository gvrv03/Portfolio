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
    company: "Bhrraman",
    role: "Full Stack Developer",
    period: "Apr 2026 - Jun 2026",
    logo: "/bhrraman.jpg",
    details:
      "Maintained and enhanced the Bhrraman travel website, improving performance, responsiveness, and user experience using Next.js and modern web technologies. Led the technical development of the Bhrraman Transfers web application, managing scalable architecture and feature implementation for global transfer booking services. Integrated APIs, optimized workflows, and implemented real-time functionalities to streamline booking and customer management processes.",
    technologies: ["Next.js", "Node.js", "Express.js", "Redis", "Google API"],
  },
  {
    company: "Brenzo Ai",
    role: "Full Stack Developer",
    period: "Mar 2026 - May 2026",
    logo: "/BrenzoAi.png",
    details:
      "Developed and managed AI-powered WhatsApp automation workflows using n8n for lead handling, follow-ups, and customer engagement. Built and optimized chatbot automations for industries like travel, healthcare, and real estate to improve response time and lead conversion. Integrated AI chatbots with WhatsApp and CRM workflows to automate inquiries, appointment booking, and customer communication.",
    technologies: ["n8n", "AI Chatbot", "WhatsApp API", "CRM", "Workflow Automation"],
  },
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
    title: "Bhrraman Transfers",
    description:
      "Scalable web application providing global transfer services, enabling users to book transportation across multiple locations worldwide. Integrates Google Maps API for location search, route optimization, and real-time directions.",
    technologies: ["React.js", "Next.js", "Node.js", "Express.js", "Redis", "Google API"],
    category: "Fullstack",
    repo: "",
    liveUrl: "https://transfers.bhrraman.in/",
    image: "/Projects/FoundUs.png",
  },
  {
    title: "Bhrraman Website (Travel Agency)",
    description:
      "Scalable travel agency website featuring AI-powered itinerary generation along with automated content creation for pages, blogs, and destination listings. Designed for high performance using server-side rendering (SSR) and optimized caching.",
    technologies: ["React.js", "Next.js", "SSR", "Redis"],
    category: "Fullstack",
    repo: "",
    liveUrl: "https://bhrraman.com/",
    image: "/Projects/FoundUs.png",
  },
  {
    title: "Real Estate AI Chatbot",
    description:
      "An AI-powered chatbot enabling users to discover properties based on requirements and book appointments automatically. Integrated Gemini API for natural language understanding and n8n for workflow automation, reducing manual inquiry handling by 70%.",
    technologies: ["Next.js", "Tailwind CSS", "MongoDB", "n8n", "Gemini API"],
    category: "Fullstack",
    repo: "",
    liveUrl: "",
    image: "/Projects/FoundUs.png",
  },
  {
    title: "BrenzoAI",
    description:
      "An AI-powered automation agency platform that helps travel, healthcare, and real-estate businesses automate lead generation, qualification, and follow-ups. Features AI WhatsApp & website chatbots, lead qualification, and follow-up automation to deliver instant responses and higher conversions.",
    technologies: ["Next.js", "Tailwind CSS"],
    category: "Landing Page",
    repo: "",
    liveUrl: "https://brenzoai.in/",
    image: "/Projects/FoundUs.png",
  },
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
    title: "BrenzoMedia",
    description: "A Content Marketing Agency landing page",
    technologies: ["Next JS", "Tailwind CSS"],
    category: "Landing Page",
    repo: "",
    liveUrl: "https://brenzo-media.vercel.app/",
    image: "/Projects/BlogApp.png",
  },
];
