import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#031D33] text-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo + Welcome */}
        <div className="flex flex-col items-center md:items-start">
          <div className="text-left">
            <h2 className="text-2xl font-bold text-teal-300 leading-tight">
              THE <br /> MOVIE <br /> DB
            </h2>
          </div>
          <div className="mt-4">
            <button className="bg-white text-cyan-500 font-bold py-2 px-4 rounded">
              Hi Mengseu_168!
            </button>
          </div>
        </div>

        {/* THE BASICS */}
        <div>
          <h4 className="font-bold mb-2">THE BASICS</h4>
          <ul className="space-y-1 text-sm">
            <li>About TMDB</li>
            <li>Contact Us</li>
            <li>Support Forums</li>
            <li>API Documentation</li>
            <li>System Status</li>
          </ul>
        </div>

        {/* GET INVOLVED */}
        <div>
          <h4 className="font-bold mb-2">GET INVOLVED</h4>
          <ul className="space-y-1 text-sm">
            <li>Contribution Bible</li>
            <li>Add New Movie</li>
            <li>Add New TV Show</li>
          </ul>
        </div>

        {/* COMMUNITY */}
        <div>
          <h4 className="font-bold mb-2">COMMUNITY</h4>
          <ul className="space-y-1 text-sm">
            <li>Guidelines</li>
            <li>Discussions</li>
            <li>Leaderboard</li>
          </ul>
        </div>

        {/* LEGAL */}
        <div>
          <h4 className="font-bold mb-2">LEGAL</h4>
          <ul className="space-y-1 text-sm">
            <li>Terms of Use</li>
            <li>API Terms of Use</li>
            <li>Privacy Policy</li>
            <li>DMCA Policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
