import React from 'react'
import './../../../sass/components/product/_product-score.scss'
const Score = ({ opts }) => {

  const createRating = () => {
    if (opts.stars !== null && opts.stars !== undefined) {
      if (opts.stars > 4) return "Excellent"
      else if (opts.stars > 3) return "Above Average"
      else if (opts.stars > 2) return "Average"
      else if (opts.stars > 1) return "Belove Average"
      else return "Terrible"
    }
  }

  const createRatingSvg = () => {
    if (opts.stars !== null && opts.stars !== undefined) {
      return <img src={`/scores/${(Math.round(opts.stars * 10) / 10).toFixed(1)}.svg`} alt={`Score is ${(Math.round(opts.stars * 10) / 10).toFixed(1)}`}/>
    } else {
      return <img src={`/scores/0.0.svg`} alt='Score iz zero'/>
    }
  }

  const createBars = star => {
    let stars = [opts.review.stars5, opts.review.stars4, opts.review.stars3, opts.review.stars2, opts.review.stars1]
    let max = Math.max(...stars)
    let onePerc = 80 / max
    return star * onePerc
  }

  const createTable = () => {
    let tableData = [
      {name: 'Excellent', stars: opts.review.stars5},
      {name: 'Above Average', stars: opts.review.stars4},
      {name: 'Average', stars: opts.review.stars3},
      {name: 'Below Average', stars: opts.review.stars2},
      {name: 'Terrible', stars: opts.review.stars1}
    ]
    return tableData.map( element => (
      <div className='score__table__element' key={element+Math.random()}>
      <span>{element.name}</span>
      <div style={{backgroundImage: `linear-gradient(to right, rgb(185, 0, 150), rgb(0, 125, 125), white ${0 + createBars(element.stars)}%)`}}/>
      <span>{element.stars}</span>
    </div>
    ))
  }

  return (
    <div className='score'>
      <p className='score__text'><span>{createRatingSvg()}</span> {createRating()} - {opts.review.reviews_total} Reviews</p>
      
      <div className='score__table'>
        {createTable()}
      </div>
    </div>
  )
}

export default Score