import { motion } from "framer-motion";

const skills = [
  { 
    name: "PHP", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    color: "#777bb4" 
  },
  { 
    name: "Laravel", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
    color: "#ff2d20" 
  },
  { 
    name: "React", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    color: "#61dbfb" 
  },
  { 
    name: "MySQL", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    color: "#00758f" 
  },
  { 
    name: "Tailwind", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    color: "#38b2ac" 
  },
  { 
    name: "JavaScript", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    color: "#f7df1e" 
  },
  { 
    name: "Docker", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    color: "#2496ed" 
  },
  { 
    name: "Jira", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
    color: "#0052cc" 
  },
  { 
    name: "Trello", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-original.svg",
    color: "#0079bf" 
  },
];

const Skills = () => {
  const duplicatedSkills = [...skills, ...skills, ...skills];

  return (
    <div className="relative w-full overflow-hidden py-16">
      <div className="absolute left-0 top-0 z-10 h-full w-32 to-transparent"></div>
      <div className="absolute right-0 top-0 z-10 h-full w-32 to-transparent"></div>

      <div className="flex overflow-hidden">
        <motion.div
          className="flex gap-12 pr-12"
          animate={{
            x: ["0%", "-33.33%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {duplicatedSkills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center gap-4 group min-w-[120px]">
              <div className="w-24 h-24 bg-[#232329] rounded-2xl flex items-center justify-center border border-white/5 transition-all duration-500" style={{ 
                borderColor: skill.color,
                boxShadow: `0 0 15px ${skill.color}33`
              }}>
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className="w-12 h-12  transition-all duration-300"
                  style={{color: skill.color}}
                />
              </div>
              <span className="text-[#00ff99] font-['JetBrains_Mono'] text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                {skill.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;