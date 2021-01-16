import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import { PublicPage, Profile } from "../parts/pages";
import TopRated from "../parts/pages/topRatedMoviesPage"
import Upcoming from "../parts/pages/upcomingMoviesPage"
import Favorite from "../parts/pages/favoritesMoviesPage"
import Movies from "../parts/pages/movieDetailsPage"
import HomePage from "../parts/pages/homePage"
import LoginPage from "./loginPage";
import SignUpPage from "../parts/signUpPage";
import PrivateRoute from "../parts/privateRoute";
import AuthHeader from "./authHeader";
import AuthProvider from "./authContext";
import MovieProvider from "../parts/contexts/moviesContext";
import GenresProvider from "../parts/contexts/genresContext"
import "../../node_modules/bootstrap/dist/css/bootstrap.css"

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AuthHeader />
        <p>
          Movie App
        </p>
        <MovieProvider>
          <GenresProvider>
          <Switch>
            <Route path="/public" component={PublicPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignUpPage} />,
            <Route exact path="/" component={HomePage} />
            <PrivateRoute path="/favorites" component={Favorite} />
            <PrivateRoute path="/upcoming" component={Upcoming} />
            <PrivateRoute path="/toprated" component={TopRated} />
            <PrivateRoute path="/movies/:id" component={Movies} />
            <PrivateRoute path="/profile" component={Profile} />
            <Redirect from="*" to="/" />
          </Switch>
          </GenresProvider>
        </MovieProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
