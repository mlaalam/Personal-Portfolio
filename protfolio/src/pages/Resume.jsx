import { useState } from 'react';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Skills from '../components/Skills';
import About from '../components/About';

const Resume = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const content = {
    experience: <Experience />,
    education: <Education />,            
    about: <About />,         
  };

  return (
    <>
      <div className="w-[90%] lg:w-[80%] flex flex-col lg:flex-row mx-auto mt-10 gap-10">
        <div className="flex flex-col gap-4 w-full lg:max-w-[380px] text-center lg:text-left">
        <h2 className="text-4xl font-bold text-white mb-2">Why hire me?</h2>
        <p className="text-white/60 mb-6 max-w-[400px] mx-auto lg:mx-0">
          I am a dedicated developer with a strong focus on building scalable and user-friendly applications.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
          <button 
            onClick={() => setActiveTab('experience')}
            className={`p-4 rounded-xl font-['JetBrains_Mono'] transition-all duration-300 ${activeTab === 'experience' ? 'bg-[#00ff99] text-[#1c1c22] shadow-[0_0_20px_rgba(0,255,153,0.3)]' : 'bg-[#232329] text-white hover:bg-[#00ff99]/20'}`}
          >
            Experience
          </button>
          
          <button 
            onClick={() => setActiveTab('education')}
            className={`p-4 rounded-xl font-['JetBrains_Mono'] transition-all duration-300 ${activeTab === 'education' ? 'bg-[#00ff99] text-[#1c1c22] shadow-[0_0_20px_rgba(0,255,153,0.3)]' : 'bg-[#232329] text-white hover:bg-[#00ff99]/20'}`}
          >
            Education
          </button>
          
          <button 
            onClick={() => setActiveTab('about')}
            className={`p-4 rounded-xl font-['JetBrains_Mono'] transition-all duration-300 ${activeTab === 'about' ? 'bg-[#00ff99] text-[#1c1c22] shadow-[0_0_20px_rgba(0,255,153,0.3)]' : 'bg-[#232329] text-white hover:bg-[#00ff99]/20'}`}
          >
            About me
          </button>
        </div>
      </div>
      <div className="flex-1 w-full min-h-[400px]">
        {content[activeTab]}
      </div>
    </div>
    <div className="w-[90%] lg:w-[80%] mx-auto mt-10 gap-10">
      <h2 className="text-4xl font-bold text-white">My Skills</h2>
      <Skills />
    </div>
  </>
  );
};

export default Resume;