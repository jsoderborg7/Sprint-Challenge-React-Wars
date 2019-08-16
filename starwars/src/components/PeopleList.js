import React, {useState, useEffect} from "react";
import axios from "axios";
import PeopleCard from "./PeopleCard";

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
      
    })
})