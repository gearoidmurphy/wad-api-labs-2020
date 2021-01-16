import React, {useContext} from "react";
import PageTemplate from '../components/templateMovieListPage'
//SR changed to uppercase M
import {MoviesContext} from '../contexts/moviesContext'
import AddToFavoritesButton from "../components/buttons/addToFavorites";
const PopularMoviesPage = () => {
    const context = useContext(MoviesContext);
    const movies = context.movies.filter((m) => {
        return !("popular" in m);
    });
    return (
        <PageTemplate
            title="Popular Movies"
            movies={movies}  /* Changed */
            action={(popular) => {
                return <AddToFavoritesButton movie={popular} type={popular} />;
            }}
        />
    );
};
export default PopularMoviesPage;