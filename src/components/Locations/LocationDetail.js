import React, { useContext, useState, useEffect } from 'react'
import { LocationContext } from './LocationProvider'
import { useParams, useHistory } from 'react-router-dom'
import './Locations.css'

export const LocationDetail = () => {
  const { getLocationById } = useContext(LocationContext)
  
  const [location, setLocations] = useState({})
  
  const {locationId} = useParams()
  
  useEffect(()=> {
    getLocationById(locationId)
      .then(res => {
        setLocations(res)
      })
  },[])// eslint-disable-line react-hooks/exhaustive-deps
  const history = useHistory()
 
  return(
    
    <section className="location">
    <h3 className="location__name">
     {location.name}
    </h3>
    <div className="location__address">
      {location.address}
    </div>
    <h3 className="location__employee">
     Employees
    </h3>
    <div className="location__employees">
      { location.employees?.map(e => e.name ).join(", ")}
    </div>
    <h3 className="location__animal">
     Animals
    </h3>
    <div className="location__animals">
      { location.animals?.map(a => a.name ).join(", ")}
    </div>
    <div>
     <button onClick={()=> history.push("/locations")}>Back</button>
    </div>
  
  </section>
   
  )
}