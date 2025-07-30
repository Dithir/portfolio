import type { Route } from "./+types/projects";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Projects() {
  return (
    <>
      <div className="body-back w-full h-screen flex items-center justify-center">
        <h1 className="text-5xl font-bold text-white">Welcome to the Projects Page</h1>
      </div>
    </>
  )
}
