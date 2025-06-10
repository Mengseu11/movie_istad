export default function PeopleCards({ name, profile_path, popularity, overview, original_title }) {
  return (
    <div className="w-full max-w-xs sm:max-w-[280px] md:max-w-[300px] rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
      {/* Image with aspect ratio and responsive sizing */}
      <div className="relative pt-[150%] overflow-hidden">
        <img
          src={profile_path || '/placeholder-person.jpg'} // Fallback for missing images
          alt={name}
          className="absolute top-0 left-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.target.src = '/placeholder-person.jpg'; // Fallback image on error
          }}
        />
      </div>
      
      {/* Content section */}
      <div className="p-4 sm:p-5">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 line-clamp-1">
          {name}
        </h2>
        <p className="text-sm text-gray-500 line-clamp-1 mt-1">
          {original_title}
        </p>
        
        {/* Popularity badge - hidden on smallest screens */}
        <div className="mt-2 flex items-center">
          <span className="text-xs sm:text-sm font-medium bg-pink-100 text-pink-800 px-2 py-1 rounded-full">
            Popularity: {Math.round(popularity)}
          </span>
        </div>
        
        {/* Overview - appears on hover for larger screens */}
        {/* <div className="hidden sm:block mt-3">
          <p className="text-sm text-gray-600 line-clamp-3 group-hover:line-clamp-none transition-all">
            {overview || 'No description available'}
          </p>
        </div> */}
      </div>
    </div>
  );
}