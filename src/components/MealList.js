import React from 'react'
import Meal from './Meal'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const MealList = () => {
    const { meals, loading } = useGlobalContext();

    {/* True by default */}
    if (loading) {
      return <Loading />
    }
    if(meals.length < 1) {
        return (
            <h2 className='section-title'>
                No meals matched your current input
            </h2>
        )
    }

  return (
    <section className='section'>
      <h2 className='section-title'>
        List of Meals
      </h2>
      <div className='meals-center'>
        {meals.map((item)=>{
          return <Meal key={item.id} {...item}/>
        })}
      </div>
    </section>
  );
}

export default MealList;