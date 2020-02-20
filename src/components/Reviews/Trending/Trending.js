import React, { useContext } from 'react'
import './../../../sass/layout/_grid-of-five.scss'
import './../../../sass/pages/_categorized-page.scss'
import { Link } from '@reach/router'
import { ReviewsNetworkContext } from './../../App'
import { createTrendingCards, createCards } from './../../Card/createCards'

const Trending = () => {
  const state = useContext(ReviewsNetworkContext)
  const { trending, restaurants, hotels } = state[0]

  return (
    <div className='grid-of-five'>
      <div className='grid-of-five__wrapper'>
        
        <h2 className='category'>Trending
          <Link className='category__seeall' to='search?page=1'>See all</Link>
        </h2>
        <div className='grid-of-five__grid'>
          {createTrendingCards(trending)}
        </div>

        <h2 className='category'>Restaurants
          <Link className='category__seeall' to='restaurants'>See all</Link>
        </h2>
        <div className='grid-of-five__grid'>
          {createCards(restaurants)}
        </div>


        <h2 className='category'>Hotels
          <Link className='category__seeall' to='hotels'>See all</Link>
        </h2>
        <div className='grid-of-five__grid'>
          {createCards(hotels)}
        </div>

      </div>
    </div>
  )
}

export default Trending