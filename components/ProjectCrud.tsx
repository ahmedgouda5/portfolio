import Image from "next/image";

const ProjectsSection = () => {
  const projects = [
    {
      name: "Ecommerce",
      image: "/projects/ecommerce.jpg",
      liveDemo: "https://ahmedgouda5.github.io/Ecommerce/",
      title: "Modern E-commerce platform built with Next.js and Tailwind CSS",
    },
    {
      name: "ChatGPT Clone",
      image: "/projects/chatgpt-clone.jpg",
      liveDemo: "https://chatgpt-clone-demo.vercel.app",
      title: "AI-powered chatbot interface using React and OpenAI API",
    },
    {
      name: "Weather App",
      image: "/projects/weather-app.jpg",
      liveDemo: "https://weather-leigh.vercel.app",
      title: "Weather forecast app with animated UI using Tailwind",
    },
    {
      name: "Admin Dashboard",
      image: "/projects/admin-dashboard.jpg",
      liveDemo: "https://admin-dashboard-leigh.vercel.app",
      title: "Dashboard to manage users and reports",
    },
    {
      name: "Portfolio Website",
      image: "/projects/portfolio.jpg",
      liveDemo: "https://leigh-portfolio.vercel.app",
      title: "Personal portfolio to showcase skills and work",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <div
          key={index}
          className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg 
            dark:bg-black dark:border-gray-700 transition-colors"
        >
          <Image
            src={ "/shoes.jpg"}
            width={400}
            height={300}
            alt={project.name}
            className="rounded-t-lg w-full h-auto object-cover"
          />
          <div className="p-5">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {project.name}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {project.title}
            </p>
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-white 
                bg-gray-700 rounded-lg hover:bg-gray-400
                focus:ring-4 focus:outline-none focus:ring-blue-300 
                 dark:hover:bg-gray-400 dark:focus:ring-blue-800"
            >
              Live Demo
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsSection;
