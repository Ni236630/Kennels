import React, { useContext, useEffect } from "react"
import { LocationCard } from "./LocationCard";
import { LocationContext } from "./LocationProvider";
import "./Locations.css"

export const LocationList = () => {
  //reaches out for dispatched data to use
  const {locations, getLocations} = useContext(LocationContext)
  
  //useEffect grabs the initial state; doesn't handle re-render
  useEffect(() =>{
    getLocations()
  },[])
  
  
  return(
    <div className="locations">
      {
        locations.map(location =>{
          return <LocationCard key={location.id} location = {location} />
        })
      }
    </div>
  )
}