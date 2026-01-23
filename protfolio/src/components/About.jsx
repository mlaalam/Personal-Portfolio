import {StyledWrapper} from '../utils/aboutStyle'
import { IoLocation } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
function About() {
  return (
    <div>
        <h2 className="text-white/80 font-['JetBrains_Mono'] text-sm lg:text-xl">About me</h2>
        <p className="text-white/60 max-w-[90%] mx-auto lg:mx-0">
          Hello! I'm Mouad Laalam, a Full Stack Developer specializing in Laravel and React.js. I am deeply passionate about web development and the art of continuous learning. I focus on creating modern, high-performance interfaces that solve real-world problems. With a strong foundation in both frontend and backend technologies, I am constantly evolving to master the latest industry standards and deliver high-quality digital experiences.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 pt-8 gap-6 w-full lg:w-full max-h-[350px] overflow-y-auto overflow-x-hidden custom-scrollbar pr-4">
            <div
              className="p-6 rounded-xl border border-white/5 flex flex-col gap-2"
            >
              <span className="text-[#00ff99] font-['JetBrains_Mono'] text-sm flex items-center gap-1">
                <FaPhone className="text-[#00ff99]  w-5 h-5" /> + 212 618142557
              </span>
            </div>
            <div
              className="p-6 rounded-xl border border-white/5 flex flex-col gap-2"
            >
              <span className="text-[#00ff99] font-['JetBrains_Mono'] text-sm flex items-center gap-2">
                <MdAlternateEmail className="text-[#00ff99]  w-5 h-5" /> mouad.laalam.dev@gmail.com
              </span>
            </div>
            <div
              className="p-6 rounded-xl border border-white/5 flex flex-col gap-2"
            >
              <span className="text-[#00ff99] font-['JetBrains_Mono'] text-sm flex items-center gap-1">
                <IoLocation className="text-[#00ff99]  w-5 h-5" /> Casablanca
              </span>
            </div>
        </div>
          <div
              className=" p-6 flex flex-col justify-center items-center gap-2 w-full lg:w-[90%]"
            >
              <StyledWrapper>
                <div className="card">
                  <ul>
                    <li className="iso-pro">
                      <span /><span /><span />
                      <a href="https://www.linkedin.com/in/mouadlaalam" target="_blank" rel="noreferrer">
                        <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                          <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                        </svg>
                      </a>
                      <div className="text">LinkedIn</div>
                    </li>

                    {/* GitHub */}
                    <li className="iso-pro">
                      <span /><span /><span />
                      <a href="https://github.com/mlaalam" target="_blank" rel="noreferrer">
                        <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.5 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 389.9 8 244.8 8zM80.8 368c-4.8 3.6-1.4 8.2 3.8 12.4 5.2 4.3 10.8 5.9 15.4 1.4 4.8-3.6 1.4-8.2-3.8-12.4-5.2-4.3-10.8-5.9-15.4-1.4zm6.2 14.3c-6.1 6-6.1 12-1 15.6 5 3.3 11.5 1.3 15.9-6.1 4.7-6.3 4.7-12.3-1-15.6-4.7-3.3-10.5-1-14.9 6.1zm15.1 12.9c-3.9 6.3-.6 12.4 4.4 16.1 5.8 3.9 13.4 1.9 15.3-7.4 2-8.6-2.3-14.1-8.1-17.7-4.6-3.1-9.3-1.6-11.6 9z" />
                        </svg>
                      </a>
                      <div className="text">GitHub</div>
                    </li>
                    <li className="iso-pro">
                      <span /><span /><span />
                      <a href="https://wa.me/212618142557" target="_blank" rel="noreferrer">
                        <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.6-2.8-23.6-8.7-45-27.7-16.6-14.8-27.8-33.1-31.1-38.6-3.2-5.6-.3-8.6 2.5-11.4 2.5-2.5 5.5-6.5 8.3-9.7 2.8-3.2 3.7-5.5 5.5-9.3 1.9-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.6 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                        </svg>
                      </a>
                      <div className="text">WhatsApp</div>
                    </li>
                    <li className="iso-pro">
                      <span /><span /><span />
                      <a href="https://instagram.com/YOUR_USERNAME" target="_blank" rel="noreferrer">
                        <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                        </svg>
                      </a>
                      <div className="text">Instagram</div>
                    </li>
                  </ul>
                </div>
              </StyledWrapper>
            </div>
      </div>
  )
}

export default About


