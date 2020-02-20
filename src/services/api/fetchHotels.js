import axios from 'axios'

export const getFiveStars = (page = 1) => {
  return axios.get('https://api.review.network/hotels/search', {
    params: {
      stars: 5,
      page
    }
  })
  .then(response => {
    return response.data
  })
}

export const getFourStars = (page = 1) => {
  return axios.get('https://api.review.network/hotels/search', {
    params: {
      stars: 4,
      page
    }
  })
  .then(response => {
    return response.data
  })
}

export const getThreeStars = (page = 1) => {
  return axios.get('https://api.review.network/hotels/search', {
    params: {
      stars: 3,
      page
    }
  })
  .then(response => {
    return response.data
  })
}

export const getAllHotels = () => {
  return axios.all([getFiveStars(), getFourStars(), getThreeStars()])
  .then(axios.spread((...args) => args))
}