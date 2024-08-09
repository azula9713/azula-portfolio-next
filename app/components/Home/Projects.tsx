"use client";

import { useState } from "react";
import {
  RiMailFill,
  RiNextjsFill,
  RiSvelteFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { SiAxios, SiFramer, SiJavascript, SiTypescript } from "react-icons/si";
import ProjectItem from "../Common/ProjectItem";
import Title from "../Common/Title";
import ProjectItemModal from "./ProjectItemModal";

const projects = [
  {
    title: "Yae Key Test",
    image: "/keytest.png",
    id: "keytest",
    domain: "https://keytest.yaepublishinghouse.online",
    source: "https://github.com/azula9713/yae-keyboard-testing-app",
    itemsSub: [
      {
        title: "Svelte Kit",
        icon: (
          <RiSvelteFill className="size-5 text-gray-800 dark:text-neutral-200" />
        ),
        value:
          "Svelte Kit has allowed to build a fast and efficient application out of the box.",
      },
      {
        title: "Tailwind CSS",
        icon: (
          <RiTailwindCssFill className="size-5 text-gray-800 dark:text-neutral-200" />
        ),
        value:
          "App has been mainly styled using Flowbite UI mixed with custom Tailwind CSS.",
      },
      {
        title: "TypeScript",
        icon: (
          <SiTypescript className="size-5 text-gray-800 dark:text-neutral-200" />
        ),
        value:
          "To ensure type safety and better code quality, All components are written in TypeScript.",
      },
      {
        title: "Axios",
        icon: (
          <SiAxios className="size-5 text-gray-800 dark:text-neutral-200" />
        ),
        value:
          "Axios is used for fetching data from the API and handling requests.",
      },
      {
        title: "Mailer Lite",
        icon: (
          <RiMailFill className="size-5 text-gray-800 dark:text-neutral-200" />
        ),
        value:
          "Mailer Lite is used for allowing users to subscribe to the newsletter.",
      },
    ],
    description:
      "A typing test application built with Svelte Kit and Tailwind CSS. It allows users to test their typing speed and accuracy, while also providing a list of quotes to type.",
  },
  {
    title: "Jleosvue - Demo",
    image: "/realestate.jpg",
    id: "realestate",
    domain: "https://jleosvue-frontend.vercel.app",
    source: "https://vercel.com/nilesh-vidurangas-projects/jleosvue-frontend",
    itemsSub: [
      {
        title: "NextJS",
        icon: (
          <RiNextjsFill className="size-5 text-gray-800 dark:text-neutral-200" />
        ),
        value:
          "This is my first professional project using NextJS, and I must say I'm impressed with the performance and speed of the application and it's SEO capabilities.",
      },
      {
        title: "TypeScript",
        icon: (
          <SiTypescript className="size-5 text-gray-800 dark:text-neutral-200" />
        ),
        value:
          "To ensure type safety and better code quality, All components are written in TypeScript.",
      },
      {
        title: "Tailwind CSS",
        icon: (
          <RiTailwindCssFill className="size-5 text-gray-800 dark:text-neutral-200" />
        ),
        value:
          "App has been mainly styled using Flowbite UI mixed with custom Tailwind CSS.",
      },
      {
        title: "Axios",
        icon: (
          <SiAxios className="size-5 text-gray-800 dark:text-neutral-200" />
        ),
        value:
          "Axios is used for fetching data from the API and handling requests.",
      },
    ],
    description:
      "A real estate website built with Vue.js and Tailwind CSS. It allows users to view properties, search for properties, and contact the real estate agent.",
  },
  {
    title: "Tsukiyomi - Demo",
    image: "/tsukiyomi.png",
    id: "tsukiyomi",
    domain: "https://tsukiyomi-demo.vercel.app",
    source: "https://github.com/azula9713/tsukiyomi-demo",
    itemsSub: [
      {
        title: "NextJS",
        icon: (
          <RiNextjsFill className="size-5 text-gray-800 dark:text-neutral-200" />
        ),
        value:
          "My first ever NextJS project that I built to learn the framework and its capabilities.",
      },
      {
        title: "TypeScript",
        icon: (
          <SiTypescript className="size-5 text-gray-800 dark:text-neutral-200" />
        ),
        value:
          "To ensure type safety and better code quality, All components are written in TypeScript.",
      },
      {
        title: "Framer Motion",
        icon: (
          <SiFramer className="size-5 text-gray-800 dark:text-neutral-200" />
        ),
        value:
          "Framer Motion is used for animations and transitions throughout the website.",
      },
      {
        title: "Tailwind CSS",
        icon: (
          <RiTailwindCssFill className="size-5 text-gray-800 dark:text-neutral-200" />
        ),
        value:
          "App has been mainly styled using Flowbite UI mixed with custom Tailwind CSS.",
      },
    ],
    description: "A manga reader website built with React and Tailwind CSS.",
  },
  // {
  //   title: "Tesla Clone",
  //   image: "/tesla.png",
  //   id: "tesla",
  //   domain: "https://tesla-clone-opal.vercel.app/",
  //   source: "",
  //   itemsSub: [
  //     {
  //       title: "React",
  //       icon: (
  //         <RiReactjsFill className="size-5 text-gray-800 dark:text-neutral-200" />
  //       ),
  //       value: "React is used for building the website as a single-page app.",
  //     },
  //     {
  //       title: "TypeScript",
  //       icon: (
  //         <SiTypescript className="size-5 text-gray-800 dark:text-neutral-200" />
  //       ),
  //       value:
  //         "To ensure type safety and better code quality, All components are written in TypeScript.",
  //     },
  //     {
  //       title: "Styled Components",
  //       icon: (
  //         <SiStyledcomponents className="size-5 text-gray-800 dark:text-neutral-200" />
  //       ),
  //       value:
  //         "Styled Components is used for styling the components and pages. It allows for dynamic styling based on props.",
  //     },
  //     {
  //       title: "Vite",
  //       icon: <SiVite className="size-5 text-gray-800 dark:text-neutral-200" />,
  //       value:
  //         "This was my introduction to Vite, and I must say I'm impressed with the speed and performance of the development server and the build process.",
  //     },
  //   ],
  //   description: "A Tesla clone built with React and Tailwind CSS.",
  // },
  {
    title: "Spotify Clone",
    image: "/spotify.png",
    id: "spotify",
    domain: "https://spotify-clone-seven-theta.vercel.app",
    source: "https://github.com/azula9713/spotify-clone",
    itemsSub: [
      {
        title: "React",
        icon: (
          <RiSvelteFill className="size-5 text-gray-800 dark:text-neutral-200" />
        ),
        value: "React is used for building the website as a single-page app.",
      },
      {
        title: "Tailwind CSS",
        icon: (
          <RiTailwindCssFill className="size-5 text-gray-800 dark:text-neutral-200" />
        ),
        value:
          "App has been mainly styled using Flowbite UI mixed with custom Tailwind CSS.",
      },
      {
        title: "TypeScript",
        icon: (
          <SiTypescript className="size-5 text-gray-800 dark:text-neutral-200" />
        ),
        value:
          "To ensure type safety and better code quality, All components are written in TypeScript.",
      },
      {
        title: "Axios",
        icon: (
          <SiAxios className="size-5 text-gray-800 dark:text-neutral-200" />
        ),
        value:
          "Axios is used for fetching data from the API and handling requests.",
      },
    ],
    description: "A Spotify clone built with React and Tailwind CSS.",
  },
  {
    title: "Farefinder",
    image: "/farefinder.png",
    id: "farefinder",
    domain: "https://farefinder-cra.vercel.app",
    source: "",
    itemsSub: [
      {
        title: "React",
        icon: (
          <RiSvelteFill className="size-5 text-gray-800 dark:text-neutral-200" />
        ),
        value: "React is used for building the website as a single-page app.",
      },
      {
        title: "Tailwind CSS",
        icon: (
          <RiTailwindCssFill className="size-5 text-gray-800 dark:text-neutral-200" />
        ),
        value:
          "App has been mainly styled using Flowbite UI mixed with custom Tailwind CSS.",
      },
      {
        title: "JavaScript",
        icon: (
          <SiJavascript className="size-5 text-gray-800 dark:text-neutral-200" />
        ),
        value:
          "JavaScript is used for building the website as a single-page app.",
      },
      {
        title: "Axios",
        icon: (
          <SiAxios className="size-5 text-gray-800 dark:text-neutral-200" />
        ),
        value:
          "Axios is used for fetching data from the API and handling requests.",
      },
    ],
    description: "A flight search website built with React and Tailwind CSS.",
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState("");

  return (
    <div className="mt-10 sm:mt-14" id="projects">
      <Title titleText="Projects" />
      {/* Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {projects.map((project) => (
          <ProjectItem
            key={project.id}
            title={project.title}
            image={project.image}
            onClick={() => setSelectedProject(project.id)}
          />
        ))}
      </div>
      {/* End Image Grid */}

      <ProjectItemModal
        project={
          projects.find((project) => project.id === selectedProject) ||
          projects[0]
        }
        onClose={() => setSelectedProject("")}
      />
    </div>
  );
}

export default Projects;
