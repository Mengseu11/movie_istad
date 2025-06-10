import { useState, useEffect, useRef } from "react";
import { Search, Star } from "lucide-react";
import { useNavigate } from "react-router";


export default function SearchDropdown() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  // Debounced search effect
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchQuery.trim().length > 1) {
        handleSearch();
      } else {
        setSearchResults([]);
        setShowResults(false);
      }
    }, 500); // 500ms debounce

    return () => clearTimeout(delayDebounce);
  }, [searchQuery]);

  // Close results when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowResults(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleSearch = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=e23f92d8f170ad2fa576190611936eff&query=${encodeURIComponent(searchQuery)}`
      );
      
      if (!res.ok) throw new Error('Failed to fetch movie results');
      
      const data = await res.json();
      const formattedResults = data.results.map(movie => ({
        id: movie.id,
        title: movie.title,
        type: 'movie',
        checked: false,
        category: 'In Movies',
        releaseDate: movie.release_date,
        voteAverage: movie.vote_average,
        posterPath: movie.poster_path
      }));
      
      setSearchResults(formattedResults);
      setShowResults(true);
    } catch (err) {
      console.error("Search error:", err);
      setError(err.message);
      setSearchResults([]);
      setShowResults(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResultClick = (movie) => {
    navigate(`/movie/${movie.id}`);
    setShowResults(false);
    setSearchQuery("");
  };

  return (
    <div className="relative w-full max-w-full mx-auto" ref={searchRef}>
      <div className="flex items-center border border-gray-300 bg-white px-4 py-2 rounded">
        <Search className="text-gray-500 mr-2" size={20} />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            if (e.target.value.trim().length > 1) {
              setShowResults(true);
            }
          }}
          placeholder="Search for movies..."
          className="w-full outline-none bg-transparent text-gray-700 placeholder-gray-400"
          onFocus={() => searchQuery && setShowResults(true)}
        />
        {isLoading && (
          <div className="ml-2 text-gray-500 text-sm">Searching movies...</div>
        )}
      </div>
    
      {showResults && (
        <div className="absolute left-0 right-0 bg-white shadow-lg max-h-96 overflow-y-auto z-50 border border-gray-200 mt-1 rounded">
          {isLoading ? (
            <div className="p-3 text-gray-500">Loading movies...</div>
          ) : error ? (
            <div className="p-3 text-red-500">{error}</div>
          ) : searchResults.length > 0 ? (
            <div className="divide-y divide-gray-100">
              {searchResults.map((movie) => (
                <div
                  key={`movie-${movie.id}`}
                  className="flex p-3 hover:bg-gray-50 cursor-pointer"
                  onClick={() => handleResultClick(movie)}
                >
                  {movie.posterPath && (
                    <img
                      src={`https://image.tmdb.org/t/p/w92${movie.posterPath}`}
                      alt={movie.title}
                      className="w-8 h-10 object-cover rounded mr-3"
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="font-medium truncate text-black">{movie.title}</div>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <span className="mr-2">
                        {movie.releaseDate?.substring(0, 4) || 'Year unknown'}
                      </span>
                      <span className="flex items-center">
                        <Star className="w-3 h-3 mr-1 text-yellow-500" />
                        {movie.voteAverage?.toFixed(1) || 'N/A'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            searchQuery && (
              <div className="p-3 text-gray-500 italic">
                No movies found for "{searchQuery}"
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}