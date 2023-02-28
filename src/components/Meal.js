import React from 'react'
import { Link } from 'react-router-dom'

const Meal = ({image, name, id, info, youtube}) => {
  return (
    <article className='meal'>
      <div className='img-container'>
        <img src={image} alt={name}/>
      </div>
      <div className='meal-footer'>
        <h3>{name}</h3>
        <h4>{youtube}</h4>
        <p>{info}</p>
        <Link to={`/meal/${id}`} className = "btn btn-primary btn-details">
          Details
        </Link>
      </div>
    </article>
  )
}

export default Meal