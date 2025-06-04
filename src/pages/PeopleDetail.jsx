import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPeopleDetail } from "../features/people/peopleAction";
import AppNavbar from "../components/AppNavbar";
import { useParams } from "react-router";
import { fetchMovies } from "../features/movie/movieAction";

export default function PeopleDetail (){
    const dispatch = useDispatch()

    const params = useParams()
    useEffect(()=>{
        dispatch(fetchPeopleDetail(params.id));
    },[]);
    useEffect(()=>{
        dispatch(fetchMovies(params.id))
    })
    const {detail} = useSelector  ((state)=> state.people)
    const {data,status,error} = useSelector((state)=> state.movie)
    const [isExpanded, setIsExpanded] = useState(false);
    console.log("detail",detail)
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const displayedBio = isExpanded
    ? detail.biography
    : detail.biography?.slice(0, 500);

    const calculateAge = (birthday) => {
  if (!birthday) return '';
  const birthDate = new Date(birthday);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};
const age = calculateAge(detail.birthday);
  
    return(<>
    <AppNavbar/>
         <div style={{ display: "flex", padding: "2rem" }}>
      {/* Left - Profile Image */}
      <div style={{ marginRight: "2rem" }}>
        <img
          src={`https://image.tmdb.org/t/p/w300${detail.profile_path}`}
          alt={detail.name}
          style={{
            width: "250px",
            height: "auto",
            borderRadius: "10px",
            objectFit: "cover",
          }}
        />
         <div style={{
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
    //   border: '1px solid #ddd',
    //   borderRadius: '8px',
      maxWidth: '350px', // Adjust width as needed
    //   boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '', color: '#333' }}>Personal Info</h2>

      <div style={{ marginBottom: '' }}>
        <h3 style={{ fontSize: '1.2rem', margin: '', color: '#555' }}>Known For</h3>
        <p style={{ fontSize: '1rem', margin: 0 }}>{detail.known_for_department || 'N/A'}</p>
      </div>

      <div style={{ marginBottom: '' }}>
        <h3 style={{ fontSize: '1.2rem', margin: '', color: '#555' }}>Popularity</h3>
        {/*
          The TMDb '/person/{person_id}' API doesn't directly give 'Known Credits' count.
          You'd usually get this by fetching '/person/{person_id}/combined_credits'
          and counting the length of the 'cast' array.
          For now, we'll use a placeholder or assume it's passed if available.
          Let's assume a 'credit_count' prop if you want to pass it from parent.
        */}
        <p style={{ fontSize: '1rem', margin: 0 }}>
          {detail.popularity}
        </p>
      </div>

      <div style={{ marginBottom: '' }}>
        <h3 style={{ fontSize: '1.2rem', margin: '', color: '#555' }}>Gender</h3>
        <p style={{ fontSize: '1rem', margin: 0 }}>
          {detail.gender === 1 ? 'Female' : detail.gender === 2 ? 'Male' : 'N/A'}
        </p>
      </div>

      <div style={{ marginBottom: '' }}>
        <h3 style={{ fontSize: '1.2rem', margin: '', color: '#555' }}>Birthday</h3>
        <p style={{ fontSize: '1rem', margin: 0 }}>
          {detail.birthday ?
            `${new Date(detail.birthday).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} (${age} years old)`
            : 'N/A'}
        </p>
      </div>

      <div>
        <h3 style={{ fontSize: '1.2rem', margin: '', color: '#555' }}>Place of Birth</h3>
        <p style={{ fontSize: '1rem', margin: 0 }}>{detail.place_of_birth || 'N/A'}</p>
      </div>
    </div>

      </div>

      {/* Right - Info */}
     <div>
      <h1 style={{ fontSize: "2rem", marginBottom: "", fontWeight: "bold" }}>{detail.name}</h1>

      <h2 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>Biography</h2>
       <p style={{ marginBottom: "", maxWidth: "900px", fontSize: "1rem"}}>
         <p>
        {displayedBio}
        {detail.biography && !isExpanded && "..."}
 
      </p>

      {detail.biography && detail.biography.length > 794 && (
        <span
          style={{ color: "#00BFFF", cursor: "pointer", fontWeight: "bold",float: "inline-end"}}
          onClick={toggleReadMore}
        >
          {isExpanded ? "Read Less" : "Read More"} &rsaquo;
        </span>
      )}
      </p>
     
      <div>
      <h3 style={{ fontSize: "1.2rem", margin: "1rem 0 0.5rem" }}>Known For</h3>
      <div style={{ display: "flex", gap: "1rem", overflowX: "auto" }}>
        {detail.known_for &&
         detail.known_for.map((movie,index) => (
          <div key={movie.id} style={{ width: "140px", textAlign: "center" }}>
            <img
            src={`https://image.tmdb.org/t/p/w500${detail.backdrop_path}`} alt={detail.original_title}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
            <p style={{ marginTop: "0.5rem", fontSize: "0.9rem" }}>
              {detail.title}
            </p>
          </div>
        ))}
      </div>
    </div> 
     
    </div>
    </div>
    
    </>)

}