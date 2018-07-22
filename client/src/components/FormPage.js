import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { userAuth } from '../store/actions/auth'
import '../assets/css/FormPage.css'

class FormPage extends React.Component {
  state = {
    user: {
      username: '',
      password: '',
      email: '',
      profileImageUrl: ''
    },
    errors: null
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.userAuth(this.state.user, this.props.type)
      .then(user => this.props.history.push('/dashboard'))
      .catch(err => {
        const { message } = this.props.error;
        this.setState({ ...this.state, errors: {message} })
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
    const { errors } = this.state;
    const styleInput = errors ? 'input is-small is-danger' : 'input is-small'
    const { username, password, email, profileImageUrl } = this.state.user

    return (
      <div className='form-page'>
        <div className='form-wrapper'>
          <form onSubmit={this.handleSubmit}>
            <div className='field form-group'>
              {errors && (
                <div style={divError}
                  className='notification is-danger'>
                  {errors.message}
                </div>
              )}

              <label className='label' htmlFor='email'>Email: </label>
              <div className='control'>
                <input
                  id='email'
                  type='email'
                  className={styleInput}
                  name='email'
                  value={email}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className='field form-group'>
              <label className='label' htmlFor='password'>Password: </label>
              <div className='control'>
                <input
                  id='password'
                  type='password'
                  className={styleInput}
                  name='password'
                  value={password}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            {this.props.type === 'signup' && (
              <Fragment>
                <div className='field form-group'>
                  <label className='label' htmlFor='username'>Username: </label>
                  <div className='control'>
                    <input
                      id='username'
                      type='text'
                      className={styleInput}
                      name='username'
                      value={username}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className='field form-group'>
                  <label className='label' htmlFor='profileImageUrl'>Image URL: </label>
                  <div className='control'>
                    <input
                      id='profileImageUrl'
                      type='text'
                      className={styleInput}
                      name='profileImageUrl'
                      value={profileImageUrl}
                      onChange={this.handleChange}
                    />
                  </div>
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
  userAuth: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
}

export default connect(mapStateToProps, { userAuth })(FormPage)