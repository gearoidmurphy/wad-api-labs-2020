import React from "react";
import { Link } from "react-router-dom";
import {Redirect } from "react-router";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./siteHeader.css";
import app from "../../base";

const SiteHeader = () => {
  return (
    <nav className="navbar  navbar-light fixed-top  bg-dark ">
      <nav className="navbar-brand text-white">
        <Link className=" text-white" to="/">
          TMDB Client
        </Link>
      </nav>
    
      <FontAwesomeIcon
        className="navbar-text text-light"
        icon={["fas", "film"]}
        size="3x"
      />
      <nav className="navbar navbar-expand ">
        <ul className="navbar-nav">
          <li className="nav-item">
              <div class="dropdown bg-dark">
               <span class="button">Movies</span>
                <div class="dropdown-content bg-dark">
                  <Link className="nav-link text-white" to="/movies/upcoming">
                    Upcoming
                  </Link>
                  <Link className="nav-link text-white" to="/movies/popular">
                    Popular Movies
                  </Link> 
                  <Link className="nav-link text-white" to="/movies/toprated">
                    Top Rated
                  </Link>
                  <Link className="nav-link text-white" to="/movies/favorites">
                    Favorite Movies
                  </Link>
                  <Link className="nav-link text-white" to="/movies/watchlist">
                    WatchList Movies
                  </Link>
                </div>
              </div>
          </li> 
          <li className="nav-item">
              <div class="dropdown bg-dark">
               <span class="button">People</span>
                <div class="dropdown-content bg-dark">
                  <Link className="nav-link text-white" to="/movies/popularpeople">
                    Popular People
                  </Link>
                </div>
              </div>
          </li> 
          <li className="nav-item">
            <button onClick={() => <Redirect to="/welcome" /> && app.auth().signOut() } className="signOut">Sign out</button>
          </li>
        </ul>
      </nav>
    </nav>
  );
};

export default SiteHeader;