import hero from "../assets/images/hero.jpeg";
import cv from "../assets/cv/MouadLaalam.pdf";
import { HiDownload } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaCopy, FaCheck } from "react-icons/fa";
import Skills from '../components/Skills';
import { useState } from "react";
function Home() {
  const [copied, setCopied] = useState(false);
  const email = "mouad.laalam.dev@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <>
      <section className="w-[90%] lg:w-[70%] flex flex-col-reverse lg:flex-row items-center justify-between mx-auto mt-10 lg:mt-10 gap-10 lg:gap-0">
        <div className="flex flex-col gap-5 flex-1 text-center lg:text-left">
          <h5 className="text-white/80 font-['JetBrains_Mono'] text-sm lg:text-base">
            Full Stack Developer
          </h5>

          <h1 className="text-white font-bold text-4xl lg:text-7xl leading-tight">
            Hello I'm <br />
            <span className="text-[#00ff99]">Mouad Laalam</span>
          </h1>

          <p className="text-white/70 max-w-[600px] mx-auto lg:mx-0 font-['JetBrains_Mono'] text-sm lg:text-lg leading-relaxed">
            A passionate Full Stack Web Developer with strong skills in both
            Frontend and Backend development. Curious and driven by continuous
            learning, I design modern and functional interfaces. Persistent and
            proactive, I am always ready to take on new challenges.
          </p>
          <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
            <div>
              <button className="flex justify-center items-center gap-2 p-2 cursor-pointer  rounded-full text-[#00ff99] font-['JetBrains_Mono']  border-2 border-[#00ff99] hover:bg-[#00ff99] hover:text-white hover:rounded-full">
                <a href={cv} download="MouadLaalam.pdf">
                  Download cv{" "}
                </a>
                <HiDownload />
              </button>
            </div>
            <p className="border-2 p-2 border-[#00ff99] font-['JetBrains_Mono'] text-[#00ff99] rounded-full flex justify-center items-center gap-2 px-6">
              {email}
              <span
                onClick={handleCopy}
                className="cursor-pointer flex items-center"
              >
                {copied ? (
                  <FaCheck
                    className="text-white animate-pulse"
                    title="Copied!"
                  />
                ) : (
                  <FaCopy className="text-[#00ff99] hover:text-white transition-colors" />
                )}
              </span>
            </p>
            <ul className="flex gap-4 list-none">
              <li className="p-2 border-2 border-[#00ff99] rounded-full ">
                <a href="https://github.com/mlaalam">
                  <FaGithub className="text-[#00ff99]" />
                </a>{" "}
              </li>
              <li className="p-2 border-2 border-[#00ff99] rounded-full ">
                <a href="https://www.linkedin.com/in/mouadlaalam">
                  <FaLinkedin className="text-[#00ff99]" />
                </a>{" "}
              </li>
              <li className="p-2 border-2 border-[#00ff99] rounded-full ">
                <a href="https://wa.me/212618142557">
                  <IoLogoWhatsapp className="text-[#00ff99]" />
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>

        <div className="relative flex items-center justify-center flex-shrink-0">
          <div className="absolute w-[300px] h-[300px] lg:w-[480px] lg:h-[480px]">
            <svg
              className="w-full h-full animate-[spin_50s_linear_infinite]"
              viewBox="0 0 100 100"
              fill="none"
            >
              <circle
                cx="50"
                cy="50"
                r="48"
                stroke="#00ff99"
                strokeWidth="0.8"
                strokeDasharray="4 15 25 15"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="w-[260px] h-[260px] lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden z-10 border-4 border-transparent">
            <img
              src={hero}
              alt="Mouad Laalam"
              className="w-full h-full object-cover hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </section>
      <div className="w-[90%] lg:w-[70%] mx-auto mt-15 pb-10">
        <h2 className="text-4xl font-bold text-white">Skills</h2>
        <Skills />
      </div>
    </>
  );
}

export default Home;
