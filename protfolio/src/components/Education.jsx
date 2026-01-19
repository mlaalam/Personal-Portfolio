
import { useState , useEffect} from "react";
import axios from "axios";
function Education() {
  const [edica, setEdica] = useState([]);
    useEffect(() => {
      axios
        .get("http://localhost:3000/educations")
        .then((res) => setEdica(res.data))
        .catch((err) => console.error(err));
    }, []);
    return (
      <div>
        <h2 className="text-4xl font-bold text-white mb-2">My Educations</h2>
        <p className="text-white/60 mb-6 max-w-[600px] mx-auto lg:mx-0">
          Specialized Full Stack Developer crafting high-performance web
          applications using Laravel's robust backend and React's dynamic frontend
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 pt-8 gap-6 w-full lg:w-[90%] max-h-[450px] overflow-y-auto overflow-x-hidden custom-scrollbar pr-4">
          {edica.map((item, index) => (
            <div
              key={index}
              className="bg-[#232329] p-6 rounded-xl border border-white/5 flex flex-col gap-2"
            >
              <span className="text-[#00ff99] font-['JetBrains_Mono'] text-sm">
                {item.duration}
              </span>
              <h4 className="text-md font-bold text-white leading-tight">
                {item.degree}
              </h4>
              <p className="text-white/60 text-sm italic">{item.institution}</p>
            </div>
          ))}
        </div>
      </div>
    );
}

export default Education