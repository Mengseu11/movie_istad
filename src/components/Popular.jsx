import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopular } from "../features/popular/popularAction";
import { Link } from "react-router";

const getBadgeColor = (rating) => {
  if (rating >= 7.0) return "bg-green-600";
  if (rating >= 5.0) return "bg-yellow-500";
  return "bg-red-500";
};

export default function Popular() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.popular);

  useEffect(() => {
    dispatch(fetchPopular());
  }, []);

  return (
    <div className="relative px-4 sm:px-8 md:px-16">
      {/* Horizontal Scroll Container */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 pr-10">
          {data?.results?.map((movie, idx) => (
            <div
              key={idx}
              className="min-w-[160px] sm:min-w-[180px] rounded-2xl shadow-lg overflow-hidden bg-white flex-shrink-0"
            >
              <Link to={`/movie/${movie.id}`}>
                <div className="relative">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.original_title}
                    className="w-full h-[240px] object-cover"
                  />
                  <div
                    className={`absolute bottom-2 left-2 text-white text-sm font-semibold rounded-full w-10 h-10 flex items-center justify-center ${getBadgeColor(
                      movie.vote_average
                    )}`}
                  >
                    {Math.round(movie.vote_average * 10)}%
                  </div>
                </div>
                <div className="p-3">
                  <div className="text-sm font-semibold text-gray-800 hover:text-blue-700 leading-tight truncate">
                    {movie.original_title}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {movie.release_date}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Right Gradient Fade */}
      <div className="pointer-events-none absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-white to-transparent" />
    </div>
  );
}
