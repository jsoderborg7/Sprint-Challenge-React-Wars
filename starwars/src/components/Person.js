import React from 'react';

const Person = props => {
  return (
    <div>
      <div>
        <h1>{props.name}</h1>
      </div>
      <div>
        <h2>Identify me:</h2>
        <p>Hair:{props.hair_color}</p>
        <p>Eyes:{props.eye_color}</p>
        <p>Skin:{props.skin_color}</p>
        <p>Height:{props.height} inches</p>
        <p>Weight:{props.mass} kg</p>
      </div>
    </div>
  )
}

export default Person;