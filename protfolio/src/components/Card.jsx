import front from "../assets/images/front.png";
import back from "../assets/images/back.png";

const Card = () => {
  const services = [
    {
      title: "Front End",
      image: front,
      tech: ["JavaScript", "React", "Tailwind", "Css"],
      desc: "Building interactive, responsive, and user-friendly interfaces."
    },
    {
      title: "Back End",
      image: back, 
      tech: ["PHP", "Laravel", "MySQL", "Docker"],
      desc: "Developing robust server-side logic and secure API architectures."
    }
  ];

  return (
    <div className="w-full">
      <h2 className="text-white/80 font-['JetBrains_Mono'] text-sm lg:text-xl">My Services</h2>
      <p className="text-white/60 mb-6 max-w-[600px] mx-auto lg:mx-0 text-center lg:text-left font-light">
        Specialized Full Stack Developer crafting high-performance web
        applications using Laravel's robust backend and React's dynamic frontend.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 pt-8 gap-6 w-full lg:w-[90%] max-h-[450px] overflow-y-auto overflow-x-hidden custom-scrollbar pr-4">
        {services.map((service, index) => (
          <div 
            key={index}
            className="group relative h-[270px] rounded-3xl overflow-hidden bg-[#232329] border border-white/5 hover:border-[#00ff99]/50 transition-all duration-500 shadow-2xl"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${service.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c22] via-[#1c1c22]/40 to-transparent"></div>
            </div>
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <div className="w-14 h-14 rounded-2xl bg-black/50 backdrop-blur-xl border border-white/10 flex items-center justify-center mb-4 group-hover:-translate-y-2 transition-transform duration-500">
                <img src={service.image} alt="icon" className="w-8 h-8 object-contain" />
              </div>

              <h3 className="text-3xl font-bold text-white mb-3 tracking-tight">
                {service.title}
              </h3>

              <p className="text-white/70 text-sm mb-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                {service.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tech.map((t) => (
                  <span key={t} className="px-3 py-1 text-[10px] uppercase tracking-widest font-bold bg-[#00ff99] text-black rounded-md">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="absolute top-5 right-5 w-2 h-2 rounded-full bg-[#00ff99] shadow-[0_0_15px_#00ff99]"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;