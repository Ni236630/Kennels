import React, { useContext, useEffect } from "react";
import { AnimalContext } from "./AnimalProvider";
import { AnimalCard } from "./AnimalCard";
import "./Animal.css"
import { useHistory } from 'react-router-dom'

export const AnimalList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { animals, getAnimals} = useContext(AnimalContext) //example code has animals/getAnimals flipped 

  //useEffect - reach out to the world for something
  useEffect(()=>{
    getAnimals()
  },[])// eslint-disable-line react-hooks/exhaustive-deps
  
  const history = useHistory()
  
  return (
    <>
    <h2>Animals</h2>
      <button onClick={()=>{history.push("/animal/create")}}>
       Make Reservation
      </button>
      <div className="animals">
      {console.log("AnimalList: Render", animals)}
      {
        animals.map(animal => {
          
          return <AnimalCard key={animal.id} animal={animal}/>
        })
      }
    </div>
    </>
  )
}


