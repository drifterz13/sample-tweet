import { GET_ALL_MESSAGES } from '../../actionType'
import axios from 'axios'

const getAllMessages = (messages) => {
  return {
    type: GET_ALL_MESSAGES,
    messages
  }
}

export const fetchMessage = token => dispatch => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  return axios.get('/api/messages').then(({data}) => {
    const messages = data.messages
    return dispatch(getAllMessages(messages))
  })
}


