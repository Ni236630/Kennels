import React, { useContext, useEffect, useState } from "react";
import { AnimalContext } from "./AnimalProvider";
import { AnimalCard } from "./AnimalCard";
import "./Animal.css"
import { useHistory } from 'react-router-dom'

export const AnimalList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { animals, getAnimals, searchTerms} = useContext(AnimalContext) //example code has animals/getAnimals flipped 

  //useEffect - reach out to the world for something
  useEffect(()=>{
    getAnimals()
  },[])// eslint-disable-line react-hooks/exhaustive-deps
  const [ filteredAnimals, setFiltered ] = useState([])
  const history = useHistory()
  
  useEffect(() => {
    if (searchTerms !== "") {
      // If the search field is not blank, display matching animals
      const subset = animals.filter(animal => animal.name.toLowerCase().includes(searchTerms))
      setFiltered(subset)
    } else {
      // If the search field is blank, display all animals
      setFiltered(animals)
    }
  }, [searchTerms, animals])
  
  return (
    <>
    <h2>Animals</h2>
      <button onClick={()=>{history.push("/animal/create")}}>
       Make Reservation
      </button>
      <div className="animals">
      {
        filteredAnimals.map(animal => {
          return <AnimalCard key={animal.id} animal={animal} />
        })
      }
    </div>
    </>
  )
}


