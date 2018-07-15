import { ADD_ERROR, REMOVE_ERROR } from '../../actionType'

function error(state = {}, action) {
  switch(action.type) {
    case ADD_ERROR: 
      return {...state, message: action.error}
    case REMOVE_ERROR:
      return {}
    default:
      return state
  }
}

export default error