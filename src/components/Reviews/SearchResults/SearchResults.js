import React, { useEffect, useState, useContext } from 'react'
import './../../../sass/pages/_search-results.scss'
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import { useBottomScrollListener } from 'react-bottom-scroll-listener'
import { searchAll, searchRestaurants, searchHotels } from './../../../services/api/searchAll'

import { ReviewsContext } from './../Reviews'
import { createHorizontalCards, createTrendingHorizontalCards } from './../../Card/createCards'

const SearchResults = ({term, type}) => {
  const state = useContext(ReviewsContext)
  const [data, setData] = useState({
    list: [],
    limit: 1,
    current: 1
  })
  const [fetching, setFetching] = useState(false)

  useEffect(() => {
    setFetching(true)

    switch(type) {
      case 'trending':
        searchAll(term, 1).then(response => {
          setFetching(false)
          setData({
            ...data,
            list: [...response.data],
            limit: response.meta.pagination.total_pages,
            current: response.meta.pagination.current_page
          })
        })
      break
      case 'restaurants':
        searchRestaurants(term, 1).then(response => {
          setFetching(false)
          setData({
            ...data,
            list: [...response.data], 
            limit: response.meta.pagination.total_pages,
            current: response.meta.pagination.current_page
          })
        })
      break
      case 'hotels':
        searchHotels(term, 1).then(response => {
          setFetching(false)
          setData({
            ...data,
            list: [...response.data],
            limit: response.meta.pagination.total_pages,
            current: response.meta.pagination.current_page
          })
        })
      break
    }
  }, [state, term])

  useBottomScrollListener(() => {
    if (data.current < data.limit)
    setFetching(true)
    fetchData(term, data.current + 1)
  })

  function fetchData (term, page = 1) {
    switch(type) {
      case 'trending':
        searchAll(term, page).then(response => {
          setFetching(false)
          setData({
            ...data,
            list: [...data.list, ...response.data],
            limit: response.meta.pagination.total_pages,
            current: response.meta.pagination.current_page
          })
        })
      break
      case 'restaurants':
        searchRestaurants(term, page).then(response => {
          setFetching(false)
          setData({
            ...data,
            list: [...data.list, ...response.data], 
            limit: response.meta.pagination.total_pages,
            current: response.meta.pagination.current_page
          })
        })
      break
      case 'hotels':
        searchHotels(term, page).then(response => {
          setFetching(false)
          setData({
            ...data,
            list: [...data.list, ...response.data],
            limit: response.meta.pagination.total_pages,
            current: response.meta.pagination.current_page
          })
        })
      break
    }
  }

  return (
    <div className='searchResults__wrapper'>
      <div className='searchResults'>
        {type === 'trending' ? createTrendingHorizontalCards(data.list) : createHorizontalCards(data.list)}
        { fetching && <Loader type="TailSpin" style={{ color: "rgb(0, 125, 125)", height: "80px", width: "80px" }}/> }
      </div>
    </div>
  )
}

export default SearchResults