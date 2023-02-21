import React from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
// Lookup details
const url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='

const SingleMeal = () => {
  return (
    <div>
      <h2>Single Meal page </h2>
    </div>
  );
}

export default SingleMeal;