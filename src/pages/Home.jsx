import { FaMinus, FaPlus } from "react-icons/fa";
import { ButtonIcon } from "../components/AppButton";
import { decrement, increment } from "../features/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMovies } from "../features/movie/movieAction";
import { Link } from "react-router";
import AppNavbar from "../components/AppNavbar";
import Carousel from "../components/Carousel";
import Popular from "../components/Popular";
import TopRated from "../components/TopRated";
import Latest from "../components/Latest";
import Leaderboard from "../components/Leaderboard";
import Footer from "../components/Footer";

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
    <main className="relative mt-5">
      {/* <div className="px-4 py-2 grid grid-cols-2 gap-2">
        <ButtonIcon onClick={onIncreasement} icon={<FaPlus />} />
        <ButtonIcon onClick={onDecreasement} icon={<FaMinus />} />
      </div> */}
 
      <AppNavbar/>
      
      <Carousel />

      
    <p className="text-blue-900 text-xl px-16 py-4  mt-14 font-bold">TopRated Movie</p>
    <TopRated/>
    <div className="mt-14">
      <Latest/>
    </div>
    <p className="text-blue-900 text-xl px-16 py-4 mt-14   font-bold">Popular Movie</p>
    <Popular/>
    <div className="p-6 mt-5">
      <Leaderboard/>
    </div>

      
      <Footer/>
    </main>
  );
}
