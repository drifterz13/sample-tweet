import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { auth } from '../store/actions/auth'

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

  componentDidMount() {
    console.log('props', this.props)
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.auth(this.state.user, this.props.type)
      .then(user => {
        console.log('complete', user)
        this.props.history.push('/')
      })
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
    const { username, password, email, profileImageUrl } = this.state.user
    const { type } = this.props
    return (
      <form onSubmit={this.handleSubmit} >
        <label htmlFor='email'>Email: </label>
        <input
          id='email'
          name='email'
          value={email}
          onChange={this.handleChange}
        />
        <label htmlFor='password'>Password: </label>
        <input
          id='password'
          name='password'
          value={password}
          onChange={this.handleChange}
        />
        {type === 'signup' && (
          <Fragment>
            <label htmlFor='username'>Username: </label>
            <input
              id='username'
              name='username'
              value={username}
              onChange={this.handleChange}
            />
            <label htmlFor='profileImageUrl'>Image URL: </label>
            <input
              id='profileImageUrl'
              name='profileImageUrl'
              value={profileImageUrl}
              onChange={this.handleChange}
            />
          </Fragment>
        )}
        <button type='submit'>Submit</button>
      </form >
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    error: state.error
  }
}


export default connect(mapStateToProps, { auth })(FormPage)