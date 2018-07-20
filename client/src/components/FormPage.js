import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { auth } from '../store/actions/auth'
import './FormPage.css'

class FormPage extends React.Component {
  state = {
    user: {
      username: '',
      password: '',
      email: '',
      profileImageUrl: ''
    },
    errors: {}
  }

  handleSubmit = e => {
    console.log('click')
    e.preventDefault()
    this.props.auth(this.state.user, this.props.type)
      .then(user => this.props.history.push('/dashboard'))
      .catch(err => {
        const { message } = this.props.error;
        this.setState({ ...this.state, errors: { ...this.state.errors, message } })
      })
  }

  handleChange = e => this.setState({
    ...this.state,
    user: { ...this.state.user, [e.target.name]: e.target.value }
  })

  render() {
    const divError = {
      padding: '5px',
      textAlign: 'center',
      fontSize: '14px'
    }
    const classNameInput = Object.keys(this.state.errors).length > 0 ?
      'input is-small is-danger' : 'input is-small'
    const { username, password, email, profileImageUrl } = this.state.user
    const { errors } = this.state;

    return (
      <div className='form-page'>
        <div className='form-wrapper'>
          <form className='field' onSubmit={this.handleSubmit}>
            <div className='form-group'>
              {Object.keys(errors).length > 0 && (
                <div
                  style={divError}
                  className='notification is-danger'>
                  {errors.message}
                </div>
              )}

              <label className='label' htmlFor='email'>Email: </label>
              <input
                id='email'
                type='email'
                className={classNameInput}
                name='email'
                value={email}
                onChange={this.handleChange}
              />
            </div>
            <div className='form-group'>
              <label className='label' htmlFor='password'>Password: </label>
              <input
                id='password'
                type='password'
                className={classNameInput}
                name='password'
                value={password}
                onChange={this.handleChange}
              />
            </div>
            {this.props.type === 'signup' && (
              <Fragment>
                <div className='form-group'>
                  <label className='label' htmlFor='username'>Username: </label>
                  <input
                    id='username'
                    type='text'
                    className={classNameInput}
                    name='username'
                    value={username}
                    onChange={this.handleChange}
                  />
                </div>
                <div className='form-group'>
                  <label className='label' htmlFor='profileImageUrl'>Image URL: </label>
                  <input
                    id='profileImageUrl'
                    type='text'
                    className={classNameInput}
                    name='profileImageUrl'
                    value={profileImageUrl}
                    onChange={this.handleChange}
                  />
                </div>
              </Fragment>
            )}

            <button type='submit' className="button is-info is-rounded">
              Submit
            </button>
          </form >

          <section className='footer-wrapper'>
            <span>
              <p>Are you new in twitter ? <Link to='/signup'>Signup now >></Link></p>
            </span>
            <span>
              <Link to='/'>Forget Password ?</Link>
            </span>
          </section>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.user,
    error: state.error
  }
}

FormPage.propTypes = {
  users: PropTypes.shape({
    isAuthenticated: PropTypes.bool.isRequired,
    info: PropTypes.object
  }).isRequired,
  error: PropTypes.shape({
    message: PropTypes.string
  }).isRequired,
  auth: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
}

export default connect(mapStateToProps, { auth })(FormPage)