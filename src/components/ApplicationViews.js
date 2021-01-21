import React from 'react'
import { Route } from "react-router-dom"
import { Kennel } from "./Kennel"
import { AnimalCard  } from "./animal/AnimalCard";
import { LocationCard } from "./Locations/LocationCard";
import { EmployeeCard } from "./Employees/EmployeeCard";
import { CustomerCard } from './Customers/CustomerCard';
import { Home } from "./Home"

export const ApplicationViews = () => {
  return (
    <>
     {/* Render the location list when http://localhost:3000/ */}
             <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/animals">
                <AnimalCard />
            </Route>
            
            <Route path="/locations">
                <LocationCard />
            </Route>
            
            <Route path="/employees">
                <EmployeeCard />
            </Route>
            
            <Route path="/customers">
                <CustomerCard />
            </Route>
            
            <Route path="/kennels">
                <Kennel />
            </Route>
          
    </>
  )
}