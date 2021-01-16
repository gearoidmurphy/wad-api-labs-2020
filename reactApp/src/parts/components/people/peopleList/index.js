import React from "react";
import Profile from "../profileCard";
import "./peopleList.css";

const PeopleList = ({people}) => {
  const profileCards = people.map(p => (
    <Profile key={p.id} person={p} />
  ));
  return <div className="row movies bg-info">{profileCards}</div>;
};

export default PeopleList;