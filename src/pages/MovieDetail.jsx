import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router";
import { fetchMoviesDetail, } from "../features/movie/movieAction";
import AppNavbar from "../components/AppNavbar";
import { Play, Star, Clock, Calendar, Info } from "lucide-react";
import Footer from "../components/Footer";


export default function MovieDetail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  
  const { detail, similarMovies } = useSelector((state) => state.movie);
  
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        await dispatch(fetchMoviesDetail(params.id));
        // await dispatch(fetchSimilarMovies(params.id));
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, [dispatch, params.id]);

  const formatRuntime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  const handleWatchNow = () => {
    // Implement your watch now functionality
    console.log("Playing movie:", detail.title);
  };

  if (isLoading) {
    return (
      <>
        <AppNavbar />
        <div className="w-full h-screen flex items-center justify-center bg-gray-900 text-white">
          <div className="animate-pulse text-xl">Loading movie details...</div>
        </div>
      </>
    );
  }

  if (!detail) {
    return (
      <>
        <AppNavbar />
        <div className="w-full h-screen flex items-center justify-center bg-gray-900 text-white">
          <div className="text-xl">Movie not found</div>
        </div>
      </>
    );
  }

  return (
    <>
      <AppNavbar />
      
      {/* Movie Hero Section */}
      <section className="relative w-full min-h-screen text-white">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center brightness-50"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${detail.backdrop_path})`,
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="pointer-events-none absolute top-0 left-0 h-full w-2/3 bg-gradient-to-r from-black/90 to-transparent" />
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">{detail.title || detail.original_title}</h1>
            
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>{detail.vote_average?.toFixed(1)}/10</span>
              </div>
              
              {detail.runtime && (
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{formatRuntime(detail.runtime)}</span>
                </div>
              )}
              
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{detail.release_date?.substring(0, 4)}</span>
              </div>
              
              <div className="flex items-center gap-1">
                <Info className="w-4 h-4" />
                <span>{detail.adult ? "18+" : "PG-13"}</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 mb-6">
              {detail.genres?.map(genre => (
                <span 
                  key={genre.id}
                  className="px-3 py-1 bg-gray-800/50 rounded-full text-sm"
                >
                  {genre.name}
                </span>
              ))}
            </div>
            
            <p className="text-gray-300 mb-8 leading-relaxed">{detail.overview}</p>
            
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={handleWatchNow}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md font-semibold transition-colors"
              >
                <Play className="w-5 h-5" />
                Watch Now
              </button>
              
              <button 
                onClick={() => window.open(`https://www.imdb.com/title/${detail.imdb_id}`, '_blank')}
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-md font-semibold transition-colors"
              >
                View on IMDB
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Similar Movies Section */}
      {similarMovies && similarMovies.length > 0 && (
        <section className="bg-gray-900 py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8">Similar Movies</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {similarMovies.slice(0, 5).map(movie => (
                <div 
                  key={movie.id}
                  className="cursor-pointer group"
                  onClick={() => navigate(`/movie/${movie.id}`)}
                >
                  <div className="relative aspect-[2/3] rounded-lg overflow-hidden mb-2">
                    <img
                      src={movie.poster_path 
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : '/placeholder-movie.jpg'}
                      alt={movie.title}
                      className="w-full h-full object-cover group-hover:opacity-80 transition-opacity"
                    />
                  </div>
                  <h3 className="font-semibold truncate">{movie.title}</h3>
                  <div className="flex items-center text-sm text-gray-400">
                    <Star className="w-3 h-3 mr-1 text-yellow-400" />
                    {movie.vote_average?.toFixed(1)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      <Footer/>
    </>
  );
}