import React from 'react'
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (prop) => {
  return (
    <ul className="navbar">
        <li className="navbar__item active">
            <Link className="navbar__link" to="/">NSS Kennels</Link>
        </li>
        <li className="navbar__item">
            <Link className="navbar__link" to="/locations">Locations</Link>
        </li>
        <li className="navbar__item">
            <Link className="navbar__link" to="/animal">Animals</Link>
        </li>
        <li className="navbar__item">
            <Link className="navbar__link" to="/customers">Customers</Link>
        </li>
        <li className="navbar__item">
            <Link className="navbar__link" to="/employees">Employees</Link>
        </li>
    </ul>
)
}