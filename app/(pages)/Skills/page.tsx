import Heading from "@/components/Heading";
import SkillsCom from "@/components/SkillsCom";

const Skills = () => {
  const skills = {
    head: "Skills",
    description:
      "A collection of tools and technologies I’ve worked with throughout my development journey.",
  };
  return (
    <div>
      <Heading projects={skills} />
      <SkillsCom/>
    </div>
  );
};

export default Skills;
