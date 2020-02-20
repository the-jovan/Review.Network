import React from 'react'
import './../../sass/layout/_header.scss'
import './../../sass/layout/_mobile-navigation.scss'
import { Link } from '@reach/router'
import logo from './../../images/nav-logo.webp'

import reviews from './../../images/reviews.webp'
import reviewsActive from './../../images/reviews-active.webp'
import surveys from './../../images/surveys.webp'
import surveysActive from './../../images/surveys-active.png'
import wallet from './../../images/wallet.webp'
import walletActive from './../../images/wallet-active.png'
import notifications from './../../images/notifications.webp'
import notificationsActive from './../../images/notifications-active.png'
import profile from './../../images/profile.webp'
import profileActive from './../../images/profile-active.png'

const Header = () => {
  return (
    <header className='header'>
      <div className='header__wrapper'>
        
        <Link to='/'>
          <img className='header__logo' src={logo} alt='Review Network Logo'/>
        </Link>
        
        <nav className='header__navigation'>
          <Link className='header__navigation__link' to='/reviews/trending'>Reviews</Link>
          <Link className='header__navigation__link' to='/login'>Login</Link>
          <Link className='header__navigation__link' to='/register'>Register</Link>
        </nav>

        <nav className='mobile__navigation'>
          <div>

          </div>
          <Link className='mobile__navigation__link' to='/reviews/trending' 
            getProps={({ isCurrent }) => { return {style: { backgroundImage: isCurrent ? "url(" + reviewsActive + ")" : "url(" + reviews + ")" }}}}
          >
            <span>Reviews</span>
          </Link>
          <Link className='mobile__navigation__link' to='/login'
            getProps={({ isCurrent }) => { return {style: { backgroundImage: isCurrent ? "url(" + surveysActive + ")" : "url(" + surveys + ")" }}}}
          >
            <span>Surveys</span>
          </Link>
          <Link className='mobile__navigation__link' to='/wallet'
            getProps={({ isCurrent }) => { return {style: { backgroundImage: isCurrent ? "url(" + walletActive + ")" : "url(" + wallet + ")" }}}}
          >
            <span>Wallet</span>
          </Link>
          <Link className='mobile__navigation__link' to='/notifications'                
            getProps={({ isCurrent }) => { return {style: { backgroundImage: isCurrent ? "url(" + notificationsActive + ")" : "url(" + notifications + ")" }}}}
          >
              <span>Notifications</span>
          </Link>
          <Link className='mobile__navigation__link' to='/profile'
            getProps={({ isCurrent }) => { return {style: { backgroundImage: isCurrent ? "url(" + profileActive + ")" : "url(" + profile + ")" }}}}
          >
            <span>Profile</span>
          </Link>
        </nav>

      </div>
    </header>
  )
}

export default Header