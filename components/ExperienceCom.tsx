import { FaMeta, FaMicrosoft } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaDownload } from "react-icons/fa";

const ExperienceCom = () => {
  const experiences = [
    {
      name: "Google",
      logo: <FcGoogle className="text-3xl" />,
      description: "I learned scalable frontend coding and team collaboration.",
    },
    {
      name: "Microsoft",
      logo: (
        <FaMicrosoft className="text-3xl text-blue-700 dark:text-blue-400" />
      ),
      description: "Improved problem-solving and built accessible web apps.",
    },
    {
      name: "Meta",
      logo: <FaMeta className="text-3xl text-blue-600 dark:text-blue-300" />,
      description: "Worked on real-time React features and system design.",
    },
  ];

  return (
    <div className="flex flex-col items-center my-10 gap-16 px-4">
      {/* Timeline */}
      <div className="flex flex-col items-start gap-12">
        {experiences.map((exp, index) => (
          <div key={index} className="flex items-start gap-6 relative">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border-2 border-black dark:border-white flex items-center justify-center bg-white dark:bg-black z-10">
                {exp.logo}
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
          href="https://drive.google.com/file/d/1LrU_GYQBhbKsbCBXUv96mARxDq09js6Z/view?usp=drive_link"
          target="_blank "
          download
          className="inline-flex items-center gap-2 px-5 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition"
        >
          <FaDownload /> Download CV
        </a>
      </div>
    </div>
  );
};

export default ExperienceCom;
