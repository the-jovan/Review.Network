import axios from 'axios'

export const getTrending = (page = 1) => {
  return axios.get('https://api.review.network/entities/trending', {
    params: {
      page
    }
  })
  .then (response => {
    return response.data
  })
} 

export const getRestaurants = (page = 1) => {
  return axios.get('https://api.review.network/restaurants', {
    params: {
      page
    }
  })
  .then (response => {
    return response.data
  })
} 

export const getHotels = (page = 1) => {
  return axios.get('https://api.review.network/hotels', {
    params: {
      page
    }
  })
  .then (response => {
    return response.data
  })
}

export const getAll = () => {
  return axios.all([getTrending(), getRestaurants(), getHotels()])
  .then(axios.spread((...args) => args))
}