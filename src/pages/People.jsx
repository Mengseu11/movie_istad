import { useDispatch, useSelector } from "react-redux";
import AppNavbar from "../components/AppNavbar";
import PeopleCards from "../components/PeopleCard";
import { useEffect } from "react";
import { fetchPeople } from "../features/people/peopleAction";
import Footer from "../components/Footer";
import { Link } from "react-router";

export default function People() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.people);

  useEffect(() => {
    dispatch(fetchPeople());
  }, [dispatch]);

  return (
    <div className="py-5">
      <AppNavbar />
      <p className="text-blue-900 text-2xl px-5 sm:px-10 md:px-20 py-4 font-bold">
        Popular People
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-5 sm:px-10 md:px-20">
  {data.results &&
    data.results.map((person) => (
      <Link key={person.id} to={`/people/${person.id}`}>
        <PeopleCards
          name={person.name}
          profile_path={`https://media.themoviedb.org/t/p/w235_and_h235_face${person.profile_path}`}
          popularity={person.popularity}
          original_title={person.known_for
            .map((item) => item.original_title || item.name)
            .join(", ")}
        />
      </Link>
    ))}
</div>

      <Footer />
    </div>
  );
}
