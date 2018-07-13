import React from 'react'
import { auth } from '../services/apiCall'

class SignupPage extends React.Component {
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
    e.preventDefault()
    auth.signup(this.state.user)
      .then(user => console.log('complete', user))
      .catch(err => console.log(err.response.data.error))
  }

  handleChange = e => this.setState({
    ...this.state,
    user: {...this.state.user, [e.target.name]: e.target.value} 
  })

  render() {
    const { username, password, email, profileImageUrl } = this.state.user
    return (
      <form onSubmit={this.handleSubmit} >
        <label htmlFor='username'>Username: </label>
        <input 
          id='username'
          name='username'
          value={username}
          onChange={this.handleChange}
        />
        <label htmlFor='password'>Password: </label>
        <input 
          id='password'
          name='password'
          value={password}
          onChange={this.handleChange}
        />
        <label htmlFor='email'>Email: </label>
        <input 
          id='email'
          name='email'
          value={email}
          onChange={this.handleChange}
        />
        <label htmlFor='profileImageUrl'>Image URL: </label>
        <input 
          id='profileImageUrl'
          name='profileImageUrl'
          value={profileImageUrl}
          onChange={this.handleChange}
        />
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default SignupPage