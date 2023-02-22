import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

// Search meal by name
const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    {/* Fetching different Meals */}
    const [loading, setLoading] = useState(true);
    {/* Want to display meals when the page loads. 'A' meals will be shown */}
    const [searchTerm, setSearchTerm] = useState('a');
    const [meals, setMeals] = useState([])


    const fetchMeals = async () => {
      {/* Everytime to fetch, it would load since using multiple times not default. */}
      setLoading(true)
      try {
        {/* Getting the URl and then fetch the 'a' in the end. */}
        const response = await fetch(`${url}${searchTerm}`)
        const data = await response.json()
        const { meals } = data
        if (meals) {
          const newMeals = meals.map((item) => {
            const {
              idMeal,
              strMeal,
              strMealThumb,
              strTags,
              strYoutube
            } = item
            return {
              id:idMeal,
              name:strMeal,
              image:strMealThumb,
              info:strTags,
              video: strYoutube,
            }
          })
          setMeals(newMeals)

        {/* Happens if Meals are null | By deafult it's an empty array */}  
        } else {
          setMeals([])
        }
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    {/* Return object as an array */}
    useEffect(() => {
      fetchMeals()
    }, [searchTerm])


  return (
    <AppContext.Provider 
        value={{
            loading,
            meals,
            setSearchTerm, 
        }}
    >
        {children}
    </AppContext.Provider>
  )
    
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
