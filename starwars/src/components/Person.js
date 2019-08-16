import React from 'react';

const Person = props => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
    <div>
      <h2>What you should know about me:</h2>
      <p>{props.birth_year}</p>
      <p>{props.homeworld}</p>
      <p>{props.species}</p>
    </div>
    <div>
      <h2>What I look like:</h2>
      <p>{props.hair_color}</p>
      <p>{props.eye_color}</p>
      <p>{props.skin_color}</p>
      <p>{props.height}</p>
      <p>{props.mass}</p>
    </div>
    <div>
      <h2>Cool stuff I have:</h2>
      <p>{props.starships}</p>
      <p>{props.vehicles}</p>
    </div>
  );
};

export default Person;