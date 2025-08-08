import photo from "./photo-placeholder.png";
import Typewriter from "~/Utilities/TypeWriter";
import {useEffect, useState} from "react";
import { useLanguage } from "~/Components/LanguageProvider/language-context";

export default function PresentationCard() {

    const { language } = useLanguage();

    const [textToShow] = useState([
        {
            textEnglish: "Hello, welcome to my Portfolio, my name is Alan, but i usually go by Dithir, im a Full-Stack Developer from Argentina, im constantly learning new things autodidactly.",
            textSpanish: "Hola, bienvenido a mi Portafolio, mi nombre es Alan, pero usualmente me llaman Dithir, soy un Desarrollador Full-Stack de Argentina, estoy constantemente aprendiendo cosas nuevas autodidactamente.",
            duration: 7000, 
            speed: 30
        },
        {
            textEnglish: "Second text to show", 
            textSpanish: "Segundo texto para mostrar",
            duration: 3000,
            speed: 30
        },
        {
            textEnglish: "Third text to show",
            textSpanish: "Tercer texto para mostrar",
            duration: 3000,
            speed: 30
        },
    ])

    const [text, setText] = useState(textToShow[0]);

    const changeText = () => {
        console.log("clicked");
        console.log(text)
        const currentIndex = textToShow.indexOf(text);
        const nextIndex = (currentIndex + 1) % textToShow.length;
            setText(textToShow[nextIndex]);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            changeText();
        }, text.duration);

        return () => clearInterval(interval);
    }, [text]);

    return (
        <div className="relative w-122 h-72 rounded-2xl p-1">
            <div className="absolute z-0 w-120 h-70 flex justify-end ">
                <div className="h-42 w-110 bg-gray-700 rounded-3xl m-3 speech-bubble">
                    <span className="text-white p-4 block"><Typewriter text={language === "English" ? text.textEnglish : text.textSpanish} speed={text.speed} /></span>
                </div>
            </div>
            <div className="relative m-1 w-118 h-48 rounded-lg flex justify-end items-center">
            </div>
            <div className="relative z-10 m-1 ml-6 w-118 h-18 rounded-lg">
                <img className="h-full cursor-pointer" onClick={changeText} src={photo} alt="" />
            </div>
        </div>
    );
}