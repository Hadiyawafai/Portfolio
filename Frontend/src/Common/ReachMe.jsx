import React from "react";

const ReachMe = () => {
  return (
    <section className="mt-12 pt-10 border-t border-gray-800">

      {/* Heading */}
      <p className="text-sm uppercase tracking-[0.25em] text-gray-500 mb-6">
        Reach Me Directly
      </p>

      {/* Email */}
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=hadiyawafai@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-4"
      >

        {/* Email Icon */}
        <div
          className="w-12 h-12 rounded-full border border-gray-700
          flex items-center justify-center
          group-hover:bg-white
          group-hover:border-white
          transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 text-gray-400
            group-hover:text-black
            transition-colors duration-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-.876 1.794l-7.5 5.625a2.25 2.25 0 01-2.748 0l-7.5-5.625A2.25 2.25 0 012.25 6.993V6.75"
            />
          </svg>
        </div>

        {/* Email Text */}
        <div>
          <p className="text-sm text-gray-500 mb-1">
            Email
          </p>

          <p
            className="text-base md:text-lg text-white
            group-hover:text-gray-300
            transition-colors duration-300"
          >
            hadiyawafai@gmail.com
          </p>
        </div>

        {/* Arrow */}
        <span
          className="ml-auto text-gray-500
          group-hover:text-white
          group-hover:translate-x-1
          transition-all duration-300"
        >
          ↗
        </span>

      </a>

    </section>
  );
};

export default ReachMe;