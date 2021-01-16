import React from 'react';
import { useContext} from 'react';
import { Link } from "react-router-dom";
import { MoviesContext } from '../parts/contexts/moviesContext';

// import "../../globals/fontawesome";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const PublicPage = () => {
    return <h2>Public page</h2>
 }
 export const Movies = () => {
    const context = useContext(MoviesContext);
     return (
            <div>
            <h2>Movies</h2>
            <div className="row movies bg-info">
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
        </div>

);    
}



 export const Profile = () => {
    const context = useContext(MoviesContext);
     return (
        
         <div>
             <h2>Home Page</h2>
        {context.toprated.map(r => { return <>
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
