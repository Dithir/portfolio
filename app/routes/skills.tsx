import type { Route } from "./+types/skills";
import SkillCard from "../Components/SkillCard/SkillCard";
import {expressIcon, javascriptIcon, nodejsIcon, postgreSqlIcon, reactIcon, reactRouterIcon, tailwindIcon, typescriptIcon } from "../Components/SkillCard/svgs";
import { useLanguage } from "../root";
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
      <div className="body-back w-full h-screen flex flex-col items-center pt-37 md:pt-25">
        <h1 className="text-5xl font-bold text-white">{language === "Español" ? "Mis habilidades actuales consisten en:" : "My current Skills consist on:"}</h1>
        <div className="w-170 flex flex-wrap items-center justify-center gap-5 p-4 mt-5 rounded-lg shadow-lg">
            <SkillCard image={expressIcon(60,"white")} name="Express" />
            <SkillCard image={javascriptIcon(60, "white")} name="JavaScript" />
            <SkillCard image={nodejsIcon(60,"white")} name="Node.js" />
            <SkillCard image={postgreSqlIcon(60,"white")} name="PostgreSQL" />
            <SkillCard image={reactIcon(60,"white")} name="React" />
            <SkillCard image={reactRouterIcon(60, "white")} name="React Router" />
            <SkillCard image={tailwindIcon(60,"white")} name="Tailwind CSS" />
            <SkillCard image={typescriptIcon(60,"white")} name="TypeScript" />
        </div>
      </div>
    </>
  )
}
