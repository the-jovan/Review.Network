import React, { useState, createContext } from 'react'
import './../../sass/layout/_navigation.scss'
import { Link, navigate } from '@reach/router'

export const ReviewsContext = createContext()

const Reviews = ({ children }) => {
  const [searchedData, setSearchedData] = useState()
  
  return (
    <div>

      <form className='navigation__mobile__form'
        onSubmit = { event => {
          event.preventDefault()
          const id = event.target.elements[0].value
          setSearchedData(id)
          navigate(`${window.location.pathname}/search-results/${id}`)
        }}>
        <input type='text' placeholder='Search'/>
      </form>

      <div className='navigation'>
        <div className='navigation__wrapper'>

          <nav className='navigation__nav'>
            <Link className='navigation__nav__link' to='trending'>All</Link>
            <Link className='navigation__nav__link' to='restaurants'>Restaurants</Link>
            <Link className='navigation__nav__link' to='hotels'>Hotels</Link>
            
            <form className='navigation__nav__search'
              onSubmit = { event => {
                event.preventDefault()
                const id = event.target.elements[0].value
                setSearchedData(id)
                navigate(`${window.location.pathname.split('/').slice(0, 3).join('/')}/search-results/${id}`)
              }}>
              <input type='text' placeholder='Search'/>
            </form>
        
          </nav>
        </div>
      </div>
      <ReviewsContext.Provider value={searchedData}>
        <div className='navigation__child'>
          { children }
        </div>
      </ReviewsContext.Provider>

    </div>
  )
}

export default Reviews