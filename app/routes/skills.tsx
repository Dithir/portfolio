import type { Route } from "./+types/skills";
import SkillCard from "../Components/SkillCard/SkillCard";
import {expressIcon, javascriptIcon, nodejsIcon, postgreSqlIcon, reactIcon, reactRouterIcon, tailwindIcon, typescriptIcon, angularIcon, mongoIcon, nextjsIcon, mySqlIcon, pythonIcon } from "../Components/SkillCard/svgs";
import { useLanguage } from "~/Components/LanguageProvider/language-context";
import { useEffect } from "react";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Skills() {
  const {language} = useLanguage();
  useEffect(() => {
    console.log(language);
  }, [language]);
  return (
    <>
      <div className="w-full flex flex-col items-center pt-37 md:pt-22">
        <h1 className="text-3xl font-bold text-white">{language === "Español" ? "Mis habilidades actuales consisten en:" : "My current Skills consist on:"}</h1>
        <div className="w-100 sm:w-150 lg:w-170 flex flex-wrap items-center justify-center gap-5 p-4 mt-5 rounded-lg shadow-lg">
            
            <SkillCard image={javascriptIcon(60, "white")} name="JavaScript" />
            <SkillCard image={typescriptIcon(60,"white")} name="TypeScript" />
            <SkillCard image={reactIcon(60,"white")} name="React" />
            <SkillCard image={reactRouterIcon(60, "white")} name="React Router" />
            <SkillCard image={tailwindIcon(60,"white")} name="Tailwind CSS" />
            <SkillCard image={nodejsIcon(60,"white")} name="Node.js" />
            <SkillCard image={pythonIcon(60,"white")} name="Python" />
        </div>
        <h1 className="text-3xl font-bold text-white">{language === "Español" ? "Estoy aprendiendo actualmente en:" : "Im currently learning:"}</h1>
        <div className="w-100 sm:w-150 lg:w-170 flex flex-wrap items-center justify-center gap-5 p-4 mt-5 rounded-lg shadow-lg">
            <SkillCard image={expressIcon(60,"white")} name="Express" />
            <SkillCard image={postgreSqlIcon(60,"white")} name="PostgreSQL" />
        </div>
        <h1 className="text-3xl font-bold text-white">{language === "Español" ? "Estoy dispuesto a aprender:" : "Im willing to learn:"}</h1>
         <div className="w-100 sm:w-150 lg:w-170 flex flex-wrap items-center justify-center gap-5 p-4 mt-5 rounded-lg shadow-lg">
          <SkillCard image={angularIcon(60,"white")} name="Angular" />   
          <SkillCard image={mongoIcon(60,"white")} name="MongoDB" />        
          <SkillCard image={nextjsIcon(60,"white")} name="Next.js" />        
          <SkillCard image={mySqlIcon(60,"white")} name="MySQL" />
        </div>
      </div>
    </>
  )
}
