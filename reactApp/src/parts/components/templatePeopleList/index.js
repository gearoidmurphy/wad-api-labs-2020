import React, { useState } from "react";
import Header from "../headerMovieList";
import PeopleList from "../people/peopleList";
import FilterControls from "../peopleFilterControls";

const PeopleListPageTemplate = ({ people, title }) => {
  const [nameFilter, setNameFilter] = useState("");
  let displayedPeople = people
    .filter(p => {
      return p.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
   
  };

  return (
    <>
      <Header title={title} numMovies={displayedPeople.length} />
      <FilterControls onUserInput={handleChange} numMovies={displayedPeople.length}/>
      <PeopleList
       people={displayedPeople}
      />
    </>
  );
};

export default PeopleListPageTemplate ;