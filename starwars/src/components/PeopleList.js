import React, {useState, useEffect} from "react";
import axios from "axios";
import Person from "./Person";
import styled from "styled-components";


const PeopleList = () =>{

const [data, setData]= useState([]);

  useEffect(() =>{
  axios
    .get(`https://swapi.co/api/people/`)
    .then(response =>{
      setData(response.data.results)
      console.log(data);
    })
    .catch(error =>{
      console.log(error);
    })
  },[]);

return (
  <StyledPeopleList>
  <div className="peopleList">
      {data.map((person, index) =>{
        return <Person 
                  name={person.name}
                  key={index}
                  hair_color={person.hair_color}
                  eye_color={person.eye_color}
                  skin_color={person.skin_color}
                  height={person.height}
                  mass={person.mass}
                  media={person.url}
                />
              })}
  </div>
   </StyledPeopleList>
)}

const StyledPeopleList = styled.div `
.peopleList{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
`;

export default PeopleList;
