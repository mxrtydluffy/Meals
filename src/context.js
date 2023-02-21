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
