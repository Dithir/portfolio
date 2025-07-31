import { useLanguage } from "../LanguageProvider/language-context"
import { useState } from "react";

type Project = {
  engTitle: string;
  spaTitle: string;
  engDescription: string;
  spaDescription: string;
  image: string;
  status?: string[];
};

export type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps){
    const { language } = useLanguage();
    const [hovered, setHovered] = useState(false);

    return (
        <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className="relative  rounded-xl flex-col items-center justify-center">
            {hovered && <div className="absolute w-full h-full rounded-xl bg-emerald-800 flex p-3 blur-xl"></div>}
            <div className="relative rounded-xl bg-black border-gray-500 border flex flex-col sm:flex-row p-3 items-center justify-between gap-3">
                <div className="w-50 h-35 sm:w-65 sm:h-45 bg-amber-400 flex items-center justify-center rounded-lg overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={project.image}
                      alt={language === "English" ? project.engTitle : project.spaTitle}
                    />
                </div>
                <div className="sm:w-80 sm:h-45 w-50 bg-gray-800 p-2 border-2 border-gray-600 sm:ml-1 rounded-xl text-white">
                    <h2>{language === "English" ? project.engTitle : project.spaTitle}</h2>
                    <hr className="my-1 border-gray-500" />
                    <div className="flex flex-col justify-between sm:h-32 sm:gap-0 gap-5">
                      <p className="text-sm">{language === "English" ? project.engDescription : project.spaDescription}</p>
                    <p className="text-sm ">{language === "English"? "Status: " : "Estado: "}{project.status?.[language === "English" ? 0 : 1]}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}