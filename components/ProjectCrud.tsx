import Image from "next/image";
import Link from "next/link";

const ProjectsSection = () => {
 const projects = [
  {
    name: "Ecommerce",
    image: "/Ecommerce.png",
    liveDemo: "https://ecommerce-psi-beige.vercel.app/#/login",
    code: "https://github.com/ahmedgouda5/Ecommerce",
    title: "Modern E-commerce platform built with React.js and Tailwind CSS",
  },
  {
    name: "CartZilla",
    image: "/furniture.png",
    liveDemo: "https://cartzilla-topaz.vercel.app/",
    code: "https://github.com/ahmedgouda5/cartzilla",
    title: "A modern website built using Next.js, designed to showcase a variety of furniture products in an elegant and responsive layout."
  },
  {
    name: "FoodOrderingApp",
    image: "/Foodorderingapp.png",
    liveDemo: "https://food-ordering-app-three-roan.vercel.app/",
    code: "https://github.com/ahmedgouda5/food-ordering-app", // مثال
    title: "Pizza ordering application with cart system and real-time updates",
  },
  {
    name: "Unique",
    image: "/nique.png",
    liveDemo: "https://round-4-upperclass-restaurant-front.vercel.app/",
    code: "https://github.com/ahmedgouda5/round-4-upperclass-restaurant-front", // مثال
    title: "Restaurant reservation system with table booking and menu preview",
  },
  {
    name: "Mealify",
    image: "/Mealify.png",
    liveDemo: "https://ahmedgouda5.github.io/Mealify/",
    code: "https://github.com/ahmedgouda5/Mealify", // مثال
    title: "Responsive restaurant website built with HTML and Bootstrap",
  },
  {
    name: "Yummy",
    image: "/Yummy.png",
    liveDemo: "https://yummy-snowy-nine.vercel.app/",
    code: "https://github.com/ahmedgouda5/Yummy", // مثال
    title:
      "Explore traditional dishes from around the world with YouTube cooking videos",
  },
];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <div
          key={index}
          className="flex flex-col h-full bg-white border border-gray-200 rounded-lg shadow-md 
  dark:bg-black dark:border-gray-700 
  transition-transform duration-300 ease-in-out 
  hover:scale-105 hover:shadow-xl"
        >
          <div className="w-full h-52 relative">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover rounded-t-lg"
            />
          </div>

          <div className="flex flex-col flex-grow p-5 justify-between">
            <div>
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {project.name}
              </h5>
              <p className="mb-4 font-normal text-gray-700 dark:text-gray-400">
                {project.title}
              </p>
            </div>

            <div className="flex justify-between gap-4 mt-4">
              <Link
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit inline-flex items-center px-4 py-2 text-sm font-medium text-white 
      bg-gray-700 rounded-lg hover:bg-gray-500
      focus:ring-4 focus:outline-none focus:ring-blue-300 
      dark:hover:bg-gray-600 dark:focus:ring-blue-800"
              >
                Code
              </Link>

              <Link
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit inline-flex items-center px-4 py-2 text-sm font-medium text-white 
      bg-orange-600 rounded-lg hover:bg-orange-500
      focus:ring-4 focus:outline-none"
              >
                Live Demo
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsSection;
