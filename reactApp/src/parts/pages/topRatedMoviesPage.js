import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext,} from '../contexts/moviesContext'
import AddToFavoritesButton from "../components/buttons/addToFavorites";

const TopRatedMoviesPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.toprated.filter((m) => {  // New
    return !("favorite" in m);
  });

  return (
    <PageTemplate
      title="Top Rated Movies"
      movies={movies}  /* Changed */
      action={(toprated) => {
        return <AddToFavoritesButton movie={toprated} />;
      }}
    />
  );
};
export default TopRatedMoviesPage;