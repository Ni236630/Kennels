import React, {createContext, useState} from "react"


export const EmployeeContext = createContext()

export const EmployeeProvider = (props) => {
  const  [employees, setEmployees] = useState([])
  
  const getEmployees = () => {
    fetch("http://localhost:8088/employees?_expand=location")
    .then(res => res.json())
    .then(setEmployees)
  }
  
  const addEmployees = employeeObj => {
    fetch("http://localhost:8088/employees",{
      method:"POST",
      header:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(employeeObj)
      
    })
  }
  
  return(
    <EmployeeContext.Provider value={{
      getEmployees,employees,addEmployees
    }}>
      {props.children}
    </EmployeeContext.Provider>
  )
}