import React, { useState, useEffect } from 'react'
import './../../../sass/pages/_search.scss'
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import { useBottomScrollListener } from 'react-bottom-scroll-listener'
import { createCards, createTrendingCards } from './../../Card/createCards'
import { getDinner, getLunch, getBrunch } from './../../../services/api/fetchRestaurants'
import { getFiveStars, getFourStars, getThreeStars } from './../../../services/api/fetchHotels'
import { getTrending } from './../../../services/api/fetchAll'

const Search = ({ type }) => {
  const [fetching, setFetching] = useState(false)
  const [searchedData, updateSearchedData] = useState({
    list: [],
    limit: 1
  })

  const urlParams = new URLSearchParams(window.location.search)
  let page = urlParams.get('page')

  useEffect(() => {
    getData().then(response => {
      setFetching(false)
      updateSearchedData({ page: page, list: [...searchedData.list, ...response.data], limit: response.meta.pagination.total_pages })    })
  }, [])

  function getData(pages = page) {
    setFetching(true)
    if (type === 'trending') {
      return getTrending(pages)
    } else if (type === 'restaurants') {
      switch (urlParams.get('meals')) {
        case 'Dinner':
          return getDinner(pages)
        case 'Lunch':
          return getLunch(pages)
        case 'Brunch':
          return getBrunch(pages)
      } 
    } else if (type === 'hotels') {
      switch (urlParams.get('stars')) {
        case '5':
          return getFiveStars(pages)
        case '4':
          return getFourStars(pages)
        case '3':
          return getThreeStars(pages)
      }
    }
  }

  const renderCards = () => type === 'trending' ? createTrendingCards(searchedData.list) : createCards(searchedData.list)

  useBottomScrollListener(() => {
    let newPage = parseInt(searchedData.page) + 1
    if (newPage < searchedData.limit) {
      setFetching(true)
      getData(newPage).then(response => {
        setFetching(false)
        updateSearchedData({ ...searchedData, page: newPage, list: [...searchedData.list, ...response.data] })
      })
    }
  })

  return (
    <div className='search__wrapper'>
      <div className='search__grid'>
        { renderCards() }
        { fetching && <Loader type="TailSpin" style={{ color: "rgb(0, 125, 125)", height: "80px", width: "80px" }}/> }
      </div>
    </div>
  )
}

export default Search