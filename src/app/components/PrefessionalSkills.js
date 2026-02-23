import { Code } from "lucide-react";

/* N8n brand logo as inline SVG — no external package needed */
const N8nIcon = () => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
  >
    <rect width="40" height="40" rx="8" fill="#EA4B71" />
    <path
      d="M10 20C10 14.477 14.477 10 20 10s10 4.477 10 10-4.477 10-10 10S10 25.523 10 20Z"
      fill="white"
      opacity="0.15"
    />
    <text
      x="50%"
      y="55%"
      dominantBaseline="middle"
      textAnchor="middle"
      fontSize="13"
      fontWeight="800"
      fontFamily="Arial,sans-serif"
      fill="white"
    >
      n8n
    </text>
  </svg>
);
import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaJava,
  FaGitAlt,
  FaFigma,
  FaShopify,
  FaWordpress,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiTypescript,
  SiExpress,
  SiAppwrite,
} from "react-icons/si";

const PrefessionalSkills = () => {
  const skills = [
    {
      category: "Frontend",
      items: [
        { icon: <FaReact />, name: "React.js" },
        { icon: <SiNextdotjs />, name: "Next.js" },
        { icon: <FaHtml5 />, name: "HTML5" },
        { icon: <FaCss3Alt />, name: "CSS3" },
        { icon: <SiTailwindcss />, name: "TailwindCSS" },
      ],
    },
    {
      category: "Backend",
      items: [
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <SiExpress />, name: "Express.js" },
        { icon: <SiMongodb />, name: "MongoDB" },
        { icon: <SiMysql />, name: "MySQL" },
        { icon: <SiAppwrite />, name: "AppWrite" },
        { icon: <SiFirebase />, name: "Firebase" },
      ],
    },
    {
      category: "Languages",
      items: [
        { icon: <FaJs />, name: "JavaScript" },
        { icon: <SiTypescript />, name: "TypeScript" },
        { icon: <FaPython />, name: "Python" },
        { icon: <FaJava />, name: "Java" },
      ],
    },
    {
      category: "Tools",
      items: [
        { icon: <FaGitAlt />, name: "Git" },
        { icon: <FaFigma />, name: "Figma" },
        { icon: <FaWordpress />, name: "WordPress" },
        { icon: <FaShopify />, name: "Shopify" },
      ],
    },
    {
      category: "AI & Automation",
      items: [{ icon: <N8nIcon />, name: "N8n" }],
    },
  ];

  return (
    <section className="container mx-auto relative mb-5 z-10">
      <h2 className="text-2xl font-bold text-white mb-3">Cool Skills I have</h2>
      <div className="grid grid-cols-1 gap-2">
        {skills.map((skillGroup, index) => (
          <div
            key={index}
            className="bg-black backdrop-blur-sm sticky top-5 rounded-md p-4 border border-gray-700/50 shadow-xl hover:shadow-purple-500/5 transition-all duration-300 group"
          >
            <div className="flex items-center mb-2">
              <h3 className="text-base font-semibold text-white">
                {skillGroup.category}
              </h3>
            </div>
            <div className="grid  grid-cols-5 gap-6">
              {skillGroup.items.map((skill, skillIndex) => (
                <div key={skillIndex} className="flex flex-col items-center">
                  <div className="text-2xl text-purple-400">{skill.icon}</div>
                  <span className="text-gray-300 mt-2 text-[10px] md:text-sm">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PrefessionalSkills;
