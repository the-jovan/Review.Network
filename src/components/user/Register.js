import React from 'react'
import './../../sass/pages/_form.scss'
import logo from './../../images/logo.webp'

const Register = () => {
  return (
    <div className='user'>
      <header className='user__header'>
        <img src={logo} />
        <p>Your opinion matters</p>
      </header>
      <form className='user__form' onSubmit={e => e.preventDefault()}>
        <input className='user__form__input' type='email' name='name' placeholder='Email' />
        <input className='user__form__input' type='password' name='password' placeholder='Password' />
        <input className='user__form__submit' type='submit' value='Sign up'/>
      </form>
    </div>
  )
}

export default Register