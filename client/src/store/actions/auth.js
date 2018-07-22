import { LOGGED_IN, LOGGED_OUT } from '../../actionType'
import api from '../../service'
import { addError, removeError } from '../actions/error'

export const loggedIn = (user) => {
  return {
    type: LOGGED_IN,
    user
  }
}

const loggedOut = () => {
  return {
    type: LOGGED_OUT
  }
}

export const userAuth = (data, type) => {
  const config = { method: 'post', url: `/api/auth/${type}`, data }
  return dispatch => {
    return api.user().authentication(config).then(({data: user}) => {
      localStorage.authToken = user.token
      dispatch(removeError())
      return dispatch(loggedIn(user))
    }).catch(err => {
      dispatch(addError(err.response.data.error.message))
      return Promise.reject(err.response.data.error)
    })
  }
}

export const signout = () => dispatch => {
  localStorage.removeItem('authToken')
  return dispatch(loggedOut())
}

