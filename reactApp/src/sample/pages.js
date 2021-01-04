import React from 'react';
import { useContext} from 'react';
import { Link } from "react-router-dom";
import { MoviesContext } from './moviesContext';
// import "../../globals/fontawesome";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const PublicPage = () => {
    return <h2>Public page</h2>
 }
 export const Movies = () => {
    const context = useContext(MoviesContext);
    return <>
        <h2>Movies Data </h2>
        <div>
            {context.movies.map(movie => { return <>{movie.id} , {movie.title}<br /></> })}
        </div>
    </>
}
 export const Profile = () => {
    return <h2>My Profile </h2>
}
 export const HomePage = () => {
    const context = useContext(MoviesContext);
     return (
         <div>
        {context.movies.map(r => { return <>
            <div className="col-sm-3">
     <div className="card  bg-white">
     <Link to={`/movies/${r.id}`}>
         <img
         className="card-img-tag center "
         alt={r.title}
         src={
             r.poster_path
             ? `https://image.tmdb.org/t/p/w500/${r.poster_path}`
             : "./film-poster-placeholder.png"
         }
         />
         </Link>
         <div className="card-body">
         <h4 className="card-title ">{r.title}</h4>
         <p>
             {/* <FontAwesomeIcon icon={["fas", "calendar"]} /> */}
             <span> {r.release_date}</span>
         </p>
         <p>
             {/* <FontAwesomeIcon icon={["fas", "star"]} /> */}
             <span> {r.vote_average}</span>
         </p>
         </div>
         
     </div>
     </div></> })}
     </div>

);    
 }
 