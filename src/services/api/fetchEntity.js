import axios from 'axios'

export const getSingleRestaurant = (name) => {
  return axios.get(`https://api.review.network/restaurants/${name}`)
  .then(response => {
    return response.data
  })
}

export const getSingleHotel = (name) => {
  return axios.get(`https://api.review.network/hotels/${name}`)
  .then(response => {
    return response.data
  })
}

export const getReviews = (id) => {
  return axios.get(`httpss://api.review.network/entities/${id}/reviews?page=1`)
  .then(response => {
    return response.data
  })
}

export const getCity = (name) => {
  return axios.get(`httpss://api.review.network/cities/search/${name}`)
  .then(response => {
    return response.data
  })
}