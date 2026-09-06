import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="border-t border-gray-800 bg-[#0a0a0a] text-white">

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* About */}
          <div className="lg:col-span-2">

            <h2 className="text-3xl md:text-4xl font-serif">
              Hadiya <span className="text-gray-500">Wafai.</span>
            </h2>

            <p className="mt-5 text-gray-400 leading-relaxed max-w-md">
              Aspiring Full Stack Web Developer passionate about building
              thoughtful, functional, and engaging digital experiences.
            </p>

            <p className="mt-6 text-sm text-gray-500">
              Currently learning, building and continuously evolving.
            </p>

          </div>


          {/* Navigation */}
          <div>

            <p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-6">
              Navigation
            </p>

            <div className="flex flex-col gap-4">

              <button
                onClick={() => navigate("/")}
                className="text-left text-gray-400 hover:text-white transition-colors duration-300"
              >
                Home
              </button>

              <button
                onClick={() => navigate("/projects")}
                className="text-left text-gray-400 hover:text-white transition-colors duration-300"
              >
                Projects
              </button>

              <button
                onClick={() => navigate("/about")}
                className="text-left text-gray-400 hover:text-white transition-colors duration-300"
              >
                About
              </button>

              <button
                onClick={() => navigate("/contact")}
                className="text-left text-gray-400 hover:text-white transition-colors duration-300"
              >
                Contact
              </button>

            </div>

          </div>


          {/* Contact */}
          <div>

            <p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-6">
              Connect
            </p>

            <div className="flex flex-col gap-4">

              <a
                href="mailto:yourmail@gmail.com"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Email
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                LinkedIn
              </a>

            </div>

          </div>

        </div>


        {/* Divider */}
        <div className="border-t border-gray-800 mt-16 pt-8">

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">

            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Hadiya Wafai. All rights reserved.
            </p>

            

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;