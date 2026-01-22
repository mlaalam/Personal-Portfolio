import { useEffect, useState } from "react";
import axios from "axios";
function Experience() {
  const [exper, setExper] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/experience")
      .then((res) => setExper(res.data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <h2 className="text-white/80 font-['JetBrains_Mono'] text-sm lg:text-xl">My Experience</h2>
      <p className="text-white/60 mb-6 max-w-[600px] mx-auto lg:mx-0">
        Specialized Full Stack Developer crafting high-performance web
        applications using Laravel's robust backend and React's dynamic frontend
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 pt-8 gap-6 w-full lg:w-[90%] max-h-[450px] overflow-y-auto overflow-x-hidden custom-scrollbar pr-4">
        {exper.map((item, index) => (
          <div
            key={index}
            className="bg-[#232329] p-6 rounded-xl border border-white/5 flex flex-col gap-2"
          >
            <span className="text-[#00ff99] font-['JetBrains_Mono'] text-sm">
              {item.duration}
            </span>
            <h4 className="text-xl font-bold text-white leading-tight">
              {item.title}
            </h4>
            <p className="text-white/60 text-sm italic">{item.company}</p>
            <p className="text-white/60 text-sm italic line-clamp-2">
              {item.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {item.technologies.slice(0, 4).map((tech, i) => (
                <span
                  key={i}
                  className="flex items-center gap-2 text-[#00ff99] text-[12px]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00ff99]"></span>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}

        {/* <div className='bg-[#232329] p-6 rounded-xl border border-white/5 min-h-[150px]'>
       <span className="text-[#00ff99] font-mono text-sm">2021 - 2022</span>
       <h3 className="text-xl text-white font-bold mt-2">Freelance UI Designer</h3>
    </div> */}
      </div>
    </div>
  );
}

export default Experience;
