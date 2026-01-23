import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { Github, ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react";

const CardProject = () => {
  const [projects, setProject] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    axios.get('http://localhost:3000/projects')
      .then((res) => setProject(res.data))
      .catch((err) => console.error(err));
  }, []);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = current.offsetWidth;
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="p-6 md:p-10 relative group/nav">
      <div className="hidden md:flex justify-end gap-4 mb-6">
        <button
          onClick={() => scroll("left")}
          className="p-3 rounded-full bg-[#232329] text-[#00ff99] border border-white/10 hover:bg-[#00ff99] hover:text-[#1c1c22] transition-all"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => scroll("right")}
          className="p-3 rounded-full bg-[#232329] text-[#00ff99] border border-white/10 hover:bg-[#00ff99] hover:text-[#1c1c22] transition-all"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      <div
        ref={scrollRef}
        className="flex flex-col md:flex-row gap-6 md:gap-8 md:overflow-x-auto no-scrollbar md:snap-x md:snap-mandatory pb-10"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="flex-none w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] md:snap-start group relative flex flex-col rounded-3xl bg-[#1c1c22] border border-white/10 text-white transition-all duration-500 hover:border-[#00ff99]/50 overflow-hidden cursor-pointer"
          >
            <div className="relative h-52 w-full overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-[#00ff99] font-semibold">Click to expand</span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex justify-between items-center mb-3">
                <h5 className="text-2xl font-bold text-white group-hover:text-[#00ff99] transition-colors duration-300">
                  {project.title}
                </h5>
                <span className="text-[10px] uppercase tracking-widest text-[#00ff99] bg-[#00ff99]/10 px-2 py-1 rounded-md">
                  {project.category || "Full Stack"}
                </span>
              </div>
              <p className="text-sm text-white/50 line-clamp-2">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div
            className="relative w-full max-w-4xl max-h-[95vh] overflow-y-auto bg-[#1c1c22] border border-white/10 rounded-3xl shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 md:top-5 md:right-5 p-2 bg-black/50 hover:bg-[#00ff99] hover:text-black rounded-full transition-all z-10"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 h-56 md:h-64 lg:h-auto">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-6 md:p-8 flex flex-col">
                <span className="text-[#00ff99] text-xs uppercase tracking-widest mb-2 font-bold">
                  {selectedProject.category}
                </span>
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">{selectedProject.title}</h2>

                <div className="flex-1">
                  <h3 className="text-[#00ff99] mb-2 font-semibold text-sm">About:</h3>
                  <p className="text-white/70 leading-relaxed mb-4 text-sm">
                    {selectedProject.description}
                  </p>
                   <h3 className="text-[#00ff99] mb-2 font-semibold text-sm">Key Features:</h3>

                  <ul className="mb-6 space-y-1">

                    {selectedProject.features?.map((feature, index) => (

                      <li key={index} className="text-white/60 text-[11px] flex items-center gap-2">

                        <span className="w-1 h-1 bg-[#00ff99] rounded-full"></span>

                        {feature}

                      </li>

                    ))}

                  </ul>
                  {selectedProject.technologies && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProject.technologies.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-white/80">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a href={selectedProject.link} target="_blank" className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#00ff99] text-[#1c1c22] rounded-xl font-bold hover:bg-[#00e68a] transition-all text-sm">
                    View Live <ExternalLink size={16} />
                  </a>
                  <a href={selectedProject.github || "#"} target="_blank" className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all text-white flex justify-center">
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardProject;