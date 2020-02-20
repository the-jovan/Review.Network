import React from 'react'
import Card from './Card'
import CardHorizontal from './CardHorizontal'
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

export const createTrendingCards = data => {
  if (!data) {
    return <Loader type="TailSpin" style={{color: "blue", height: "80px", width: "1080px", textAlign: "center"}} /> 
  } else {
    return data.map(e => (
      <Card key={e.id+Math.random()}
        img={e.entity.images[0]}
        type={e.entity.type}
        name={e.entity.name}
        slug={e.entity.slug}
        address={e.entity.address}
        stars={e.entity.review_stats.average_score}
        review={e.entity.review_stats.reviews_total}
      />
    ))
  }
}

export const createCards = data => {
  if (!data) {
    return <Loader type="TailSpin" style={{color: "rgb(0, 125, 125)", height: "80px", width: "1080px", textAlign: "center"}} />
  } else {
    return data.map(e => (
      <Card key={e.id+Math.random()}
        img={e.images[0]}
        type={e.type}
        name={e.name}
        slug={e.slug}
        address={e.address}
        stars={e.review_stats.average_score}
        review={e.review_stats.reviews_total}
      />
    ))
  }
}

export const createTrendingHorizontalCards = data => {
  console.log(data)
  if (!data) {
    return <Loader type="TailSpin" style={{color: "blue", height: "80px", width: "80px", textAlign: "center"}} /> 
  } else {
    return data.map(e => (
      <CardHorizontal key={e.id+Math.random()}
        img={e.entity.images[0]}
        type={e.entity.type}
        name={e.entity.name}
        slug={e.entity.slug}
        address={e.entity.address}
        stars={e.entity.review_stats.average_score}
        review={e.entity.review_stats.reviews_total}
        cuisine={e.entity.cuisine}
        summary={e.entity.summary}
      />
    ))
  }
}

export const createHorizontalCards = data => {
  if (!data) {
    return <Loader type="TailSpin" style={{color: "blue", height: "80px", width: "80px", textAlign: "center"}} /> 
  } else {
    return data.map(e => (
      <CardHorizontal key={e.id+Math.random()}
        img={e.images[0]}
        type={e.type}
        name={e.name}
        slug={e.slug}
        address={e.address}
        stars={e.review_stats.average_score}
        review={e.review_stats.reviews_total}
        cuisine={e.cuisine}
        summary={e.summary}
      />
    ))
  }
}