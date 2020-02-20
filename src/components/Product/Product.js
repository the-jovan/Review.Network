import React, { useState, useEffect } from 'react'
import './../../sass/components/product/_product.scss'
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import { getSingleRestaurant, getSingleHotel } from './../../services/api/fetchEntity'
import { Link, navigate } from '@reach/router'

import ProductScore from './ProductScore/ProductScore'
import ProductGallery from './ProductGallery/ProductGallery'
import ProductOverview from './ProductOverview/ProductOverview'
import ProductDropDown from './ProductDropDown/ProductDropDown'
import ProductReviews from './ProductReviews/ProductReviews'

const Product = ({type, name}) => {
  const [data, setData] = useState()

  useEffect(() => {
    switch(type) {
      case 'restaurants':
        getSingleRestaurant(name)
        .then(response => setData(response.data))
        .catch(err => console.error(err))
      break
      case 'hotels':
        getSingleHotel(name)
        .then(response => setData(response.data))
        .catch(err => console.error(err))
      break
    }
  }, [type, name])

  const createMainImage = () => {
    return data && <div className='product__mainImg' style={{backgroundImage: "url(" + data.images[0] + ")"}} />
  }

  const createScore = () => {
    if (data) {
      const opts = {stars: data.review_stats.average_score, review: data.review_stats}
      return <ProductScore opts={opts}/>
    }
  }

  const createGallery = () => {
    return data && <ProductGallery images={data.images} />
  }

  const createOverview = () => {
    if (data) {
      const info = {
        address: data.address, 
        phone: data.phone, 
        website: data.website, 
        email: data.email, 
        rooms: data.room_info, 
        country: data.country_name, 
        city: data.city_name
      }
      return <ProductOverview info={info}/>
    }
  }

  const createDropDown = () => {
    if (data) {
      if (type === 'restaurants') {
        const info = [
          {type: 'Cuisine', facilities: data.cuisine}, 
          {type: 'Meals', facilities: data.meals},
          {type: 'Features', facilities: data.features}, 
          {type: 'Good For', facilities: data.good_for}
        ]
        return info.map(e => <ProductDropDown info={e} key={e.id}/>)
      } else if (type === 'hotels') {
        return data.facilities.map(e => <ProductDropDown info={e} key={e.id}/>)
      }
    }
  }

  const createReviews = () => {
    return data && <ProductReviews id={data.entity_id} />
  }

  return (
    <div className='product'>
      <div className='product__wrapper'>

        {createMainImage()}
        
        <div className='product__sides'>
        
          <div className='product__side'>
            {data && <div className='product__return' onClick={() => navigate(-1)}>&lt;</div>}
            <h2 className='product__title'>{name.split('-').join(' ')}</h2>
            {!data && <Loader type="TailSpin" style={{color: "rgb(0, 125, 125)", height: "80px", width: "80px"}} />}
            {createScore()}
            <div className='productGallery__desktop'>
              {createGallery()}
            </div>
            {data && data.summary && <p className='product__summary'>{data.summary}</p>}
          </div>
        
          <div className='product__side'>
            {data && <Link className='product__addReview' to=''>Write Review</Link>}
            {createOverview()}
            <div>
              {createDropDown()}
            </div>
            <div className='productGallery__mobile'>
              {createGallery()}
            </div>
          </div>

        </div>
        
        {createReviews()}
      </div>
    </div>
  )
}

export default Product