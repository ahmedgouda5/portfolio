"use client";

import Image from "next/image";
import Link from "next/link";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Info = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 px-6 py-12 max-w-6xl mx-auto font-sans">
      {/* Text section */}
      <div className="text-center md:text-left">
        <h1 className="text-5xl font-bold mb-4">
          Hello, I&apos;m <span className="text-orange-600">Ahmed Gouda</span>
        </h1>
        <h4 className="text-3xl font-bold my-4">
  Crafting Modern Web Experiences with React & Next.js
        </h4>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          I&apos;m Ahmed Abdel Gawad, a frontend developer with a passion for
          creating responsive, user-friendly web applications. I specialize in
          modern technologies like React.js and Next.js, and I love turning
          creative ideas into real-world digital solutions that make a
          difference.
        </p>

        <ul className="flex space-x-4 mt-6 justify-center md:justify-start items-center">
          <li>
            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/a7medgouda/"}
            >
              <LinkedInIcon />
            </Link>
          </li>
          <li>
            <Link target="_blank" href={"https://github.com/ahmedgouda5"}>
              <GitHubIcon />
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              href={"https://www.instagram.com/a7med__gouda/"}
            >
              <InstagramIcon />
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              href={"https://www.facebook.com/ahmed.gouda.785715/"}
            >
              <FacebookOutlinedIcon />
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex-shrink-0">
        <Image
          src="/Ahmed.png"
          alt="Picture of Ahmed Abdel Gawad"
          width={400}
          height={400}
          className="rounded-full shadow-lg"
        />
      </div>
    </div>
  );
};

export default Info;
