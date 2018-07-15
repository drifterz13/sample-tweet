import { GET_ALL_MESSAGES, ADD_MESSAGE, DELETE_MESSAGE } from '../../actionType'


function messages (state = [], action) {
  switch(action.type) {
    case GET_ALL_MESSAGES:
      const messages = action.messages
      return messages.map(message => ({...message}))
    case ADD_MESSAGE:
      return state.push({...action.message})
    case DELETE_MESSAGE:
      return state.filter(message => message._id !== action.id)
    default:
      return state
  }
}

export default messages