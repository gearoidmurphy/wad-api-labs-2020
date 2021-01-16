import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";

import MovieReviews from "../components/movieReviews";
import useMovie from "../hooks/useMovie";
import SimilarMovies from "../components/similarMovies";
import Credits from "../components/credits";




const MoviePage = props => {
  const { id } = props.match.params;
  
  const [movie] = useMovie(id)  // NEW
  return (
    <>
    {movie ? (
      <>
        <PageTemplate movie={movie}>
          <MovieDetails movie={movie} />
         
        </PageTemplate>
        
       
        <div className="row">
          <div className="col-12 ">
            {!props.history.location.pathname.endsWith("/reviews") ? (
              <Link
                className="btn btn-primary btn-block active"
                to={`/movies/${id}/reviews`}
              >
                Show Reviews (Extracts)
              </Link>
            ) : (
              <Link
                className="btn btn-primary btn-block active"
                to={`/movies/${id}`}
              >
                Hide Reviews 
              </Link>
            )}
          </div>
        </div>
        <Route
          path={`/homelist`}
          render={props => <MovieReviews movie={movie} {...props} />}
        />

        <div className = "row">
              <br></br>
        </div>
            
        <div className="row">
          <div className="col-12 ">
            {!props.history.location.pathname.endsWith("/credits") ? (
              <Link
                className="btn btn-primary btn-block active"
                to={`/movies/${id}/credits`}
              >
                Show Credits (Extracts)
              </Link>
            ) : (
              <Link
                className="btn btn-primary btn-block active"
                to={`/movies/${id}`}
              >
                Hide Credits 
              </Link>
            )}
          </div>
        </div>
        <Route
          path={`/movies/:id/credits`}
          render={props => <Credits movie={movie} />}
        />

        <SimilarMovies movie={movie} />
      </>
    ) : (
      <p>Waiting for movie details</p>
    )}
  </>
  );
};

export default withRouter(MoviePage);