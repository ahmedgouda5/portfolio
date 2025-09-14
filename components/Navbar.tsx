'use client';

import { PagesNavbar } from "@/constents";
import { ModeToggle } from "./ModelToggle";
import { MenuIcon, X } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  const links = [
    { id: "projects", title: "Projects", link: PagesNavbar.Projects },
    { id: "contact", title: "Contact", link: PagesNavbar.Contact },
    { id: "skills", title: "Skills", link: PagesNavbar.skills },
    { id: "experience", title: "Experience", link: PagesNavbar.Experience },
  ];

  // ✅ Progress bar logic
  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Number(scrolled.toFixed(2)));
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(() => {
          updateProgress();
          ticking = false;
        });
      }
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateProgress, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="flex items-center justify-between px-4 py-4 relative ">
        <h1 className="font-bold text-2xl text-orange-600">Goudeawy</h1>

        {/* Mobile Menu Button */}
        <Button
          className="md:hidden bg-transparent"
          onClick={() => setIsOpen(true)}
          aria-label="Open Menu"
          variant="ghost"
        >
          <MenuIcon className="text-black dark:text-white" size={30} />
        </Button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 items-center">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={link.link}
                className="hover:text-orange-500 transition-colors"
              >
                {link.title}
              </a>
            </li>
          ))}
          <li>
            <a href={PagesNavbar.HireMe}>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full transition-all">
                Hire Me
              </Button>
            </a>
          </li>
          <li>
            <ModeToggle />
          </li>
        </ul>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="fixed inset-0 bg-white dark:bg-black z-40 flex flex-col items-center justify-center space-y-6 md:hidden">
            <X
              className="absolute top-6 right-6 cursor-pointer text-black dark:text-white"
              size={32}
              onClick={() => setIsOpen(false)}
            />
            {links.map((link) => (
              <a
                key={link.id}
                href={link.link}
                className="text-xl hover:text-orange-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </a>
            ))}
            {/* Mobile "Hire Me" Button */}
            <a href={PagesNavbar.HireMe}>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full">
                Hire Me
              </Button>
            </a>
            <ModeToggle />
          </div>
        )}
      </nav>

      {/* ✅ Progress bar UI */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-1 bg-orange-500 transition-all duration-75"
          style={{ width: `${progress}%` }}
        />
      </div>
    </>
  );
};

export default Navbar;
