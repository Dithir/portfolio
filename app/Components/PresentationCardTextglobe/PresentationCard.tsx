import photo from "./photo-placeholder.png";
import Typewriter from "~/Utilities/TypeWriter";
import {useEffect, useState} from "react";
import { useLanguage } from "~/Components/LanguageProvider/language-context";

export default function PresentationCard() {

    const { language } = useLanguage();

    const [textToShow] = useState([
        {
            textEnglish: "Hello, welcome to my Portfolio, my name is Alan, but i usually go by Dithir, im a Full-Stack Developer from Argentina, im constantly learning new things on my own.",
            textSpanish: "Hola, bienvenido a mi Portafolio, mi nombre es Alan, pero usualmente me llaman Dithir, soy un Desarrollador Full-Stack de Argentina, estoy constantemente aprendiendo cosas nuevas por mi cuenta.",
            duration: 6000, 
            speed: 30
        },
        {
            textEnglish: "At the moment im working on Web Development, but i would love to expand to other fields like Game Development, AI, and more in the future.",
            textSpanish: "En este momento estoy trabajando en Desarrollo Web, pero me encantaría expandirme a otros campos como Desarrollo de Juegos, IA y más en el futuro.",
            duration: 6000,
            speed: 30
        },
        {
            textEnglish: "I'm currently looking for a half or full time job, but still improving my skills meanwhile and open to freelance work.",
            textSpanish: "Actualmente estoy buscando una oportunidad laboral a medio tiempo o tiempo completo, pero sigo mejorando mis habilidades y estoy abierto a trabajos freelance.",
            duration: 6000,
            speed: 30
        },
        {
            textEnglish: "Thanks for passing by and i really hope i catched your attention, feel free to contact me if you want to know more about me or my work.",
            textSpanish: "Gracias por pasar y realmente espero haber captado tu atención, no dudes en contactarme si quieres saber más sobre mí o mi trabajo.",
            duration: 6000,
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
        <div className="relative w-102 h-72 rounded-2xl p-1">
            <div className="absolute z-0 w-100 h-70 flex justify-end">
                <div className="h-42 w-90 bg-gray-700 rounded-3xl m-3 speech-bubble">
                    <span className="text-white text-lg p-4 block"><Typewriter text={language === "English" ? text.textEnglish : text.textSpanish} speed={text.speed} /></span>
                </div>
            </div>
            <div className="relative m-1 w-100 h-48 rounded-lg flex justify-end items-center">
            </div>
            <div className="relative z-10 m-1 ml-6 w-100 h-18 rounded-lg">
                <img className="h-full cursor-pointer" onClick={changeText} src={photo} alt="" />
            </div>
        </div>
    );
}