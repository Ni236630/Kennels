import React from 'react'
import { Route } from "react-router-dom"
import { Kennel } from "./Kennel"
import { EmployeeProvider } from "./Employees/EmployeeProvider";
import { EmployeeList } from "./Employees/EmployeeList";
import { EmployeeForm } from "./Employees/EmployeeForm"
import { EmployeeDetail } from './Employees/EmployeeDetail'
import { Home } from "./Home"
import { AnimalProvider } from './animal/AnimalProvider';
import { AnimalList } from "./animal/AnimalList";
import { AnimalForm  } from "./animal/AnimalForm";
import { AnimalDetail } from "./animal/AnimalDetail";
import { LocationProvider } from "./Locations/LocationProvider";
import { LocationList } from "./Locations/LocationList";
import { LocationDetail } from "./Locations/LocationDetail"
import { CustomerProvider } from "./Customers/CustomerProvider";
import { CustomerList } from "./Customers/CustomerList"
import { AnimalSearch } from './animal/AnimalSearch'


export const ApplicationViews = () => {
  return (
    
    <>
     {/* Render the location list when http://localhost:3000/ */}
            <CustomerProvider>
                <Route exact path="/">
                    <Home />
                </Route>
            </CustomerProvider>

            {/* Render the animal list when http://localhost:3000/animals */}
      
    
            <AnimalProvider>
                        <Route exact path="/animal/detail/:animalId(\d+)">
                            <AnimalDetail />
                        </Route>
                <LocationProvider>
                   <CustomerProvider>
                       <Route exact path="/animal/edit/:animalId(\d+)">
                           <AnimalForm />
                       </Route>
                        <Route exact path="/animal">
                            <AnimalSearch />
                            <AnimalList />
                        </Route>    
                        <Route exact path="/animal/create">
                            <AnimalForm />
                        </Route>
                    </CustomerProvider> 
                </LocationProvider>
            </AnimalProvider>
            
            <LocationProvider>
                <Route exact path ="/locations/detail/:locationId(\d+)">
                    <LocationDetail />
                </Route>
                <Route exact path="/locations">
                    <LocationList />
                </Route>
            </LocationProvider>
             
            <EmployeeProvider>
                    <Route exact path="/employee/detail/:employeeId(\d+)">
                            <EmployeeDetail />
                    </Route>
                <LocationProvider>
                    <Route exact path="/employees">
                        <EmployeeList />
                    </Route>
                    <Route exact path="/employees/create">
                        <EmployeeForm />
                    </Route>
                </LocationProvider>  
            </EmployeeProvider>
            
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