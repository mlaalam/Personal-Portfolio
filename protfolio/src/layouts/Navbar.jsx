import { NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <div>
      <nav className="
        w-[70%] 
        flex 
        fixed 
        left-1/2 
        -translate-x-1/2 
        z-40
        items-center 
        justify-between 
        px-8 
        py-4 
        mx-auto 
        mt-5
        rounded-full 
        border border-white/10 
        shadow-2xl
      ">
        <div className="text-white font-bold text-xl font-serif">M<span className="text-green-400 font-['JetBrains_Mono'] italic">.LAALAM</span></div>
        <div className="flex gap-6 text-gray-400">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `relative pb-1 transition-colors duration-300 ${isActive ? 'text-green-400' : 'text-gray-400 hover:text-white'}`
            }
          >
            {({ isActive }) => (
              <>
                Home
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-green-500 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                )}
              </>
            )}
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `relative pb-1 transition-colors duration-300 ${isActive ? 'text-green-400' : 'text-gray-400 hover:text-white'}`
            }
          >
            {({ isActive }) => (
              <>
                About
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-green-500 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                )}
              </>
            )}
          </NavLink>
          <NavLink 
            to="/projects" 
            className={({ isActive }) => 
              `relative pb-1 transition-colors duration-300 ${isActive ? 'text-green-400' : 'text-gray-400 hover:text-white'}`
            }
          >
            {({ isActive }) => (
              <>
                Projects
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-green-500 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                )}
              </>
            )}
          </NavLink>
          <NavLink 
            to="/services" 
            className={({ isActive }) => 
              `relative pb-1 transition-colors duration-300 ${isActive ? 'text-green-400' : 'text-gray-400 hover:text-white'}`
            }
          >
            {({ isActive }) => (
              <>
                Services
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-green-500 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                )}
              </>
            )}
          </NavLink>
          <NavLink 
            to="/resume" 
            className={({ isActive }) => 
              `relative pb-1 transition-colors duration-300 ${isActive ? 'text-green-400' : 'text-gray-400 hover:text-white'}`
            }
          >
            {({ isActive }) => (
              <>
                Resume
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-green-500 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                )}
              </>
            )}
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              `relative pb-1 transition-colors duration-300 ${isActive ? 'text-green-400' : 'text-gray-400 hover:text-white'}`
            }
          >
            {({ isActive }) => (
              <>
                Contact
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-green-500 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                )}
              </>
            )}
          </NavLink>
          
        </div>
      </nav>
    </div>
  )
}

export default Navbar