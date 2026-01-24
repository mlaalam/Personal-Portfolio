import CardProject from "../components/CardProject";

function Projects() {
  return (
    <div>
      <section className="w-[90%] lg:w-[70%] flex flex-col lg:flex-row items-center justify-between mx-auto mt-10 lg:mt-10 gap-10 lg:gap-0">
        <div className="flex flex-col gap-5 flex-1 text-center lg:text-left">
          <div className="max-w-2xl px-4 md:px-0 text-center md:text-left">
            <h1 className="text-3xl md:text-2xl lg:text-4xl font-bold text-white mb-6 leading-tight">
              Crafting <span className="text-[#00ff99]">Full Stack</span>{" "}
              Applications
            </h1>
            <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8">
              I bridge the gap between complex server-side logic and fluid
              client-side experiences. Below are my featured works using{" "}
              <strong className="text-white">Laravel</strong> for powerful APIs
              and <strong className="text-white">React</strong> for interactive
              user interfaces.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4">
              {["#Laravel", "#React.js", "#Tailwind", "#Jira", "#Uml"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="text-[#00ff99] text-[10px] md:text-xs font-mono border border-[#00ff99]/30 px-3 py-1 rounded-full bg-[#00ff99]/5 whitespace-nowrap"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </div>
          <div>
            <CardProject />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
