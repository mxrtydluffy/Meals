import React from 'react'
import Meal from './Meal'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const MealList = () => {
    const { meals, loading } = useGlobalContext();

    {/* True by default */}
    if (Loading) {
        return <Loading />
    }
    if(meals.length < 1) {
        return (
            <h2 className='section-title'>
                No meals matched your current input.
            </h2>
        )
    }

  return (
    <div>
      <h2>Meal list information</h2>
    </div>
  );
}

export default MealList;