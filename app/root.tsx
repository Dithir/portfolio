import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  Link
} from "react-router";

import React, { useEffect, useState } from "react";

import type { Route } from "./+types/root";
import "./app.css";

import { LanguageProvider, useLanguage } from "~/Components/LanguageProvider/language-context";

// ButtonItem component to avoid hooks in map
export function ButtonItem({ button, language }: { button: { english: string; spanish: string; route: string }, language: string }) {
  const [glow, setGlow] = useState(false);
  const [hovered, setHovered] = useState(false);
  
  return (
    <Link to={button.route}>
      <li onMouseOver={() => setGlow(true)} onMouseOut={() => setGlow(false)} className="w-25 sm:w-30 whitespace-nowrap relative">
        {hovered && <div className="h-full w-full absolute inset-0 bg-purple-950 rounded-xl blur-[3px]"></div>}
        <button onMouseOver={() => setHovered(true)} onMouseOut={() => setHovered(false)} className="relative w-full py-1 h-full rounded-xl bg-linear-160 from-black via-blue-950 to-black overflow-hidden">
          {language === "English" ? button.english : button.spanish}
          <span
            className={`absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r 
            from-transparent via-white/15 to-transparent ${glow ? "animate-slideGlow" : ""}`}
          ></span>
        </button>
      </li>
    </Link>
  );
}

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />

      </head>
      <body >
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const { language, setLanguage } = useLanguage();

  const [nameToggle, setNameToggle] = useState(true);
  const [onStart, setOnStart] = useState(true);



  const toggleName = () => {
    setNameToggle(!nameToggle);
  };
  


useEffect(() => {
  const timer = setTimeout(() => {
    setOnStart(false);
  }, 105300);
  return () => clearTimeout(timer);
}, []);



  const buttons = [
    { english: "Overview", spanish: "Vista general", route: "/" },
    { english: "Skills", spanish: "Habilidades", route: "/skills" },
    { english: "Projects", spanish: "Proyectos", route: "/projects" },
    { english: "Contact", spanish: "Contacto", route: "/contact" },
  ]

  
  return (<>
      {onStart && (<div onClick={() => setOnStart(false)} className="z-10 fixed w-full h-full bg-black/30 flex items-center justify-center">
        <div className="w-120 h-40 flex items-center justify-center rounded-xl shadow-lg">
          <span className="text-[70px] text-white font-bold font-serif animate-[slideWelcome_2s_ease-in-out,2s_fade_3.7s_ease-in-out]">W</span>
          <span className="text-[70px] text-white font-bold font-serif animate-[slideWelcome_2.1s_ease-in-out,2.1s_fade_3.6s_ease-in-out]">e</span>
          <span className="text-[70px] text-white font-bold font-serif animate-[slideWelcome_2.2s_ease-in-out,2.2s_fade_3.5s_ease-in-out]">l</span>
          <span className="text-[70px] text-white font-bold font-serif animate-[slideWelcome_2.3s_ease-in-out,2.3s_fade_3.4s_ease-in-out]">c</span>
          <span className="text-[70px] text-white font-bold font-serif animate-[slideWelcome_2.4s_ease-in-out,2.4s_fade_3.3s_ease-in-out]">o</span>
          <span className="text-[70px] text-white font-bold font-serif animate-[slideWelcome_2.5s_ease-in-out,2.5s_fade_3.2s_ease-in-out]">m</span>
          <span className="text-[70px] text-white font-bold font-serif animate-[slideWelcome_2.6s_ease-in-out,2.6s_fade_3.1s_ease-in-out]">e</span>
          <span className="text-[70px] text-white font-bold font-serif animate-[slideWelcome_2.7s_ease-in-out,2.7s_fade_3s_ease-in-out]">!</span>
        </div>
      </div>)}
      <header className="z-0 absolute flex items-center p-4 bg-gray-800/40 text-white w-full">
        <nav className="flex items-center justify-between w-full">
          <div className="w-40 text-left">
            <span className="font-bold text-purple-800" onClick={toggleName}>{nameToggle ? "Dithir's" : "Alan's"}</span>
            <span className=" whitespace-nowrap ml-1">Portfolio</span>
          </div>
          <div className="justify-center flex w-full">
            <ul className="flex flex-wrap justify-center items-center gap-x-1 gap-y-1 w-60 md:w-140 text-center ">
              {buttons.map((button, index) => {
                return (
                  <ButtonItem key={button.english} button={button} language={language} />
                )
              })}
            </ul>
          </div>
          <div className="w-40 space-x-2 flex flex-col sm:flex-row ">
            <div className={`${language === "English" ? "font-bold underline" : ""}`} onClick={()=>setLanguage("English")}>English</div>
            <div className={`${language === "Español" ? "font-bold underline" : ""}`} onClick={()=>setLanguage("Español")}>Español</div>
          </div>
        </nav>
      </header>
      
        <Outlet />
  </>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
