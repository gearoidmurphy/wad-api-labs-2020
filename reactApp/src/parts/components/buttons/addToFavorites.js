import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import { AuthContext } from "../../authContext"
import { addFavorite } from "../../../api/movie-api"

const AddToFavoriteButton = ({ movie }) => {
  const context = useContext(MoviesContext);
  const userContext = useContext(AuthContext);

  const handleAddToFavorite = e => {
    e.preventDefault();
    context.addToFavorites(movie.id);
    addFavorite(userContext.userName,movie.id)
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleAddToFavorite}
    >
      Add to Favorites
    </button>
  );
};

export default AddToFavoriteButton;