import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchKnownfor, fetchPeopleDetail } from "../features/people/peopleAction";
import AppNavbar from "../components/AppNavbar";
import { useParams } from "react-router";
import Footer from "../components/Footer";

export default function PeopleDetail() {
  const dispatch = useDispatch();
  const params = useParams();
  const [isExpanded, setIsExpanded] = useState(false);

  const { detail, knownFor, loading, error } = useSelector(
    (state) => state.people
  );

  useEffect(() => {
    dispatch(fetchPeopleDetail(params.id));
    dispatch(fetchKnownfor(params.id));
  }, [dispatch, params.id]);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const displayedBio = isExpanded
    ? detail?.biography
    : detail?.biography?.slice(0, 500);

  const calculateAge = (birthday) => {
    if (!birthday) return "";
    const birthDate = new Date(birthday);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const age = calculateAge(detail?.birthday);
  const knownForItems = knownFor?.cast || [];

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (error) return <div className="min-h-screen flex items-center justify-center">Error: {error}</div>;
  if (!detail) return <div className="min-h-screen flex items-center justify-center">No data found</div>;

  return (
    <>
      <AppNavbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left - Profile Image and Personal Info */}
          <div className="w-full lg:w-1/3 xl:w-1/4 flex flex-col items-center lg:items-start">
            <div className="w-full max-w-[250px]">
              <img
                src={`https://image.tmdb.org/t/p/w300${detail.profile_path}`}
                alt={detail.name}
                className="w-full h-auto rounded-lg object-cover shadow-md"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/300x450";
                }}
              />
            </div>

            <div className="w-full mt-6 lg:mt-8 px-2">
              <h2 className="text-xl font-bold mb-4 text-gray-800">Personal Info</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-md font-semibold text-gray-700">Known For</h3>
                  <p className="text-sm text-gray-600">{detail.known_for_department || "N/A"}</p>
                </div>

                <div>
                  <h3 className="text-md font-semibold text-gray-700">Popularity</h3>
                  <p className="text-sm text-gray-600">{detail.popularity}</p>
                </div>

                <div>
                  <h3 className="text-md font-semibold text-gray-700">Gender</h3>
                  <p className="text-sm text-gray-600">
                    {detail.gender === 1 ? "Female" : detail.gender === 2 ? "Male" : "N/A"}
                  </p>
                </div>

                <div>
                  <h3 className="text-md font-semibold text-gray-700">Birthday</h3>
                  <p className="text-sm text-gray-600">
                    {detail.birthday
                      ? `${new Date(detail.birthday).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })} (${age} years old)`
                      : "N/A"}
                  </p>
                </div>

                <div>
                  <h3 className="text-md font-semibold text-gray-700">Place of Birth</h3>
                  <p className="text-sm text-gray-600">{detail.place_of_birth || "N/A"}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Main Content */}
          <div className="w-full lg:w-2/3 xl:w-3/4">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{detail.name}</h1>

            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Biography</h2>
              <div className="text-gray-700">
                <p className="mb-3">
                  {displayedBio || "No biography available."}
                  {detail.biography && !isExpanded && detail.biography.length > 500 && "..."}
                </p>
                {detail.biography && detail.biography.length > 500 && (
                  <button
                    onClick={toggleReadMore}
                    className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                  >
                    {isExpanded ? "Read Less" : "Read More"}
                  </button>
                )}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Known For</h3>
              {knownForItems.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                  {knownForItems.slice(0, 6).map((movie) => (
                    <div key={movie.id} className="flex flex-col">
                      <div className="aspect-[2/3] w-full rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <img
                          src={`https://image.tmdb.org/t/p/w300${
                            movie.poster_path || movie.backdrop_path
                          }`}
                          alt={movie.title || movie.original_title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.src = "https://via.placeholder.com/140x200";
                          }}
                        />
                      </div>
                      <p className="mt-2 text-sm font-medium text-gray-900 line-clamp-1">
                        {movie.title || movie.original_title}
                      </p>
                      <p className="text-xs text-gray-500">
                        {movie.character && `as ${movie.character}`}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">No known works found.</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}