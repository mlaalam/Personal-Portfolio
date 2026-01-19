import { Link } from 'react-scroll';

function Navbar() {
  return (
    <div>
      <nav className="
        w-[90%] lg:w-[70%] 
        flex 
        fixed 
        left-1/2 
        -translate-x-1/2 
        z-50
        items-center 
        justify-between 
        px-8 
        py-4 
        mx-auto 
        mt-5
        rounded-full 
        border border-white/10 
        bg-[#1c1c22]/80 
        backdrop-blur-md
        shadow-2xl
      ">
        <div className="text-white font-bold text-xl font-serif">
          M<span className="text-[#00ff99] font-['JetBrains_Mono'] italic">.LAALAM</span>
        </div>
        <ul className="hidden md:flex justify-center gap-10 text-white font-['JetBrains_Mono']">
          {['home', 'resume', 'services', 'projects', 'contact'].map((item) => (
            <li key={item}>
              <Link
                to={item}
                smooth={true}
                duration={800}
                spy={true}
                offset={-100} 
                activeClass="text-[#00ff99] border-b-2 border-[#00ff99]" 
                className="
                  relative pb-1 cursor-pointer transition-all duration-300 
                  text-gray-400 hover:text-[#00ff99] capitalize
                "
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
        {/* <button className="hidden lg:block bg-[#00ff99] text-[#1c1c22] px-4 py-1.5 rounded-full font-['JetBrains_Mono'] font-bold hover:bg-[#00ff99]/80 transition-all">
          Hire me
        </button> */}
      </nav>
    </div>
  );
}

export default Navbar;