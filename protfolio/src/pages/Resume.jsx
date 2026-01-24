import { useState } from 'react';
import Experience from '../components/Experience';
import Education from '../components/Education';

import About from '../components/About';
import Services from './Services';
import { User, Briefcase, GraduationCap, Code } from 'lucide-react';

const Resume = () => {
  const [activeTab, setActiveTab] = useState('about');

  const content = {
    experience: <Experience />,
    education: <Education />,            
    about: <About />,         
    services: <Services />,          
  };

  const tabs = [
    { id: 'about', label: 'About me', icon: <User size={20} /> },
    { id: 'experience', label: 'Experience', icon: <Briefcase size={20} /> },
    { id: 'education', label: 'Education', icon: <GraduationCap size={20} /> },
    { id: 'services', label: 'Services', icon: <Code size={20} /> },
  ];

  return (
    <>
      <div className="w-[90%] lg:w-[70%] flex flex-col lg:flex-row mx-auto mt-10 gap-10">
        <div className="flex flex-col gap-4 w-full lg:max-w-[380px] text-center lg:text-left">
          <h2 className="text-white/80 font-['JetBrains_Mono'] text-sm lg:text-xl">Why hire me?</h2>
          <p className="text-white/60 mb-6 max-w-[400px] mx-auto lg:mx-0">
            I am a dedicated developer with a strong focus on building scalable and user-friendly applications.
          </p>
          <div className="sticky top-0 z-40 py-4 lg:bg-transparent lg:relative lg:py-0">
            <div className="flex flex-row justify-center gap-4 lg:grid lg:grid-cols-1 lg:gap-4 overflow-x-auto no-scrollbar">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center justify-center  gap-3 p-3 lg:p-4 rounded-xl font-['JetBrains_Mono'] transition-all duration-300 flex-shrink-0
                    ${activeTab === tab.id 
                      ? 'bg-[#00ff99] text-[#1c1c22] shadow-[0_0_20px_rgba(0,255,153,0.3)]' 
                      : 'bg-[#232329] text-white hover:bg-[#00ff99]/20 border border-white/5'
                    } 
                    min-w-[60px] lg:w-full lg:justify-start`}
                >
                  {tab.icon}
                  <span className="hidden sm:block lg:block text-xs lg:text-base">
                    {tab.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1 w-full min-h-[400px]">
          {content[activeTab]}
        </div>
      </div>

        <section className="w-[90%] lg:w-[70%] flex flex-col-reverse lg:flex-row items-center justify-center mx-auto  lg:mt-30 gap-10 lg:gap-0">
        <div className="flex flex-wrap items-center justify-center gap-20 mt-5">
            <div className="flex items-center gap-3">
            <span className="text-6xl font-bold text-white font-['JetBrains_Mono']">
              2
            </span>
            <p className="text-white/60 font-['JetBrains_Mono'] text-sm leading-tight max-w-[100px]">
              Years of <br /> experience
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-6xl font-bold text-white font-['JetBrains_Mono']">
              12
            </span>
            <p className="text-white/60 text-sm font-['JetBrains_Mono'] leading-tight max-w-[100px]">
              Projects <br /> completed
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-6xl font-bold text-white font-['JetBrains_Mono']">
              5
            </span>
            <p className="text-white/60 text-sm font-['JetBrains_Mono'] leading-tight max-w-[100px]">
              Technologies <br />
              Mastered
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;