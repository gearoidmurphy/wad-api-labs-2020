import React, { useContext } from "react";
import { withRouter, Link } from "react-router-dom";
import { AuthContext } from "./authContext";
import {Redirect } from "react-router";
import "../parts/globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../parts/components/siteHeader/siteHeader.css";

const BaseAuthHeader = (props) => {
  const context = useContext(AuthContext);
  const { history } = props;

  return context.isAuthenticated ? (
    <p>
    
    <nav className="navbar  navbar-light fixed-top  bg-dark ">
      <nav className="navbar-brand text-white">
       Welcome {context.userName}! <button class="button3" onClick={() => context.signout()}>Sign out</button>
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
                  <Link className="nav-link text-white" to="/">
                    Home
                  </Link> 
                  <Link className="nav-link text-white" to="/upcoming">
                    Upcoming
                  </Link> 
                  <Link className="nav-link text-white" to="/toprated">
                    Top Rated
                  </Link>
                  <Link className="nav-link text-white" to="/favorites">
                    Favorite Movies
                  </Link>
                  {/* <Link className="nav-link text-white" to="/movies/watchlist">
                    WatchList Movies
                  </Link> */}
                </div>
              </div>
          </li> 
          {/* <li className="nav-item">
              <div class="dropdown bg-dark">
               <span class="button">People</span>
                <div class="dropdown-content bg-dark">
                  <Link className="nav-link text-white" to="/movies/popularpeople">
                    Popular People
                  </Link>
                </div>
              </div>
          </li>  */}
          <li className="nav-item">
            
          </li>
        </ul>
      </nav>
    </nav>
  );
  </p>
  ) : (
    <p>
      
      <button onClick={() => history.push("/login")}>Login</button>
      <nav className="navbar  navbar-light fixed-top  bg-dark ">
      <nav className="navbar-brand text-white">
      <Link className="nav-link text-white" to="/login">Log In</Link>
      </nav>
    
      {/* <FontAwesomeIcon
        className="navbar-text text-light"
        icon={["fas", "film"]}
        size="3x"
      /> */}
      <nav className="navbar navbar-expand ">
        <ul className="navbar-nav">
          {/* <li className="nav-item">
              <div class="dropdown bg-dark">
               <span class="button">Movies</span>
                <div class="dropdown-content bg-dark">
                  <Link className="nav-link text-white" to="/upcoming">
                    Upcoming
                  </Link> 
                  <Link className="nav-link text-white" to="/toprated">
                    Top Rated
                  </Link>
                  {/* <Link className="nav-link text-white" to="/movies/favorites">
                    Favorite Movies
                  </Link> */}
                  {/* <Link className="nav-link text-white" to="/movies/watchlist">
                    WatchList Movies
                  </Link> */}
                {/* </div> */}
              {/* </div>
          </li>  */} 
          {/* <li className="nav-item">
              <div class="dropdown bg-dark">
               <span class="button">People</span>
                <div class="dropdown-content bg-dark">
                  <Link className="nav-link text-white" to="/movies/popularpeople">
                    Popular People
                  </Link>
                </div>
              </div>
          </li>  */}
          <li className="nav-item">
            
          </li>
        </ul>
      </nav>
    </nav>
  );
    
    </p>
  );
};

export default withRouter(BaseAuthHeader);
