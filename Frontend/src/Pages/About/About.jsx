import React from "react";

const About = () => {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white px-6 md:px-12 lg:px-20">

      {/* ================= HERO ================= */}
      <section className="min-h-[80vh] flex items-center">

        <div className="max-w-7xl w-full">

          <p className="text-sm tracking-[0.3em] uppercase text-gray-500 mb-8">
            About Me
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">

            {/* Left */}
            <div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[0.9] tracking-tight">
                Hadiya
                <br />
                <span className="text-gray-500">
                  Wafai.
                </span>
              </h1>

              <div className="w-20 h-[1px] bg-gray-600 my-10"></div>

              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                A Computer Science graduate and aspiring Full Stack Developer
                who enjoys turning ideas into meaningful digital experiences.
              </p>

            </div>

            {/* Right */}
            <div className="lg:pb-2">

              <p className="text-gray-400 text-lg leading-relaxed">
                I’m a developer with a growing interest in building complete
                web applications — from designing interfaces and developing
                APIs to working with databases and exploring cloud
                technologies.
              </p>

              <p className="text-gray-500 text-lg leading-relaxed mt-6">
                My journey has taken me from frontend development and MERN
                stack projects to exploring .NET, AWS, Docker, and modern
                application architecture.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= EDUCATION ================= */}
      <section className="border-t border-gray-800 py-24">

        <p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-12">
          Education & Training
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Education */}
          <div className="border-l border-gray-700 pl-8">

            <p className="text-sm text-gray-500 mb-4">
              EDUCATION
            </p>

            <h2 className="text-3xl font-serif mb-4">
              B.Tech — Computer Science
            </h2>

            <p className="text-gray-400 text-lg">
              Government College of Engineering and Technology
              <br />
              Kashmir
            </p>

            <p className="text-gray-600 mt-4">
              Computer Science & Engineering
            </p>

          </div>


          {/* Training */}
          <div className="border-l border-gray-700 pl-8">

            <p className="text-sm text-gray-500 mb-4">
              PROFESSIONAL TRAINING
            </p>

            <h2 className="text-3xl font-serif mb-4">
              MERN Stack Development
            </h2>

            <p className="text-gray-400 text-lg">
              ILS — Regal Chowk, Srinagar
            </p>

            <p className="text-gray-500 mt-4">
              June 2025 — March 2026
            </p>

            <p className="text-gray-500 mt-4 leading-relaxed">
              Focused on modern web development using MongoDB, Express,
              React, Node.js and related frontend and backend technologies.
            </p>

          </div>

        </div>

      </section>


    {/* ================= EXPERIENCE ================= */}
<section className="py-24 border-t border-gray-800">

  <p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-12">
    Experience
  </p>

  <div className="max-w-5xl space-y-20">

    {/* Daneen Al Majaz */}
    <div className="relative border-l border-gray-700 pl-8 md:pl-12">

      <div className="absolute -left-[37px] md:-left-[53px] top-1
        w-3 h-3 rounded-full bg-white">
      </div>

      <p className="text-sm text-gray-500 mb-3">
        31 MARCH 2026 — JULY 2026
      </p>

      <h2 className="text-3xl md:text-4xl font-serif">
        Frontend Developer Intern
      </h2>

      <p className="text-gray-400 mt-3 text-lg">
        Daneen Al Majaz IT Services
      </p>

      <p className="text-gray-600 text-sm mt-2">
        On-site Internship
      </p>

      <p className="mt-8 text-gray-400 leading-relaxed text-lg max-w-3xl">
        Worked as an on-site Frontend Developer Intern, gaining practical
        experience in real-world web development and contributing to
        different projects and day-to-day technical tasks.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="border border-gray-800 rounded-xl p-6">
          <p className="text-gray-500 text-sm uppercase tracking-wider mb-3">
            Hotel Management System
          </p>

          <p className="text-gray-400 leading-relaxed">
            Worked on a hotel management software project, contributing
            to frontend development and application interfaces.
          </p>
        </div>

        <div className="border border-gray-800 rounded-xl p-6">
          <p className="text-gray-500 text-sm uppercase tracking-wider mb-3">
            Bivella E-Commerce
          </p>

          <p className="text-gray-400 leading-relaxed">
            Contributed to the development of an e-commerce website,
            working on frontend interfaces and user experience.
          </p>
        </div>

      </div>

      <div className="mt-6 border border-gray-800 rounded-xl p-6">

        <p className="text-gray-500 text-sm uppercase tracking-wider mb-3">
          Additional Work
        </p>

        <p className="text-gray-400 leading-relaxed">
          Also handled data-entry-related tasks and supported various
          requirements within the organization.
        </p>

      </div>

    </div>


    {/* SynForge */}
    <div className="relative border-l border-gray-700 pl-8 md:pl-12">

      <div className="absolute -left-[37px] md:-left-[53px] top-1
        w-3 h-3 rounded-full bg-white">
      </div>

      <p className="text-sm text-gray-500 mb-3">
        24 JULY 2026 — 24 AUGUST 2026
      </p>

      <h2 className="text-3xl md:text-4xl font-serif">
        Developer Intern
      </h2>

      <p className="text-gray-400 mt-3 text-lg">
        SynForge
      </p>

      <p className="text-gray-600 text-sm mt-2">
        Remote · Part-Time Internship
      </p>

      <p className="mt-8 text-gray-400 leading-relaxed text-lg max-w-3xl">
        Completed a remote, part-time developer internship focused on
        strengthening JavaScript fundamentals and learning the basics
        of .NET and backend development.
      </p>

      <div className="mt-8 border border-gray-800 rounded-xl p-6">

        <p className="text-gray-500 text-sm uppercase tracking-wider mb-4">
          Focus Areas
        </p>

        <div className="flex flex-wrap gap-3">

          <span className="px-4 py-2 border border-gray-700
            rounded-full text-sm text-gray-300">
            JavaScript
          </span>

          <span className="px-4 py-2 border border-gray-700
            rounded-full text-sm text-gray-300">
            .NET
          </span>

          <span className="px-4 py-2 border border-gray-700
            rounded-full text-sm text-gray-300">
            ASP.NET Core
          </span>

          

        </div>

      </div>

    </div>

  </div>

</section>


      {/* ================= CURRENT PHASE ================= */}
      <section className="py-24 border-t border-gray-800">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          <div>

            <p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-8">
              Current Phase
            </p>

            <h2 className="text-4xl md:text-6xl font-serif leading-tight">
              From frontend
              <br />
              <span className="text-gray-500">
                to full stack.
              </span>
            </h2>

          </div>

          <div>

            <p className="text-gray-400 text-lg leading-relaxed">
              After my internship, I continued expanding my development
              knowledge. I am currently strengthening my JavaScript
              fundamentals and learning the basics of .NET and ASP.NET Core
              for backend development.
            </p>

            <p className="text-gray-500 text-lg leading-relaxed mt-6">
              My goal is to become comfortable working across the complete
              application stack frontend, backend, databases, APIs,
              deployment, and cloud infrastructure.
            </p>

          </div>

        </div>

      </section>


      {/* ================= PROJECTS ================= */}
      <section className="py-24 border-t border-gray-800">

        <p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-12">
          Things I've Built
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* URL Shortener */}
          <div className="group border border-gray-800 rounded-2xl p-8
            hover:border-gray-500 transition-all duration-300">

            <p className="text-sm text-gray-600 mb-6">
              01
            </p>

            <h3 className="text-3xl font-serif mb-4">
              URL Shortener
            </h3>

            <p className="text-gray-400 leading-relaxed">
              A URL shortening application built using Node.js and EJS,
              focusing on backend logic and server side rendering.
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              <span className="px-3 py-1 border border-gray-700 rounded-full text-xs">
                Node.js
              </span>

              <span className="px-3 py-1 border border-gray-700 rounded-full text-xs">
                EJS
              </span>
            </div>

          </div>


          {/* Daily Wage */}
          <div className="group border border-gray-800 rounded-2xl p-8
            hover:border-gray-500 transition-all duration-300">

            <p className="text-sm text-gray-600 mb-6">
              02
            </p>

            <h3 className="text-3xl font-serif mb-4">
              Daily Wage Worker Platform
            </h3>

            <p className="text-gray-400 leading-relaxed">
              A web application developed to connect and manage daily wage
              workers, built with React, Node.js and MongoDB.
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              <span className="px-3 py-1 border border-gray-700 rounded-full text-xs">
                React
              </span>

              <span className="px-3 py-1 border border-gray-700 rounded-full text-xs">
                Node.js
              </span>

              <span className="px-3 py-1 border border-gray-700 rounded-full text-xs">
                MongoDB
              </span>

              <span className="px-3 py-1 border border-gray-700 rounded-full text-xs">
                Axios
              </span>
            </div>

          </div>


          {/* Ecommerce */}
          <div className="group border border-gray-800 rounded-2xl p-8
            hover:border-gray-500 transition-all duration-300">

            <p className="text-sm text-gray-600 mb-6">
              03
            </p>

            <h3 className="text-3xl font-serif mb-4">
              E-Commerce Website
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Currently working on an e-commerce application with a focus
              on responsive interfaces, product workflows, API integration,
              and modern React development.
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              <span className="px-3 py-1 border border-gray-700 rounded-full text-xs">
                React
              </span>

              <span className="px-3 py-1 border border-gray-700 rounded-full text-xs">
                JavaScript
              </span>

              <span className="px-3 py-1 border border-gray-700 rounded-full text-xs">
                API
              </span>
            </div>

          </div>


          {/* Portfolio */}
          <div className="group border border-gray-800 rounded-2xl p-8
            hover:border-gray-500 transition-all duration-300">

            <p className="text-sm text-gray-600 mb-6">
              04
            </p>

            <h3 className="text-3xl font-serif mb-4">
              Full Stack Portfolio
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Building this portfolio using React on the frontend while
              exploring .NET for the backend, with the goal of creating a
              complete full-stack application.
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              <span className="px-3 py-1 border border-gray-700 rounded-full text-xs">
                React
              </span>

              <span className="px-3 py-1 border border-gray-700 rounded-full text-xs">
                .NET
              </span>

              <span className="px-3 py-1 border border-gray-700 rounded-full text-xs">
                axios
              </span>
            </div>

          </div>

        </div>

      </section>


      {/* ================= SKILLS ================= */}
      <section className="py-24 border-t border-gray-800">

        <p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-12">
          Technical Skills
        </p>


        {/* Frontend */}
        <div className="mb-12">

          <p className="text-sm text-gray-500 uppercase tracking-wider mb-5">
            Frontend
          </p>

          <div className="flex flex-wrap gap-x-8 gap-y-4 text-lg text-gray-300">

            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Tailwind CSS</span>

          </div>

        </div>


        {/* Backend */}
        <div className="mb-12">

          <p className="text-sm text-gray-500 uppercase tracking-wider mb-5">
            Backend
          </p>

          <div className="flex flex-wrap gap-x-8 gap-y-4 text-lg text-gray-300">

            <span>Node.js</span>
            <span>REST APIs</span>
            <span>Express.js</span>
            <span>.NET</span>
            <span>ASP.NET Core</span>

          </div>

        </div>


        {/* Databases */}
        <div className="mb-12">

          <p className="text-sm text-gray-500 uppercase tracking-wider mb-5">
            Databases
          </p>

          <div className="flex flex-wrap gap-x-8 gap-y-4 text-lg text-gray-300">

            <span>MongoDB</span>
            <span>PostgreSQL</span>

          </div>

        </div>


        {/* Tools */}
        <div className="mb-12">

          <p className="text-sm text-gray-500 uppercase tracking-wider mb-5">
            Tools & Workflow
          </p>

          <div className="flex flex-wrap gap-x-8 gap-y-4 text-lg text-gray-300">

            <span>Git</span>
            <span>GitHub</span>
            <span>Postman</span>
            <span>Axios</span>
            <span>VS Code</span>
            <span>Visual Studio</span>

          </div>

        </div>


        {/* Languages */}
        <div>

          <p className="text-sm text-gray-500 uppercase tracking-wider mb-5">
            Programming Languages
          </p>

          <div className="flex flex-wrap gap-3">

            <span className="px-4 py-2 border border-gray-700 rounded-full text-sm text-gray-300">
              JavaScript
            </span>

            <span className="px-4 py-2 border border-gray-700 rounded-full text-sm text-gray-300">
              C# — Learning
            </span>

            <span className="px-4 py-2 border border-gray-700 rounded-full text-sm text-gray-300">
              Python — Basics
            </span>

          </div>

        </div>

      </section>


      {/* ================= CURRENTLY LEARNING ================= */}
      <section className="py-24 border-t border-gray-800">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          <div>

            <p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-8">
              Currently Exploring
            </p>

            <h2 className="text-4xl md:text-6xl font-serif leading-tight">
              Always
              <br />
              <span className="text-gray-500">
                learning.
              </span>
            </h2>

          </div>


          <div className="flex flex-wrap content-start gap-3">

            <span className="px-5 py-3 border border-gray-700 rounded-full text-gray-300 hover:border-white transition-all duration-300">
              .NET
            </span>

            <span className="px-5 py-3 border border-gray-700 rounded-full text-gray-300 hover:border-white transition-all duration-300">
              ASP.NET Core
            </span>

            <span className="px-5 py-3 border border-gray-700 rounded-full text-gray-300 hover:border-white transition-all duration-300">
              C#
            </span>

            <span className="px-5 py-3 border border-gray-700 rounded-full text-gray-300 hover:border-white transition-all duration-300">
              AWS
            </span>

            <span className="px-5 py-3 border border-gray-700 rounded-full text-gray-300 hover:border-white transition-all duration-300">
              Docker
            </span>

            <span className="px-5 py-3 border border-gray-700 rounded-full text-gray-300 hover:border-white transition-all duration-300">
              JavaScript
            </span>

            <span className="px-5 py-3 border border-gray-700 rounded-full text-gray-300 hover:border-white transition-all duration-300">
              Cloud Technologies
            </span>

          </div>

        </div>

      </section>


      {/* ================= CLOSING ================= */}
      <section className="py-32 border-t border-gray-800">

        <div className="max-w-4xl">

          <p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-8">
            What's Next
          </p>

          <h2 className="text-4xl md:text-6xl font-serif leading-tight">
            Building with purpose.
            <br />
            <span className="text-gray-500">
              Learning without limits.
            </span>
          </h2>

          <p className="mt-8 text-gray-400 text-lg leading-relaxed max-w-3xl">
            I’m working toward becoming a well-rounded Full Stack Developer
            who can understand an application beyond just its interface.
            From frontend experiences and backend APIs to databases, cloud
            infrastructure, and deployment, I want to keep expanding my
            ability to build reliable and meaningful software.
          </p>

        </div>

      </section>

    </main>
  );
};

export default About;