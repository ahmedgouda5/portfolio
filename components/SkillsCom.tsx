import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaBootstrap,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJquery,
  SiRedux,
  SiMongodb,
  SiFigma,
  SiExpress,
  SiSass,
} from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

const skillIcons = [
  { icon: <FaHtml5 className="text-orange-600" />, name: "HTML5" },
  { icon: <FaCss3Alt className="text-blue-600" />, name: "CSS3" },
  { icon: <SiSass className="text-pink-500" />, name: "Sass" },
  { icon: <FaJsSquare className="text-yellow-400" />, name: "JavaScript" },
  { icon: <SiTypescript className="text-blue-500" />, name: "TypeScript" },
  { icon: <FaReact className="text-cyan-400" />, name: "React.js" },
  {
    icon: <SiNextdotjs className="text-black dark:text-white" />,
    name: "Next.js",
  },
  { icon: <SiTailwindcss className="text-sky-400" />, name: "Tailwind" },
  { icon: <FaGitAlt className="text-red-500" />, name: "Git" },
  { icon: <FaNodeJs className="text-green-600" />, name: "Node.js" },
  {
    icon: <SiExpress className="text-gray-800 dark:text-white" />,
    name: "Express.js",
  },
  { icon: <SiMongodb className="text-green-500" />, name: "MongoDB" },
  { icon: <SiRedux className="text-purple-500" />, name: "Redux" },
  { icon: <SiJquery className="text-blue-600" />, name: "jQuery" },
  { icon: <FaBootstrap className="text-purple-700" />, name: "Bootstrap" },
  { icon: <SiFigma className="text-pink-600" />, name: "Figma" },
  { icon: <TbBrandCpp className="text-blue-600" />, name: "C++" },
];
const SkillsCom = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap flex  gap-10 flex-wrap justify-center  py-4">
     
        {skillIcons.map((skill, i) => (
          <div
            key={i}
            className="flex justify-center flex-col"
          >
            <h2 className="text-4xl">{skill.icon}</h2>
            <h3 className="text-sm mt-1 font-medium">{skill.name}</h3>
          </div>
        ))}
    </div>
  );
};

export default SkillsCom;
