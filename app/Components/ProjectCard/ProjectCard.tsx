import { useLanguage } from "../LanguageProvider/language-context"
import { useState } from "react";

type Project = {
  engTitle: string;
  spaTitle: string;
  engDescription: string;
  spaDescription: string;
  image: string;
};

export type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps){
    const { language } = useLanguage();
    const [hovered, setHovered] = useState(false);

    return (
        <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className="relative w-120 h-40 rounded-xl flex items-center justify-center">
            {hovered && <div className="absolute w-full h-full rounded-xl bg-emerald-800 flex p-3 blur-xl"></div>}
            <div className="relative w-full h-full rounded-xl bg-black border-gray-500 border flex p-3">
                <div className="w-2/5 h-full bg-amber-400 flex items-center justify-center rounded-lg overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={project.image}
                      alt={language === "English" ? project.engTitle : project.spaTitle}
                    />
                </div>
                <div className="w-3/5 h-full bg-gray-800 p-2 border-2 border-gray-600 ml-3 rounded-xl text-white">
                    <h2>{language === "English" ? project.engTitle : project.spaTitle}</h2>
                    <hr className="my-1 border-gray-500" />
                    <p className="text-sm">{language === "English" ? project.engDescription : project.spaDescription}</p>
                </div>
            </div>
        </div>
    )
}