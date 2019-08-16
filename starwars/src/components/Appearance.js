import React from "react";

const Appearance = props =>{
  return(
    <div className="appearance">
      <p>{props.eye_color}</p>
      <p>{props.hair_color}</p>
      <p>{props.skin_color}</p>
      <p>{props.height}</p>
      <p>{props.mass}</p>
    </div>
  )
};

export default Appearance;