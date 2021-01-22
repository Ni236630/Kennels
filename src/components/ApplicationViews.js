import React from 'react'
import { Route } from "react-router-dom"
import { Kennel } from "./Kennel"
import { EmployeeCard } from "./Employees/EmployeeCard";
import { Home } from "./Home"
import { AnimalProvider } from './animal/AnimalProvider';
import { AnimalList } from "./animal/AnimalList";
import { LocationProvider } from "./Locations/LocationProvider";
import { LocationList } from "./Locations/LocationList";
import { CustomerProvider } from "./Customers/CustomerProvider";
import { CustomerList } from "./Customers/CustomerList"

export const ApplicationViews = () => {
  return (
    <>
     {/* Render the location list when http://localhost:3000/ */}
             <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <AnimalProvider>
                <Route exact path="/animals">
                    <AnimalList />
                </Route>    
            </AnimalProvider>
            
            <LocationProvider>
                <Route exact path="/locations">
                    <LocationList />
                </Route>
             </LocationProvider>
             
            <Route path="/employees">
                <EmployeeCard />
            </Route>
            
            <CustomerProvider>
                <Route exact path="/customers">
                    <CustomerList />
                </Route>   
            </CustomerProvider>
            
            <Route path="/kennels">
                <Kennel />
            </Route>
          
    </>
  )
}