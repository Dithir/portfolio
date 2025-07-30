import { useState } from "react";

export type SkillCardProps = {
  image?: any;
  name?: string;
};

export default function SkillCard({ image, name }: SkillCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <div className={`relative flex flex-col items-center justify-center w-35 h-40 ${hovered ? "bg-purple-800" : "bg-gray-950"} rounded-lg border border-gray-700 transition-all duration-200 ease-in-out hover:scale-105`}>
        {hovered && (
          <div className="absolute inset-0 bg-purple-700 h-full w-full rounded-lg blur-lg border"></div>
        )}
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="relative w-full h-full bg-gray-950 rounded-lg border border-gray-700 flex flex-col items-center justify-around"
        >
          {image}
          <p className="text-white text-[20px] whitespace-nowrap">{name}</p>
        </div>
      </div>
    </>
  );
}
