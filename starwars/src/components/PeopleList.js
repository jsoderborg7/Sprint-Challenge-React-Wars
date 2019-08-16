import React, {useState, useEffect} from "react";
import axios from "axios";


const PeopleList = () =>{

const [data, setData]= useState([]);
const [card, setCard] = useState(1);

const getData = () =>{
  axios
    .get(`https://swapi.co/api/people/`)
    .then(response =>{
      setData(response.data.results)
      console.log(data);
    })
};

useEffect(getData [card])

return (
  <div>
    <h1>Character</h1>
    {data.map((person, index) =>{
      return <Person name={person.name}

    })}

  </div>
)
}

export default PeopleList;
