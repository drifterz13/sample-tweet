import { GET_ALL_MESSAGES, ADD_MESSAGE } from '../../actionType'
import api from '../../service'

const getAllMessages = (messages) => {
  return {
    type: GET_ALL_MESSAGES,
    messages
  }
}

const addMessagge = (message) => {
  return {
    type: ADD_MESSAGE,
    message
  }
}

export const fetchMessage = () => dispatch => {
  return api.message('/api/messages').getAll().then(({data}) => {
    const messages = data.messages
    return dispatch(getAllMessages(messages))
  })
}

export const postMessage = (user_id, text) => {
  return dispatch => {
    return api.message(`/api/user/${user_id}/message`).tweet(text).then(({data}) => {
      const message = data.foundMessage
      return dispatch(addMessagge(message))
    })
  }
}


