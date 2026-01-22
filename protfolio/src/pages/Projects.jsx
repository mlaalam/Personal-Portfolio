import CardProject from "../components/CardProject"


function Projects() {

  return (
    <div>
      <section className="w-[90%] lg:w-[70%] flex flex-col lg:flex-row items-center justify-between mx-auto mt-10 lg:mt-10 gap-10 lg:gap-0">
        <div className="flex flex-col gap-5 flex-1 text-center lg:text-left">
          <h5 className="text-4xl text-white/80 font-['JetBrains_Mono']">
            Latest Projects
          </h5>
          <div>
              <CardProject />
          </div>
        </div>
        
      </section>
    </div>
  )
}

export default Projects