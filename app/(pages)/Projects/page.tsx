import Heading from "@/components/Heading";
import ProjectCrud from "@/components/ProjectCrud";
import React from "react";

const Projects = () => {
    const projects= {
     head:"Projects",
     description:"Here are some of the projects I have worked on. You can find more on my GitHub.",
    }
        
  return (
    <div>
      <div>
        <Heading projects={projects} />
        <ProjectCrud/>
      </div>
    </div>
  );
};

export default Projects;
