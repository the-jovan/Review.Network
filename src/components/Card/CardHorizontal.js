import React from 'react'
import './../../sass/components/cards/_cards-horizontal.scss'
import { Link } from '@reach/router'

const CardHorizontal = props => {
  const {img, type, name, address, stars, review, slug, cuisine, summary} = props

  const getLoc = () => {
    if (type === 'Restaurant') return 'restaurants'
    else if (type === 'Hotel') return 'hotels'
  }

  const createRating = () => {
    if (stars !== null && stars !== undefined) {
      return (<img src={`/scores/${(Math.round(stars * 10) / 10).toFixed(1)}.svg`} />)
    } else {
      return (<img src={`/scores/0.0.svg`} />)
    }
  }

  return (
    <Link className='card-hor' to={`/product/${getLoc()}/${slug}`} style={{maxHeight: "12rem"}}>
      <div className='card-hor__img' style={{backgroundImage: "url(" + img + ")"}} alt={name} />
      <div className='card-hor__info'>
        <span className='card-hor__name'>{name}</span>
        <span className='card-hor__address'>{address}</span>
        <div className='card-hor__info__reviews'>
          <span className='card-hor__info__reviews__svg'>{createRating()}</span>
          <span className='card-hor__info__reviews__number'>{review} reviews</span>
        </div>
        <span className='card-hor__address'>{cuisine && cuisine.join(', ') || summary && summary}</span>
      </div>
    </Link>
  )
}

export default CardHorizontal

