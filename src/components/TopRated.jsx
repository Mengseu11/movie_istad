import React, { useEffect } from "react";
import { MoreVertical } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { fetchToprated } from "../features/toprated/toprateAction";
import { Link } from "react-router";

const getBadgeColor = (rating) => {
  if (rating >= 7.0) return "bg-green-600";
  if (rating >= 5.0) return "bg-yellow-500";
  return "bg-red-500";
};

export default function TopRated({ }) {
  const dispatch = useDispatch()
  const { data, status, error } = useSelector((state) => state.toprated);

  useEffect(()=>{
    dispatch(fetchToprated())
  },[])
  return (
    <div className="relative px-16">
      {/* Scroll container */}
      <div className="overflow-x-auto">
        <div className="flex gap-4 pr-10">
          {data?.results?.map((movie, idx) => (
            <div
              key={idx}
              className="min-w-[180px]  rounded-2xl shadow-lg overflow-hidden bg-white"
            >
               <Link to={`/movie/${movie.id}`}>
              <div className="relative">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.original_title}
                  className="w-full h-60 object-cover"
                />
                {/* <div className="absolute top-2 right-2 text-white bg-black/50 rounded-full p-1">
                  <MoreVertical size={18} />
                </div> */}
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

      {/* Right gradient fade */}
      <div className="pointer-events-none absolute top-0 right-10 h-full w-32  bg-gradient-to-l from-white to-transparent" />
    </div>
  );
}

