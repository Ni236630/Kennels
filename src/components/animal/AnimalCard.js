import React from 'react'
import {link} from "react-router-dom"
import "./Animal.css"

export const AnimalCard = ({animal}) => (
  <section className="animal">
    <h3 className="animal__name">
      <link to={`/animal/detail/${animal.id}`}>{animal.name}</link>
    </h3>
      <div className="animal__breed">Breed: {animal.breed}</div>
  </section>
)