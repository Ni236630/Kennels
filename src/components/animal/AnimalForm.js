import React, {useContext, useEffect, useState} from "react"
import { LocationContext } from "../Locations/LocationProvider"
import { AnimalContext } from "./AnimalProvider"
import { CustomerContext } from "../Customers/CustomerProvider"
import "./Animal.css"
import { useHistory, useParams } from "react-router-dom"

export const AnimalForm = () => {
  const { addAnimal, getAnimalById, updateAnimal } = useContext(AnimalContext)
  const { customers, getCustomers } = useContext(CustomerContext)
  const { locations, getLocations } = useContext(LocationContext)
  
  /*
  In React return 'reacts' to the state and re-renders
  */
  const [isLoading, setIsLoading] = useState(true)
  const [animal, setAnimal] = useState({
    name: "",
    locationId: 0,
    customerId: 0,
    breed:""
  })
  
  const {animalId} = useParams()
  const history = useHistory()

  //now we get state on initialization
  useEffect(() =>{
    getLocations().then(getCustomers).then(() => {
      if (animalId){
        getAnimalById(animalId)
        .then(animal => {
            setAnimal(animal)
            setIsLoading(false)
        })
      } else {
        setIsLoading(false)
      }
    })
  }, [])// eslint-disable-line react-hooks/exhaustive-deps
  
  //on field change; update state... this will re-render display values in state
  
  //controlled component
  const handleControlledInputChange = (event) => {
    //when changing state object/array create copy then set state
    const newAnimal = { ...animal}
    newAnimal[event.target.id] = event.target.value
    setAnimal(newAnimal)
  }
  
  const handleSaveAnimal = () => {
  
    const locationId = parseInt(animal.locationId)
    const customerId = parseInt(animal.customerId)
    
    if (locationId === 0 ||customerId === 0){
      window.alert("Please select a location")
    } else {
      animal.customerId = customerId
      animal.locationId = locationId
      setIsLoading(true)
      if(animalId){
        updateAnimal({
          id: animal.id,
          name: animal.name, 
          breed:animal.breed,
          locationId: locationId,
          customerId: customerId
        })
          .then(() => history.push("/animal"))
      }else{
        
        //invoke addAnimal and pass animal as arguement
        addAnimal({
          name: animal.name,
          breed:animal.breed,
          locationId: locationId,
          customerId: customerId
        })
        .then(()=> history.push("/animal"))
      }
    }
 }
    
    return (
      <form className="animalForm">
        <h2 className="animalForm__title">New Animal</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="name">Animal name:</label>
            <input type="text" id="name" onChange={handleControlledInputChange}required autoFocus className="from-control" placeholder="Animal name" value={animal.name}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="breed">Animal breed:</label>
            <input type="text" id="breed" onChange={handleControlledInputChange}required className="from-control" placeholder="Animal breed" value={animal.breed}/>
          </div>
        </fieldset>
        <fieldset> 
              <div className="form-group">
                  <label htmlFor="location">Assign to location: </label>
                  <select value={animal.locationId} name="locationId" id="locationId" className="form-control"onChange={handleControlledInputChange} >
                      <option value="0">Select a location</option>
                      {locations.map(l => (
                          <option key={l.id} value={l.id}>
                              {l.name}
                          </option>
                      ))}
                  </select>
              </div>
          </fieldset>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="customerId">Customer: </label>
                  <select value={animal.customerId} name="customer" id="customerId" className="form-control" onChange={handleControlledInputChange}>
                      <option value="0">Select a customer</option>
                      {customers.map(c => (
                          <option key={c.id} value={c.id}>
                              {c.name}
                          </option>
                      ))}
                  </select>
              </div>
          </fieldset>
          <button className="btn btn-primary"
          disabled={isLoading}
          onClick={event => {
            event.preventDefault() // Prevent browser from submitting the form and refreshing the page
            handleSaveAnimal()
          }}>
        {animalId ? <>Save Animal</> : <>Add Animal</>}</button>
         
      </form>
    )
}