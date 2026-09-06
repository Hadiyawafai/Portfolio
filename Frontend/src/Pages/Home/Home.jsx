
import {React,useRef} from "react";
import { useNavigate } from "react-router-dom";
import Newspaper from "../../Common/Newspaper";
import { contactDetails } from "../../Services/ContactServices";

const Home = () => {
  const navigate=useNavigate()
  const contactRef=useRef()

  const scrollToContactUs=()=>{
    contactRef.current?.scrollIntoView({
      behavior:"smooth",
    });
  };
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white px-6 md:px-12 lg:px-20">

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center">

        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>

            <p className="text-sm tracking-[0.3em] uppercase text-gray-500 mb-6">
              Full Stack Web Developer
            </p>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[0.9] tracking-tight">
              Hadiya
              <br />
              <span className="text-gray-400">Wafai.</span>
            </h1>

            <div className="w-20 h-[1px] bg-gray-600 my-8"></div>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl">
              I’m an aspiring Full Stack Web Developer passionate about
              transforming ideas into thoughtful, functional, and engaging
              digital experiences.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">

              <button onClick={()=>navigate('/about')} className="px-7 py-3 bg-white text-black rounded-full
                hover:bg-gray-200 transition-all duration-300">
                View My Work
              </button>

              <button  onClick={scrollToContactUs} className="px-7 py-3 border border-gray-600
                rounded-full text-white hover:border-white
                transition-all duration-300">
                Contact Me
              </button>

            </div>

          </div>


          {/* Right Content */}
          <div className="relative flex justify-center lg:justify-end">

            <div className="relative w-full max-w-md">

              {/* Decorative Circle */}
              <div className="absolute -top-10 -right-10
                w-32 h-32 border border-gray-700 rounded-full">
              </div>

              <div className="absolute -bottom-10 -left-10
                w-24 h-24 border border-gray-800 rounded-full">
              </div>


              {/* Developer Card */}
              <div className="relative border border-gray-800
                bg-[#111111] rounded-2xl p-8
                shadow-2xl">

                <div className="flex items-center gap-2 mb-8">

                  <div className="w-3 h-3 rounded-full bg-gray-600"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-700"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-800"></div>

                </div>

                <p className="text-gray-500 text-sm mb-4">
                  developer.js
                </p>

                <div className="font-mono text-sm md:text-base leading-8">

                  <p>
                    <span className="text-gray-500">const</span>{" "}
                    <span className="text-white">developer</span> = {"{"}
                  </p>

                  <p className="pl-6">
                    <span className="text-gray-500">name:</span>{" "}
                    "Hadiya Wafai",
                  </p>

                  <p className="pl-6">
                    <span className="text-gray-500">role:</span>{" "}
                    "Full Stack Developer",
                  </p>

                  <p className="pl-6">
                    <span className="text-gray-500">frontend:</span>{" "}
                    ["React", "JavaScript"],
                  </p>

                  <p className="pl-6">
                    <span className="text-gray-500">backend:</span>{" "}
                    ["Node.js", ".NET"],
                  </p>

                  <p className="pl-6">
                    <span className="text-gray-500">database:</span>{" "}
                    ["mongoDB", "PostgreSQL"],
                  </p>

                  <p className="pl-6">
                    <span className="text-gray-500">Tools:</span>{" "}
                    ["Git","GitHub", "Postman","VsCode"],
                  </p>
                  <p>
                    {"}"};
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


  
{/* Technologies */}
<section className="border-t border-gray-800 py-16">

  <p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-10">
    Technologies & Tools
  </p>

  {/* Frontend */}
  <div className="mb-10">
    <p className="text-sm text-gray-500 mb-4 uppercase tracking-wider">
      Frontend
    </p>

    <div className="flex flex-wrap gap-x-8 gap-y-4 text-gray-300 text-lg">
      <span className="hover:text-white transition-colors duration-300">
        React
      </span>

      <span className="hover:text-white transition-colors duration-300">
        JavaScript
      </span>

      <span className="hover:text-white transition-colors duration-300">
        HTML
      </span>

      <span className="hover:text-white transition-colors duration-300">
        CSS
      </span>

      <span className="hover:text-white transition-colors duration-300">
        Tailwind CSS
      </span>
    </div>
  </div>


  {/* Backend */}
  <div className="mb-10">
    <p className="text-sm text-gray-500 mb-4 uppercase tracking-wider">
      Backend
    </p>

    <div className="flex flex-wrap gap-x-8 gap-y-4 text-gray-300 text-lg">
      <span className="hover:text-white transition-colors duration-300">
        Node.js
      </span>

      <span className="hover:text-white transition-colors duration-300">
        REST APIs
      </span>

    

      <span className="hover:text-white transition-colors duration-300">
        .NET (Exploring)
      </span>

      <span className="hover:text-white transition-colors duration-300">
        ASP.NET Core (Basics)
      </span>
    </div>
  </div>


  {/* Databases */}
  <div className="mb-10">
    <p className="text-sm text-gray-500 mb-4 uppercase tracking-wider">
      Databases
    </p>

    <div className="flex flex-wrap gap-x-8 gap-y-4 text-gray-300 text-lg">
      <span className="hover:text-white transition-colors duration-300">
        MongoDB
      </span>

      <span className="hover:text-white transition-colors duration-300">
        PostgreSQL
      </span>
    </div>
  </div>


  {/* Tools */}
  <div className="mb-10">
    <p className="text-sm text-gray-500 mb-4 uppercase tracking-wider">
      Development Tools
    </p>

    <div className="flex flex-wrap gap-x-8 gap-y-4 text-gray-300 text-lg">
      <span className="hover:text-white transition-colors duration-300">
        Git
      </span>

      <span className="hover:text-white transition-colors duration-300">
        GitHub
      </span>

      <span className="hover:text-white transition-colors duration-300">
        Postman
      </span>

      <span className="hover:text-white transition-colors duration-300">
        Visual Studio
      </span>

      <span className="hover:text-white transition-colors duration-300">
        VS Code
      </span>
    </div>
  </div>


  {/* Programming Languages */}
  <div className="mb-10">
    <p className="text-sm text-gray-500 mb-4 uppercase tracking-wider">
      Programming Languages
    </p>

    <div className="flex flex-wrap gap-x-8 gap-y-4 text-gray-300 text-lg">
      <span className="hover:text-white transition-colors duration-300">
        JavaScript
      </span>

      <span className="hover:text-white transition-colors duration-300">
        C# (Learning)
      </span>

      <span className="hover:text-white transition-colors duration-300">
        Python (Basics)
      </span>
    </div>
  </div>


  {/* Currently Learning */}
  <div>
    <p className="text-sm text-gray-500 mb-4 uppercase tracking-wider">
      Currently Exploring
    </p>

    <div className="flex flex-wrap gap-3">

      <span className="px-4 py-2 border border-gray-700
        rounded-full text-sm text-gray-300
        hover:border-gray-400 hover:text-white
        transition-all duration-300">
        .NET
      </span>

      <span className="px-4 py-2 border border-gray-700
        rounded-full text-sm text-gray-300
        hover:border-gray-400 hover:text-white
        transition-all duration-300">
        Docker
      </span>

      <span className="px-4 py-2 border border-gray-700
        rounded-full text-sm text-gray-300
        hover:border-gray-400 hover:text-white
        transition-all duration-300">
        AWS
      </span>

    </div>
  </div>

</section>




      {/* Short Introduction */}
      <section className="py-24 max-w-4xl">

        <p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-6">
          My Approach
        </p>

        <h2 className="text-3xl md:text-5xl font-serif leading-tight">
          Learning, building, and continuously
          <span className="text-gray-500"> evolving.</span>
        </h2>

        <p className="mt-8 text-gray-400 text-lg leading-relaxed">

          I’m currently strengthening my foundation in full stack development
          while expanding my understanding of cloud technologies,
          containerization, and modern application architecture. My goal is to
          grow into a developer capable of contributing across the entire
          application lifecycle—from interface and backend development to
          deployment and cloud infrastructure.

        </p>

      </section>
      <div ref={contactRef}>
  <Newspaper />
</div>
    </main>
  );
};

export default Home;

