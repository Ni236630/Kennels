import React, {createContext, useState} from "react"


export const EmployeeContext = createContext()

export const EmployeeProvider = (props) => {
  const  [employees, setEmployees] = useState([])
  
  const  getEmployeeById = (id) => {
    return fetch(`http://localhost:8088/employees/${id}?_expand=location`)
      .then(res => res.json())
  }
  
  const getEmployees = () => {
    fetch("http://localhost:8088/employees?_expand=location")
    .then(res => res.json())
    .then(setEmployees)
  }
  
  const addEmployee = employeeObj => {
   return fetch("http://localhost:8088/employees",{
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(employeeObj)
      
    })
    .then(getEmployees)
    
  }
  
  return(
    <EmployeeContext.Provider value={{
      getEmployees,employees,addEmployee, getEmployeeById
    }}>
      {props.children}
    </EmployeeContext.Provider>
  )
}