import Info from "@/components/Info";
import Navbar from "@/components/Navbar";
import ParticlesBackground from "@/components/ParticlesBackground";
import Projects from "./(pages)/Projects/page";
import Experience from "./(pages)/Experience/page";
import Contact from "./(pages)/Contact/page";
import Skills from "./(pages)/Skills/page";

export default function Home() {
  return (
    <div className="container pt-4  ">
      <nav>
        <Navbar />
      </nav>
      <main>
        <section className="pt-10">
          <ParticlesBackground />
          <Info />
        </section>
        <section id="Projects">
          <Projects />
        </section>
        <section id="Experience">
          <Experience/>
        </section>
        <section id="Skills">
          <Skills/>
        </section>
        <section id="Contact">
          <Contact/>
        </section>
      </main>
    </div>
  );
}
