import React from 'react'
import { useGlobalContext } from '../context'

/* Form to get user input*/
const SearchForm = () => {
    const { setSearchTerm } = useGlobalContext();
    const searchValue = React.useRef();

    {/* Tells the browser which element is being acted on */}
    React.useEffect(() => {
      searchValue.current.focus()
    }, [])

    const searchMeal = () => {
      setSearchTerm(searchValue.current.value)
    }

    {/* Prevents user from pressing enter to automatically refresh */}
    const handleSubmit = (e) => {
      e.preventDefault()
    }

  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'> Search your favorite Meal </label>
          <input 
            type='text'
            id='name'
            ref={searchValue}
            onChange={searchMeal}
          />
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
