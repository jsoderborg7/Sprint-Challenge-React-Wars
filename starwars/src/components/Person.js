import React from 'react';
import styled from "styled-components";

const Person = props => {
  return (
    <StyledPerson>
    <div className="person">
      <div>
        <h1>{props.name}</h1>
      </div>
      <div className="identify">
        <h2>Identify me:</h2>
        <div>
          <p>Hair:{props.hair_color}</p>
          <p>Eyes:{props.eye_color}</p>
          <p>Skin:{props.skin_color}</p>
          <p>Height:{props.height} inches</p>
          <p>Weight:{props.mass} kg</p>
        </div>
      </div>
    </div>
    </StyledPerson>
  )
}

const StyledPerson = styled.div `
.person{
  width: 90%;
  height: 350px;
  border: 2px solid black;
  background-color: #cca762;
  opacity: .7;
  margin: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1{
    font-size: 3rem;
    border-bottom: 2px solid black;
    width: 80%;
    margin: auto;
    text-align: center;
  }
}

.identify{
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  h2{
    font-size: 2rem;
  }
}
`;

export default Person;