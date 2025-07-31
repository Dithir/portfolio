import { useState } from "react";
import { useLanguage } from "../LanguageProvider/language-context";

export type ProjectButtonProps = {
  url?: string;
};

export default function ProjectButton({ url }: ProjectButtonProps){
    const { language } = useLanguage();
    const [hovered, setHovered] = useState(false);

    return(
        <div className="w-30 rounded-xl flex items-center pt-2 pb-7 text-white justify-center">
                  <div className="relative bg-white rounded-3xl">
                    {hovered && <div className="absolute w-full h-full bg-green-900 blur"></div>}
                    <button 
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    onClick={() => window.open(url, "_blank")} 
                    className="relative p-1 text-center w-20 rounded-3xl bg-gray-500">{language === "English" ? "Visit" : "Visitar"}</button>
                  </div>
                  </div>
    )
}