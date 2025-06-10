import React from "react";

export default function Carousel() {
  return (
    <div
      className="text-white py-24 px-4 sm:px-6 md:px-12 lg:px-24 w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://miro.medium.com/v2/resize:fit:1400/1*zPu_FUbvUEWBtUZ-8o2HWQ.jpeg')",
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Welcome.
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-medium mb-8">
          Millions of movies, TV shows and people to discover. Explore now.
        </p>

        {/* Optional Responsive Search Bar */}
        {/* 
        <div className="flex flex-col sm:flex-row max-w-xl mx-auto rounded-full overflow-hidden bg-white shadow-lg">
          <input
            type="text"
            placeholder="Search for a movie, tv show, person……"
            className="w-full px-5 py-3 text-gray-700 outline-none"
          />
          <button className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-3 font-semibold">
            Search
          </button>
        </div>
        */}
      </div>
    </div>
  );
}
