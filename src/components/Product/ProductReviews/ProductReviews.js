import React, { useState, useEffect } from 'react'
import './../../../sass/components/product/_product-reviews.scss'
import { getReviews } from './../../../services/api/fetchEntity'

const ProductReviews = ({id}) => {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    getReviews(id)
    .then(response => setReviews(response.data))
    .catch(err => console.error(err))
  }, [id])

  const setScore = (score) => {
    switch(score) {
      case 5:
        return <p>EXCELLENT</p>
      case 4:
        return <p>ABOVE AVERAGE</p>
      case 3:
        return <p>AVERAGE</p>
      case 2:
        return <p>BELOW AVERAGE</p>
      case 1:
        return <p>TERRIBLE</p>
      default:
        return null
    }
  }

  const createRating = (stars) => {
    if (stars !== null && stars !== undefined) {
      return (<img src={`/scores/${(Math.round(stars * 10) / 10).toFixed(1)}.svg`} alt={`Score is ${(Math.round(stars * 10) / 10).toFixed(1)}`}/>)
    } else {
      return (<img src={`/scores/0.0.svg`} alt='Score is zero.'/>)
    }
  }
  
  const renderReviews = () => {
    if (reviews.length === 0) {
      return <div className='productReviews__noReview'>
        <img src='https://image.flaticon.com/icons/svg/857/857676.svg' alt='No reviews available icon'/>
        <p>No reviews</p>
      </div>
    } else {
      return reviews.map(e => (
        <div className='productReviews__review' key={e.id}>
          <h2 className='productReviews__review__title'>{e.title}</h2>
          
          <div className='productReviews__review__author'>
            <div className='productReviews__review__author__img' style={{backgroundImage: "url(" + e.author.profile_photo + ")"}}></div>
            <div className='productReviews__review__author__info'>
              <p className='productReviews__review__author__info__username'>{e.author.username}</p>
              <p className='productReviews__review__author__info__date'>{e.created_at.date.split(' ')[0]}</p>
            </div>
            <div className='productReviews__review__author__score'>
              {setScore(e.score)}
              <p>{createRating(e.score)}</p>
            </div>
          </div>

          <div className='productReviews__review__image' style={{backgroundImage: "url(" + e.author.profile_photo + ")"}}></div>

          <p className='productReviews__review__body'>{e.body}</p>

          <p className='productReviews__review__votes'>
            Helpful? <span>&#9757;</span> {e.upvotes_count} <span>&#9759;</span> {e.downvotes_count}
          </p>

          
        </div>
      ))
    }
  }

  return (
    <div className='productReviews'>
      {renderReviews()}
    </div>
  )
}

export default ProductReviews