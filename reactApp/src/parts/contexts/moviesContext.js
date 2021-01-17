import React, { createContext, useEffect, useReducer } from "react";
import { getMovies, getUpcomingMovies, getTopRatedMovies } from "../../api/movie-api";

export const MoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-favorite":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true } : m
        ),
        upcoming: [...state.upcoming],
        toprated: [...state.toprated]

      };
    case "load":
      return { movies: action.payload.movies, upcoming: [...state.upcoming], toprated: [...state.toprated]};
    case "load-upcoming":
        return { upcoming: action.payload.upcoming, movies: [...state.movies], toprated: [...state.toprated]};
    case "load-toprated":
        return { toprated: action.payload.toprated, movies: [...state.movies], upcoming: [...state.upcoming]};
    
    default:
      return state;
  }
};

const MoviesContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, { movies: [], upcoming: [], toprated: []});
  // const [authenticated, setAuthenticated] = useState(false);

  const addToFavorites = (movieId) => {
    const index = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-favorite", payload: { movie: state.movies[index] } });
  };

  useEffect(() => {
    getMovies().then(movies => {
      console.log(movies);
      dispatch({ type: "load", payload: {movies}});
    });
  },[]);

  useEffect(() => {
    getUpcomingMovies().then(upcoming => {
      console.log(upcoming);
      dispatch({ type: "load-upcoming", payload: {upcoming}});
    });
  },[]);

  useEffect(() => {
    getTopRatedMovies().then(toprated => {
      console.log(toprated);
      dispatch({ type: "load-toprated", payload: {toprated}});
    });
  },[]);



  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        upcoming: state.upcoming,
        toprated: state.toprated,
        addToFavorites: addToFavorites,
        // setAuthenticated
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider