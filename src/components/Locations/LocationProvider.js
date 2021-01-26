import React, { useState, createContext  } from "react";

//context imported so that we can allow components to use data
export const LocationContext = createContext()

// actual component that declares usable data
export const LocationProvider = (props) => {
  //declare state
  const [locations, setLocations] = useState([])
  
  const getLocationById = (id) =>{
    return fetch(`http://localhost:8088/locations/${id}?_embed=employees&_embed=animals`)
      .then(res =>res.json())
  }
  
  //fetch call to 'get' data
  const getLocations = () => {
    return fetch(`http://localhost:8088/locations?_embed=employees&_embed=animals`)
    .then(res => res.json())
    .then(setLocations)
  }
  
  //fetch call for 'adding' data
  const addLocations = locationObj =>{
    return fetch("http://localhost:8088/locations",{
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify(locationObj)
    })
    .then(getLocations)
  } 
  //return that dispatches usable data by children
  return(
    <LocationContext.Provider value={{
      locations, getLocations, addLocations,getLocationById
    }}>
      {props.children}
    </LocationContext.Provider>
  )
}