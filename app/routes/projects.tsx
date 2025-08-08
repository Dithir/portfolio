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
      image: "/projectsImages/PokeApi.png",
      url: "https://dithir.github.io/my-react-router-app",
      status: ["In Progress", "En Progreso"],

    },
    {
      engTitle: "Webpage Miranda Mussas",
      spaTitle: "Webpage Miranda Mussas",
      engDescription: "This is a project for an eccomerce website, will eventually be used on a family business.",
      spaDescription: "Este es un proyecto para un sitio web de compras, que eventualmente se utilizará en un negocio familiar.",
      image: "/projectsImages/miranda-mussas.png",
      url: "https://dithir.github.io/miranda-mussas/",
      status: ["In Progress", "En Progreso"],
    },
    {
      engTitle: "Portfolio",
      spaTitle: "Portafolio",
      engDescription: "This is the current portfolio you are viewing, showcasing my projects and skills.",
      spaDescription: "Este es el portafolio actual que estás viendo, mostrando mis proyectos y habilidades.",
      image: "/projectsImages/portfolio.png",
      url: "https://dithir.github.io/portfolio/",
      status: ["In Progress", "En Progreso"],
    },
  ];

  return (
    <>
      <div className="z-0 relative h-full w-full flex items-center flex-col gap-2 pt-35 sm:pt-25">
        <ul className="relative w-full max-w-4xl flex flex-col items-center justify-center gap-0 sm:gap-10 py-10 mb-10">
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
