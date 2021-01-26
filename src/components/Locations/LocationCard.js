import React from 'react'
import { Link } from 'react-router-dom'
import "./Locations.css"

export const LocationCard = ({location}) => (
  <section className="location">
    <h3 className="location__name">
      <Link to={`/locations/detail/${location.id}`}>
        {location.name}
      </Link>
      </h3>
      <div className="location__employees">
        Employees at location: {location.employees.length}
      </div>
      <div className="location__animals">
        Animals at location: {location.animals.length}
      </div>
  </section>
)