import axios from 'axios'

export const searchAll = ( name, page ) => {
  return axios.get('https://api.review.network/entities/search', {
    params: {
      name,
      page
    }
  })
  .then(response => {
    return response.data
  })
}

export const searchRestaurants = ( name, page ) => {
  return axios.get('https://api.review.network/restaurants/search', {
    params: {
      name,
      page
    }
  })
  .then(response => {
    return response.data
  })
}

export const searchHotels = ( name, page ) => {
  return axios.get('https://api.review.network/hotels/search', {
    params: {
      name,
      page
    }
  })
  .then(response => {
    return response.data
  })
}