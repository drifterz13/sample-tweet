import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => (
  <nav className='navbar is-white'>
    <div className='container'>
      <div className='navbar-menu'>
        <div className='navbar-start'>
          <Link to='/' className='navbar-item'>
            <i className='fas fa-home'></i>
            Home
          </Link>
        </div>
        <div className='navbar-end'>
          <Link to='/signin' className='navbar-item'>
            <i className='fas fa-sign-in-alt'></i>
            Sign in
          </Link>
          <Link to='/signup' className='navbar-item'>
            <i className='fas fa-user-plus'></i>
            Sign up
          </Link>
        </div>
      </div>
    </div>
  </nav>
)

export default Nav