import React, { useEffect, useContext } from 'react'
// import './../../../scss/components/_categorizedGrid.scss'
import './../../../sass/layout/_grid-of-five.scss'
import './../../../sass/pages/_categorized-page.scss'
import { Link } from '@reach/router'
import { getAllRestaurants } from './../../../services/api/fetchRestaurants'
import { ReviewsNetworkContext } from './../../App'
import { createCards } from './../../Card/createCards'

const Restaurants = () => {
  const state = useContext(ReviewsNetworkContext)
  const { dinner, lunch, brunch } = state[0]

  useEffect(() => {
    if (!state[0].dinner && !state[0].lunch && !state[0].brunch) {
      getAllRestaurants().then(response => {
        state[1]({ ...state[0], dinner: response[0].data, lunch: response[1].data, brunch: response[2].data })
      })
    }
  }, [])

  return (
    <div className='grid-of-five'>
      <div className='grid-of-five__wrapper'>

        <h2 className='category'>Dinner
          <Link className='category__seeall' to='search?meals=Dinner&page=1'>See all</Link>
        </h2>
        <div className='grid-of-five__grid'>
          {createCards(dinner)}
        </div>

        <h2 className='category'>Lunch
          <Link className='category__seeall' to='search?meals=Lunch&page=1'>See all</Link>
        </h2>
        <div className='grid-of-five__grid'>
          {createCards(lunch)}
        </div>


        <h2 className='category'>Brunch
          <Link className='category__seeall' to='search?meals=Brunch&page=1'>See all</Link>
        </h2>
        <div className='grid-of-five__grid'>
          {createCards(brunch)}
        </div>

      </div>
    </div>
  )
}

export default Restaurants