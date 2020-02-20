import React from 'react'
import './../../sass/pages/_form.scss'
import logo from './../../images/logo.webp'
import { Link } from '@reach/router'

const Login = () => {
  return (
    <div className='user'>
      <header className='user__header'>
        <img src={logo} alt='Review Network Logo'/>
        <p>Your opinion matters</p>
      </header>
      <form className='user__form' onSubmit={e => e.preventDefault()}>
        <input className='user__form__input' type='email' name='name' placeholder='Email' />
        <input className='user__form__input' type='password' name='password' placeholder='Password' />
        <input className='user__form__submit' type='submit' value='Log in'/>
      </form>
      <div className='user__links'>
        <Link className='user__links__link' to='/register'>Create Account</Link>
        <Link className='user__links__link' to=''>Recover Account</Link>
      </div>
    </div>
  )
}

export default Login