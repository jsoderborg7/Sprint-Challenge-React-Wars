import React, {useState, useEffect} from "react";
import axios from "axios";


const PeopleList = ()=>{

const [name, setName] = useState();
const [birth_year, setBirth_year] = useState();
const [eye_color, setEye_color] = useState();
const [gender, setGender] = useState();
const [hair_color, setHair_color] = useState();
const [height, setHeight] = useState();
const [mass, setMass] = useState();
const [skin_color, setSkin_color] = useState();
const [homeworld, setHomeworld] = useState();
const [films, setFilms] = useState([]);
const [species, setSpecies] = useState([]);
const [starships, setStarships] = useState([]);
const [vehicles, setVehicles] = useState([]);
const [media, setMedia] = useState();

useEffect(() =>{
  axios
    .get(`"https://swapi.co/api/people/"`)
    .then(response =>{
      setName(response.data.name)
      setBirth_year(response.data.birth_year)
      setEye_color(response.data.eye_color)
      setGender(response.data.gender)
      setHair_color(response.data.hair_color)
      setHeight(response.data.height)
      setMass(response.data.mass)
      setSkin_color(response.data.skin_color)
      setHomeworld(response.data.homeworld)
      setFilms(response.data.films)
      setSpecies(response.data.species)
      setStarships(response.data.starships)
      setVehicles(response.data.vehicles)
      setMedia(response.data.media)
    }),
},[]);

return (
  <div>
    
  </div>
)
}

export default PeopleList;
