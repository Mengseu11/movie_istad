import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router";
import { fetchMoviesDetail } from "../features/movie/movieAction";
import AppNavbar from "../components/AppNavbar";
import { Play } from "lucide-react";

export default function MovieDetail() {
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    dispatch(fetchMoviesDetail(params.id));
  }, []);
  const { detail } = useSelector((state) => state.movie);
  return (
    <>
    <AppNavbar/>
      <section
       /* style={{
            // backgroundImage : `url(https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/${detail.backdrop_path}`
        }}
       className={`relative bg-cover bg-center bg-no-repeat`} */>
        {/* <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div> */}
   
    <div className="relative w-full h-screen text-white  ">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-50"
        style={{
          backgroundImage: `url(https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/${detail.backdrop_path}`,
        }}
      />
      {/* Overlay content */}
      <div className="relative z-10 top-1/4 justify-between  px-16 py-8">
        
        
        {/* Movie Info */}
        <div className="max-w-xl ">
          <h1 className="text-5xl font-bold">{detail.original_title}</h1>
          <div className="flex items-center gap-4 mt-3 text-sm text-gray-300">
            <span>⭐ {detail.vote_average}</span>
            <span>🎬 120 mins</span>
            <span>HD</span>
            <span>16+</span>
          </div>
          <p className="mt-4 text-gray-300 text-base font-semibold leading-relaxed">
            {detail.overview}
          </p>
          <button className="mt-6 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded font-semibold text-white">
            <Play className="w-4 h-4" />
            Watch Now
          </button>
        </div>
      </div>
      <div className="pointer-events-none absolute top-0 left-0 h-full w-2/3  bg-gradient-to-r from-black/90 to-transparent" />
    </div>


      </section>
      </>
  );
}
    