import React from "react";
import { Link } from "react-router-dom";

import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./siteHeader.css";

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
                   <Link className="nav-link" to="/login">
                        Login
                    </Link>
          </li>
          <li>
                  <Link className="nav-link" to="/signup">
                      Sign Up
                  </Link>
          </li>
        </ul>
      </nav>
    </nav>
  );
};

export default SiteHeader;