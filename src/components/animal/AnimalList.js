import React, { useContext, useEffect } from "react";
import { AnimalContext } from "./AnimalProvider";
import { LocationContext } from "../Locations/LocationProvider";
import { CustomerContext } from "../Customers/CustomerProvider";
import { AnimalCard } from "./AnimalCard";
import "./Animal.css"
import { useHistory } from "react-router-dom";


export const AnimalList = () => {
  // This state changes when `getAnimals()` is invoked below
  const {animals, getAnimals } = useContext(AnimalContext)
  const {locations, getLocations} = useContext(LocationContext)
  const {customers, getCustomers} = useContext(CustomerContext)  
  //useEffect - reach out to the world for something
  useEffect(()=>{
    console.log("AnimalList: useEffect - getAnimals")
    getLocations()
    .then(getCustomers)
    . then(getAnimals)
  },[])// eslint-disable-line react-hooks/exhaustive-deps
  
  const history = useHistory()
  
  return (
    <>
    <h2>Animals</h2>
      <button onClick={()=>{history.push("/animal/create")}}>
        Add Animal
      </button>
      <div className="animals">
      {console.log("AnimalList: Render", animals)}
      {
        animals.map(animal => {
          const owner = customers.find(c => c.id === animal.customerId)
          const clinic = locations.find(l => l.id === animal.locationId)
          return <AnimalCard key={animal.id} 
                            animal={animal}
                            location = {clinic}
                            customer ={owner} />
        })
      }
    </div>
    </>
  )
}


