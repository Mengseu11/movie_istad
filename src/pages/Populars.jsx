import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppNavbar from "../components/AppNavbar";
import { Link, NavLink } from "react-router";
import Footer from "../components/Footer";
import { LayoutGrid, Star } from "lucide-react";
import { fetchPopular } from "../features/popular/popularAction";
export default function Populars() {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.popular);
  useEffect(() => {
    dispatch(fetchPopular());
  }, []);
  const submenuNav = [
    { title: "Now Playing", path: "/nowplaying" },
    { title: "Popular", path: "/populars" },
    { title: "Top Rated", path: "/toprateds" },
    { title: "Upcoming", path: "/upcoming" },
  ];
  return (
    <div className="mt-5">
      <AppNavbar />
      <div className="sticky top-20 z-40">
        <ul className="items-center bg-sky-950 space-y-6 lg:flex lg:space-x-6 lg:space-y-0 px-20 font-bold sticky ">
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
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5 px-24 mt-10 mb-5">
        {data.results &&
          data.results.map((movie) => (
            <li className="min-w-60 rounded-xl overflow-hidden border  shadow-md bg-white">
              {/* Movie Poster */}
              <Link to={`/movie/${movie.id}`}>
                <div className="relative">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.original_title}
                    className="w-full h-80 object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-3">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">
                    {movie.original_title}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-gray-600">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-blue-600" />
                      <span>{movie.vote_average}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <LayoutGrid className="w-4 h-4 text-blue-600" />
                      <span>{movie.popularity}</span>
                    </div>
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
