import Info from "@/components/Info";
import Navbar from "@/components/Navbar";
import ParticlesBackground from "@/components/ParticlesBackground";
import Projects from "./(pages)/Projects/page";
import Experience from "./(pages)/Experience/page";
import Contact from "./(pages)/Contact/page";
import Skills from "./(pages)/Skills/page";

export default function Home() {
  return (
    <div>
      <nav className="container pt-4 ">
        <Navbar />
      </nav>
      <main className="container pt-4 ">
        <section className="pt-10">
          <ParticlesBackground />
          <Info />
        </section>
        <section id="Projects">
          <Projects />
        </section>
        <section id="Experience">
          <Experience />
        </section>
        <section id="Skills">
          <Skills />
        </section>
        <section id="Contact">
          <Contact />
        </section>
      </main>
      <footer className="flex justify-center py-3 bg-gray-300 dark:bg-black shadow-inner ">
        <h1>© 2025 Ahmed Gouda. All rights reserved.</h1>
      </footer>
    </div>
  );
}
