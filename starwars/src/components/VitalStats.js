import React from "react";

const VitalStats = props =>{
  return(
    <div className="vitalStats">
      <p>{props.birth_year}</p>
      <p>{props.gender}</p>
      <p>{props.homeworld}</p>
      <p>{props.species}</p>
    </div>
  )
};

export default VitalStats;