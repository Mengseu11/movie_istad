import { FaMinus, FaPlus } from "react-icons/fa";
import { ButtonIcon } from "../components/AppButton";
import { decrement, increment } from "../features/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMovies } from "../features/movie/movieAction";
export default function Home() {
  const dispatch = useDispatch();

  const { data, status, error } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  const onIncreasement = () => {
    console.log(increment());
    dispatch(increment());
  };
  const onDecreasement = () => {
    console.log(decrement());
    dispatch(decrement());
  };

  return (
    <main>
      <div className="px-4 py-2 grid grid-cols-2 gap-2">
        <ButtonIcon onClick={onIncreasement} icon={<FaPlus />} />
        <ButtonIcon onClick={onDecreasement} icon={<FaMinus />} />
      </div>
      <hr />
      <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3 p-10">
        {data.results &&
          data.results.map((movie) => (
            <li className="w-full mx-auto group sm:max-w-sm">
              <a href="#">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                  loading="lazy"
                  alt={movie.original_title}
                  className="w-full rounded-lg"
                />
                <div className="mt-3 space-y-2">
                  <span className="block text-indigo-600 text-sm">
                    {movie.release_date}
                  </span>
                  <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                    {movie.original_title}
                  </h3>
                  <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
                    {movie.overview}
                  </p>
                </div>
              </a>
            </li>
          ))}
      </ul>
    </main>
  );
}
