import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLatest } from "../features/latest/latestAction";

export default function Latest() {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.latest);

  useEffect(() => {
    dispatch(fetchLatest());
  }, []);

  return (
    <div className="bg-[#0b2c3d] text-white font-sans">
      <div className="px-4 sm:px-10 md:px-16 py-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h2 className="text-2xl sm:text-3xl font-semibold">Latest Trailers</h2>
          <div className="flex gap-2">
            <button className="px-4 py-2 rounded-full font-bold bg-white/10 hover:bg-white/20 transition">
              Popular
            </button>
            <button className="px-4 py-2 rounded-full font-bold bg-[#1ed6c3] text-black">
              In Theaters
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-8 flex flex-col sm:flex-row gap-6">
          {/* Trailer Card 1 */}
          <div className="w-full sm:w-[300px] bg-black rounded-xl overflow-hidden relative">
            <img
              src="https://hablandotodomedia.com/wp-content/uploads/2025/05/p29399873_v_h8_aa.jpg"
              alt="Rosario"
              className="w-full object-cover"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/80 rounded-full w-12 h-12 flex items-center justify-center cursor-pointer">
              <span className="text-black text-xl">&#9654;</span>
            </div>
            <div className="bg-[#112f41] p-4 text-center">
              <h3 className="text-lg font-semibold">Rosario</h3>
              <p className="text-sm text-[#b0c4cd]">Watch Now</p>
            </div>
          </div>

          {/* Trailer Card 2 */}
          <div className="w-full sm:w-[300px] bg-black rounded-xl overflow-hidden relative">
            <img
              src="https://musesofmedia.ca/wp-content/uploads/2025/04/sinnerss.jpg?w=1024"
              alt="Sinners"
              className="w-full object-cover"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/80 rounded-full w-12 h-12 flex items-center justify-center cursor-pointer">
              <span className="text-black text-xl">&#9654;</span>
            </div>
            <div className="bg-[#112f41] p-4 text-center">
              <h3 className="text-lg font-semibold">Sinners</h3>
              <p className="text-sm text-[#b0c4cd]">Watch Now</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
