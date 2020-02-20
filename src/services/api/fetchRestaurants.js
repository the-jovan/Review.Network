import axios from 'axios'

export const getDinner = (page = 1) => {
  return axios.get('https://api.review.network/restaurants/search', {
    params: {
      meals: 'Dinner',
      page
    }
  })
  .then(response => {
    return response.data
  })
}

export const getLunch = (page = 1) => {
  return axios.get('https://api.review.network/restaurants/search', {
    params: {
      meals: 'Lunch',
      page
    }
  })
  .then(response => {
    return response.data
  })
}

export const getBrunch = (page = 1) => {
  return axios.get('https://api.review.network/restaurants/search', {
    params: {
      meals: 'Brunch',
      page
    }
  })
  .then(response => {
    return response.data
  })
}

export const getAllRestaurants = () => {
  return axios.all([getDinner(), getLunch(), getBrunch()])
  .then(axios.spread((...args) => args))
}