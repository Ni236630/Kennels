import React, { useContext, useState, useEffect} from 'react'
import { EmployeeContext } from './EmployeeProvider'
import { useParams} from 'react-router-dom'
import './Employee.css'

export const EmployeeDetail = () => {
  const { getEmployeeById } = useContext(EmployeeContext)
  
  const [ employee, setEmployees ] = useState({})
 
  const {employeeId} = useParams() 
  
  useEffect(() => {
  
    getEmployeeById(employeeId)
      .then( res => {
        setEmployees(res)
      })
  },[])// eslint-disable-line react-hooks/exhaustive-deps
  
  return(
    <section className="employee">
    <h3 className="employee__name">{employee.name}</h3>
    <div className="employee__location">Location: {employee.location?.name}</div>
  </section>
  )
  
  
}