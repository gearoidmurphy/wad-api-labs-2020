import React from "react";
import Header from "../components/siteHeaderlogin";
import { Link } from "react-router-dom";


const welcome = () => {
  return (
    <>
      <Header title={"Welcome"} numMovies={0} />
      
      <h1>Welcome To the page</h1>
      <h2>Please Login in Sign up</h2>
      <div className="row">
                    <Link className="nav-link" to="/login">
                    Login
                    </Link>
                    <Link className="nav-link" to="/signup">
                    Sign Up
                    </Link>
      </div>
    </>
  );
};

export default welcome;