import React from 'react';
import banner from "../assets/banner.png";
import { CiPlay1 } from "react-icons/ci";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 flex flex-col md:flex-row items-center justify-between gap-10">

      {/* LEFT: Text Content */}
      <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">

        {/* Badge */}
        <span className="text-xs sm:text-sm text-purple-600 bg-purple-100 px-3 py-1 rounded-full inline-block">
          ✨ New: AI-Powered Tools Available
        </span>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-2xl lg:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight">
          Supercharge Your <br className="hidden md:block" /><span className='text-[#5039FD]'> Digital Workflow</span>
        </h1>

        {/* Description */}
        <p className="text-gray-500 text-xs sm:text-xxs md:text-[13px] leading-relaxed max-w-xl mx-auto md:mx-0">
          Access premium AI tools, design assets, templates, and productivity software — all in one place. Start creating faster today.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button className="bg-purple-600 cursor-pointer text-white px-5 py-2 rounded-full text-sm hover:bg-purple-700 transition">
            Explore Products
          </button>

          <button className="border border-purple-600 cursor-pointer text-purple-600 px-5 py-2 rounded-full text-sm hover:bg-purple-600 hover:text-white transition flex items-center gap-1 justify-center">
            <CiPlay1 /> Watch Demo
          </button>
        </div>

      </div>

      {/* RIGHT: Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={banner}
          alt="banner"
          className="w-full max-w-sm sm:max-w-md md:max-w-full object-contain"
        />
      </div>

    </div>
  );
};

export default Banner;