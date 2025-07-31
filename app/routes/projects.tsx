import type { Route } from "./+types/projects";
import { ProjectCard } from "~/Components/ProjectCard/ProjectCard";
import { useLanguage } from "~/Components/LanguageProvider/language-context";
import { useState } from "react";
import ProjectButton from "~/Components/ProjectCard/ProjectButton";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Projects() {
  const { language } = useLanguage();


  const projects = [
    {
      engTitle: "PokeApi project",
      spaTitle: "Proyecto PokeApi",
      engDescription: "First project i made and still currently working on to learn API data extraction and a few other things.",
      spaDescription: "Primer proyecto que hice y sigo trabajando para aprender extracción de datos de API y algunas otras cosas.",
      image: "projectsImages/PokeApi.png",
      url: "https://dithir.github.io/my-react-router-app"
    },
    {
      engTitle: "Project 2",
      spaTitle: "Proyecto 2",
      engDescription: "This is the second project.",
      spaDescription: "Este es el segundo proyecto.",
      image: "https://placehold.co/600x600",
    },
    // Add more projects as needed
  ];

  return (
    <>
      <div className="z-0 relative w-full h-screen flex items-center flex-col gap-2 pt-35 sm:pt-25">
        <ul className="absolute w-full max-w-4xl flex flex-col items-center justify-center gap-0 sm:gap-10 py-10">
          <div className="absolute top-0 h-full w-5 flex flex-col items-center">
            <div className="w-4 h-4 rounded-full bg-gray-500/30"></div>
            <div className="w-1 h-full bg-gray-500/30"></div>
            <div className="w-4 h-4 rounded-full bg-gray-500/30"></div>
          </div>
          {projects.map((project, index) => {
            
            return (
              <li className="flex flex-col items-center sm:flex-row" key={index}>
                {index % 2 === 0 && <div className="hidden sm:flex"><ProjectButton url={project.url} /></div>}
                <ProjectCard project={project} />
                {index % 2 !== 0 && <div className="hidden sm:flex"><ProjectButton url={project.url} /></div>}
                <div className="flex sm:hidden"><ProjectButton url={project.url} /></div>
                </li>
            )
          })}
        </ul>
        
      </div>

    </>
  )
}
