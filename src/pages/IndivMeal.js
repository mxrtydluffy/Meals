import React from 'react'
import Loading from '../components/Loading'
import { useParams, Link, useSearchParams } from 'react-router-dom'
// Lookup details
const url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='

const SingleMeal = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [meal, setMeal] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    async function getMeal(){
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
          if(data.meals){
            {/* Grabbing the property  */}
            const {
              strMeal: name,
              strMealThumb: image,
              strTags: info,
              strInstructions: instructions,
            /* Adding More */
              strCategory: category,
              strArea : area,
              strIngredient1,
              strIngredient2,
              strIngredient3,
              strIngredient4,
              strIngredient5,
              strIngredient6,
              strIngredient7,
              strIngredient8,
              strIngredient9,
              // strYoutube: video, (Decide later to put)
            } = data.meals[0]
            const ingredients  = [
              strIngredient1,
              strIngredient2,
              strIngredient3,
              strIngredient4,
              strIngredient5,
              strIngredient6,
              strIngredient7,
              strIngredient8,
              strIngredient9,
            ]
            const newMeal = {
              name,
              image,
              info,
              instructions, 
              category,
              area,
              ingredients,
            }
            setMeal(newMeal);
        } else {
          setMeal(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getMeal()
  },[id])
  /* If load is complete it will display meal. */
  if(loading){
    return <Loading/>
  }
  if(!meal){
    return <h2 className='section-title'>No Meal to display</h2>
  }
  const {
    name,
    image,
    info,
    instructions,
    category,
    area,
    ingredients,
  } = meal;
  /* Go back and recheck this part */
  return (
    <section className='section meal-section'>
      <Link to='/' className='btn btn-primary'>
        Home Page 
      </Link>
      <h2 className='section-title'>{name}</h2>
      {/* Main body with categories */}
      <div className='meal'>
        <img src={image} alt={name}/>
        <div className='meal-info'>
          <p>
            <span className='meal-data'>Name :</span>
            {name}
          </p>
          <p>
            <span className='meal-data'>Category :</span>
            {category}
          </p>
          <p>
            <span className='meal-data'>Info :</span>
            {info}
          </p>
          <p>
            <span className='meal-data'>Area :</span>
            {area}
          </p>
          <p>
            <span className='meal-data'>Instructions :</span>
            {instructions}
          </p>
          {/* Ingredients */}
          <span className='meal-data'>Ingredients :</span>
          {ingredients.map((item,index) => {
            return item? <span key={index}>{item}</span> : null
          })}

        </div>
      </div>
    </section>
  );
}

export default SingleMeal;