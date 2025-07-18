import ContactCom from "@/components/ContactCom";
import Heading from "@/components/Heading";

const Contact = () => {
    const contact={
        head:"Contact Us",
        description:"Contact me to get started with your project",
    }
  return (
    <div className="mt-[100px]">
      <Heading  projects={contact} />
      <ContactCom/>
    </div>
  );
};

export default Contact;
