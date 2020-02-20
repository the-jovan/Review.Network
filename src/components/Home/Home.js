import React from 'react'
// import './../../scss/components/home/_home.scss'
import './../../sass/pages/_home.scss'
import { Link } from '@reach/router'

const Home = () => {
  return (
    <div className='home'>
      <h1>Review Networks</h1>
      <p>Your opinion matters</p>
      <Link to='/reviews/trending'>Explore</Link>
    </div>
  )
}

export default Home