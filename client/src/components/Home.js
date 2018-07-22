import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/Home.css'

const Home = () => (
  <Fragment>
    <div className='homepage'>
      <div className='left-side'>
        <span>
          <i className='fas fa-search fa-lg'></i>
          Follow your interest
        </span>
        <span>
          <i className='fas fa-user-friends fa-lg'></i>
          Listen what people talking
        </span>
        <span>
          <i className='fas fa-comment fa-lg'></i>
          Join conversation
        </span>
      </div>

      <div className='right-side'>
        <div className='twitter-login icon has-text-info'>
          <i className='fab fa-twitter fa-lg'></i>
          <Link to='/signin' className="button is-outlined">Sign in</Link>
        </div>
        <h1>Let's see what happen in this world!</h1>
        <div className='twitter-join'>
          <h2>Join twitter today</h2>
          <div className='group-button'>
            <Link to='/signup' className="button is-info is-fullwidth">Sign up</Link>
            <Link to='/signin' className="button is-outlined is-fullwidth">Sign in</Link>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
)

export default Home