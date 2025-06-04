import { useDispatch, useSelector } from "react-redux";
import AppNavbar from "../components/AppNavbar"
import PeopleCards from "../components/PeopleCard"
import { useEffect } from "react";
import { fetchPeople } from "../features/people/peopleAction";
import Footer from "../components/Footer";
import { Link } from "react-router";

export default function People(){
    const dispatch = useDispatch()
    const {data} = useSelector((state)=> state.people)
    useEffect(()=>{
        dispatch(fetchPeople())
    },[])
    return (
        <div className=" py-5">
            <AppNavbar/>
            <p className="text-blue-900 text-2xl px-20 py-4 font-bold">Popular People</p>
            <div className="grid grid-cols-4 gap-6 gap-x-0 mt-5 mb-5 px-28">
              
                {
                    data.results && data.results.map((person,index)=>(
                        <Link to={`/people/${person.id}`}>
                        <PeopleCards
                            name={person.name}
                            profile_path={`https://media.themoviedb.org/t/p/w235_and_h235_face${person.profile_path}`}
                            popularity={person.popularity}
                            original_title={person.known_for.map(item => item.original_title).join(", ")}
                        />
                        </Link>
                    ))
                }
            </div>
            <Footer/>
        </div>
    )
}

  

