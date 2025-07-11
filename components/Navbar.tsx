'use client';

import { PagesNavbar } from "@/constents";
import { ModeToggle } from "./ModelToggle";
import { MenuIcon, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { id: "projects", title: "Projects", link: PagesNavbar.Projects },
    { id: "about", title: "About", link: PagesNavbar.About },
    { id: "contact", title: "Contact", link: PagesNavbar.Contact },
    { id: "skills", title: "Skills", link: PagesNavbar.skills },
    { id: "experience", title: "Experience", link: PagesNavbar.Experience },
    { id: "courses", title: "Courses", link: PagesNavbar.Courses },
  ];

  return (
    <nav className="flex items-center justify-between px-4 py-4  relative">
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

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 items-center">
        {links.map((link) => (
          <li key={link.id}>
            <a href={link.link} className="hover:text-orange-500 transition-colors">
              {link.title}
            </a>
          </li>
        ))}
        <li>
          <ModeToggle />
        </li>
      </ul>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-white dark:bg-black z-40 flex flex-col items-center justify-center space-y-6 md:hidden">
          <X
            className="absolute top-6 right-6 bg-white dark:bg-black  cursor-pointer"
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
          <ModeToggle />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
