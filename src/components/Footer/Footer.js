import React from 'react'
import './../../sass/layout/_footer.scss'

const Footer = () => {
  return (
    <footer className='footer'>
      Copyright &copy; Review.Network {new Date().getFullYear()} &bull; All rights reserved.
    </footer>
  )
}

export default Footer