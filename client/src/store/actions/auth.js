import { LOGGED_IN } from '../../actionType'
import axios from 'axios'
import { addError, removeError } from '../actions/error'

const loggedIn = (user) => {
  return {
    type: LOGGED_IN,
    user
  }
}

export const auth = (data, type) => {
  const config = { method: 'post', url: `/api/auth/${type}`, data }
  return dispatch => {
    return axios(config).then(({data: user}) => {
      dispatch(removeError())
      dispatch(loggedIn(user))
    }).catch(err => {
      dispatch(addError(err.message))
      return Promise.reject(err)
    })
  }
}


