//import React,{useContext, useEffect} from "react";
import React from "react"
import { PropsAndState } from './PropsAndState'
//import { CustomerContext } from "./Customers/CustomerProvider";




export const Home = () => {
  // const { customers, getCustomers } = useContext(CustomerContext)
  
  // useEffect(()=>{
  //   getCustomers()
  // },[])// eslint-disable-line react-hooks/exhaustive-deps
  
  // const currentUser = localStorage.getItem("kennel_customer")
  // console.log(currentUser)
  
  // const matchingCustomers = customers.find()
  
   return  (<>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>
        <PropsAndState yourName={"Cora"} />
    </>)
}
