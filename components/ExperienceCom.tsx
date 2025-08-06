import Image from "next/image";
import { FaDownload } from "react-icons/fa";

const ExperienceCom = () => {
  const experiences = [
    {
      name: "Tech-CELL",
      Image: "/Techcell.jpg",
      description:"As a Frontend Developer trainee at Tech Cell, I gained hands-on experience in building responsive and interactive user interfaces using React.js. This internship marked my first real-world exposure to team-based development, where I collaborated remotely with other developers using GitHub for version control and task management."
    },
    {
      name: "Mindset Training",
      Image: "/Mindset.jpg",
      description:
        "As a trainee in the Frontend Development Program at Mindset, I deepened my understanding of modern front-end technologies with a strong focus on theoretical foundations and structured learning. This training emphasized conceptual clarity and best practices, helping me build a solid base in React.js, UI/UX principles, and front-end workflows.",
    },
    {
      name: "Route",
      Image: "/Route.png",
      description:`During my training at Route Academy, I completed a comprehensive Frontend Development track where I built a strong foundation in both core and modern web technologies.
I learned how to create dynamic and interactive websites using JavaScript and enhanced code quality through TypeScript.
I mastered styling techniques using SASS and CSS3, allowing for modular and maintainable UI designs.
I built Single Page Applications (SPAs) using React.js, following component-based architecture and real-world structure.
The course covered essential concepts like OOP, DOM manipulation, and responsive design principles.
I also practiced version control with Git/GitHub and worked on real-world projects that simulate actual frontend development tasks.
By the end of the training, I became confident in turning UI/UX designs into functional, responsive, and accessible web interfaces`
    },
  ];

  return (
    <div className="flex flex-col items-center my-10 gap-16 px-4">
      {/* Timeline */}
      <div className="flex flex-col items-start gap-12">
        {experiences.map((exp, index) => (
          <div key={index} className="flex items-start gap-6 relative">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border-2 border-black dark:border-white flex items-center justify-center bg-white dark:bg-black overflow-hidden z-10">
                <Image
                  src={exp.Image}
                  alt={exp.name}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              {index !== experiences.length - 1 && (
                <div className="w-1 h-24 mt-5 bg-black dark:bg-white rounded-md" />
              )}
            </div>

            <div className="flex flex-col justify-center">
              <span className="text-xl font-semibold dark:text-white">
                {exp.name}
              </span>
              <p className="text-lg leading-relaxed font-medium text-gray-800 dark:text-gray-300">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <h1 className="text-2xl font-bold dark:text-white">Download My CV</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Check out my full CV below.
        </p>
        <a
          href="https://drive.google.com/file/d/1FT8CS_OzXlLvuZ29X9NFb4LaBxFcVRcp/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition"
        >
          <FaDownload /> Download CV
        </a>
      </div>
    </div>
  );
};

export default ExperienceCom;
