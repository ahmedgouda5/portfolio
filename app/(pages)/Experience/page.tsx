import ExperienceCom from "@/components/ExperienceCom";
import Heading from "@/components/Heading";

const Experience = () => {
const experience = {
  head: "Experience",
  description: "I gained hands-on experience through real projects and teamwork.",
};
  return (
    <div>
      <Heading projects={experience} />
      <ExperienceCom/>
    </div>
  );
};

export default Experience;
