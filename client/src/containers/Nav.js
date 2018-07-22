import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signout } from '../store/actions/auth'
import '../assets/css/Nav.css'

class Nav extends React.Component {

  render() {
    return (
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
              {!this.props.isAuthenticated ? (
                <Fragment>
                  <Link to='/signin' className='navbar-item'>
                    <i className='fas fa-sign-in-alt'></i>
                    Sign in
                  </Link>
                  <Link to='/signup' className='navbar-item'>
                    <i className='fas fa-user-plus'></i>
                    Sign up
                  </Link>
                </Fragment>
              ) : (
                  <Link to='/' className='navbar-item' onClick={() => this.props.signout()}>
                    <i className='fas fa-sign-out-alt'></i>
                    Sign out
                  </Link>
                )}
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.user.isAuthenticated
  }
}

Nav.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  signout: PropTypes.func.isRequired
}

export default connect(mapStateToProps, { signout })(Nav)