import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#031D33] text-white py-10 px-4 sm:px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 text-center md:text-left">
        {/* Logo + Welcome */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h2 className="text-2xl font-bold text-teal-300 leading-tight">
            THE <br /> MOVIE <br /> DB
          </h2>
          <div>
            <button className="bg-white text-cyan-500 font-bold py-2 px-4 rounded hover:bg-gray-100 transition">
              Hi Mengseu_168!
            </button>
          </div>
        </div>

        {/* THE BASICS */}
        <div>
          <h4 className="font-bold mb-3 sm:mb-4">THE BASICS</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-teal-300 cursor-pointer transition-colors duration-200">About TMDB</li>
            <li className="hover:text-teal-300 cursor-pointer transition-colors duration-200">Contact Us</li>
            <li className="hover:text-teal-300 cursor-pointer transition-colors duration-200">Support Forums</li>
            <li className="hover:text-teal-300 cursor-pointer transition-colors duration-200">API Documentation</li>
            <li className="hover:text-teal-300 cursor-pointer transition-colors duration-200">System Status</li>
          </ul>
        </div>

        {/* GET INVOLVED */}
        <div>
          <h4 className="font-bold mb-3 sm:mb-4">GET INVOLVED</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-teal-300 cursor-pointer transition-colors duration-200">Contribution Bible</li>
            <li className="hover:text-teal-300 cursor-pointer transition-colors duration-200">Add New Movie</li>
            <li className="hover:text-teal-300 cursor-pointer transition-colors duration-200">Add New TV Show</li>
          </ul>
        </div>

        {/* COMMUNITY */}
        <div>
          <h4 className="font-bold mb-3 sm:mb-4">COMMUNITY</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-teal-300 cursor-pointer transition-colors duration-200">Guidelines</li>
            <li className="hover:text-teal-300 cursor-pointer transition-colors duration-200">Discussions</li>
            <li className="hover:text-teal-300 cursor-pointer transition-colors duration-200">Leaderboard</li>
          </ul>
        </div>

        {/* LEGAL */}
        <div className="sm:block hidden">
          <h4 className="font-bold mb-3 sm:mb-4 ">LEGAL</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-teal-300 cursor-pointer transition-colors duration-200">Terms of Use</li>
            <li className="hover:text-teal-300 cursor-pointer transition-colors duration-200">API Terms of Use</li>
            <li className="hover:text-teal-300 cursor-pointer transition-colors duration-200">Privacy Policy</li>
            <li className="hover:text-teal-300 cursor-pointer transition-colors duration-200">DMCA Policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}