import React, {useState, useEffect} from "react";
import axios from "axios";
import Person from "./Person";


const PeopleList = () =>{

const [data, setData]= useState([]);
const [card, setCard]= useState(1);

const getData = () =>{
  axios
    .get(`https://swapi.co/api/people/`)
    .then(response =>{
      setData(response.data.results)
      console.log(data);
    })
    .catch(error =>{
      console.log(error);
    })
};

useEffect(getData, [card])
return (
  <div>
    <div>
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
    <div className="buttons">
      <button type="button" onClick={() => setCard(card-1)}>Previous</button>
      <button type="button" onClick={() => setCard(card+1)}>Next</button>
    </div>
  </div>
)
}

export default PeopleList;
