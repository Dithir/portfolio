import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <h1 className="text-5xl font-bold text-white">Welcome to the Home Page</h1>
      </div>
    </>
  )
}
