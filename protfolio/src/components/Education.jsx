
import { useState , useEffect} from "react";
import axios from "axios";
const educations = [
    {
      "degree": "Full Stack Developer (Laravel - React Js)",
      "institution": "Simplon Maghreb",
      "duration": "August 2025 - Janvier 2025",
      "description": "Intensive specialized training focused on modern web ecosystems, focusing on high-performance applications using Laravel and React."
    },
    {
      "degree": "Professional License in Software Engineering & Information Systems (ILSI)",
      "institution": "ENSA Kenitra",
      "duration": "2024 - 2025",
      "description": "Specialized university degree covering advanced software architecture, system analysis, and information system management."
    },
    {
      "degree": "Specialized Technician Diploma in Digital Development (Full Stack)",
      "institution": "ISTA (OFPPT)",
      "duration": "2021 - 2023",
      "description": "Foundational training in software development, database management, and full-stack web technologies."
    }
  ]
function Education() {

    return (
      <div>
        <h2 className="text-white/80 font-['JetBrains_Mono'] text-sm lg:text-xl">My Educations</h2>
        <p className="text-white/60 mb-6 max-w-[600px] mx-auto lg:mx-0">
          Specialized Full Stack Developer crafting high-performance web
          applications using Laravel's robust backend and React's dynamic frontend
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 pt-8 gap-6 w-full lg:w-full max-h-[350px] overflow-y-auto overflow-x-hidden custom-scrollbar pr-4">
          {educations.map((item, index) => (
            <div
              key={index}
              className="bg-[#232329] p-6 rounded-xl border border-white/5 flex flex-col gap-2"
            >
              <span className="text-[#00ff99] font-['JetBrains_Mono'] text-sm">
                {item.duration}
              </span>
              <h4 className="text-md font-bold text-white leading-tight">
                {item.degree}
              </h4>
              <p className="text-white/60 text-sm italic">{item.institution}</p>
            </div>
          ))}
        </div>
      </div>
    );
}

export default Education