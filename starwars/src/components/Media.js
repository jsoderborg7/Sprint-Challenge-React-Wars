import React from "react";

const Media = props =>{
  return(
    <div className="media">
      <img src={props.media} className="img" alt="Media" />
    </div>
  )
};

export default Media;