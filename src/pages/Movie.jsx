import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../features/movie/movieAction";
import { Link, NavLink } from "react-router";
import AppNavbar from "../components/AppNavbar";
import Nowplaying from "./Nowplaying";
import Footer from "../components/Footer";
import { LayoutGrid, Star } from "lucide-react";

export default function Movie() {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.movie);
  useEffect(() => {
    dispatch(fetchMovies());
  }, []);
  const submenuNav = [
    { title: "Now Playing", path: "/nowplaying" },
    { title: "Popular", path: "/populars" },
    { title: "Top Rated", path: "/toprateds" },
    { title: "Upcoming", path: "/upcoming" },
  ];
  const getBadgeColor = (rating) => {
    if (rating >= 7.0) return "bg-green-600";
    if (rating >= 5.0) return "bg-yellow-500";
    return "bg-red-500";
  };
  return (
    <div className="mt-5">
      <AppNavbar />
      <div className="sticky top-20 z-40">
        <ul className="flex overflow-x-auto whitespace-nowrap bg-sky-950 space-x-4 px-4 sm:px-10  lg:px-20 py-4 font-bold">
          {submenuNav.map((item, idx) => {
            return (
              <li key={idx}>
                {/* <Link
                        to={item.path}
                        className="block text-white  hover:text-gray-300  hover:bg-slate-500 hover:p-2 rounded-xl "
                      >
                        {item.title}
                      </Link> */}
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `block text-white  hover:text-gray-300  hover:bg-slate-500 p-2 rounded-sm ${
                      isActive ? " bg-sky-900 p-1 underline" : ""
                    }`
                  }
                >
                  {item.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 px-4 sm:px-10 lg:px-40 mt-10 mb-5">
        {data.results &&
          data.results.map((movie) => (
            <li className=" flex justify-center">
              {/* Movie Poster */}
              <Link to={`/movie/${movie.id}`}>
                <div className="w-[180px] sm:w-[200px] rounded-xl overflow-hidden bg-white shadow-md font-sans relative">
                  {/* Poster */}
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                    alt={movie.original_title}
                    className="w-full h-80 object-cover block"
                  />

                  {/* Score badge */}
                  <div
                    className={`absolute bottom-20 left-2 text-white text-sm font-semibold rounded-full w-10 h-10 flex items-center justify-center ${getBadgeColor(
                      movie.vote_average
                    )}`}
                  >
                    {Math.round(movie.vote_average * 10)}%
                  </div>

                  {/* Text section */}
                  <div style={{ padding: "1rem", paddingTop: "2rem" }}>
                    <h3 className="text-base font-bold mb-2 leading-[1.2] line-clamp-1 text-black">
                      {movie.original_title}
                    </h3>
                    <p
                      style={{ color: "#888", fontSize: "0.85rem", margin: 0 }}
                    >
                      {new Date(movie.release_date).toLocaleDateString(
                        "en-US",
                        {
                          month: "short",
                          day: "2-digit",
                          year: "numeric",
                        }
                      )}
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
      </ul>
      <Footer />
    </div>
  );
}
