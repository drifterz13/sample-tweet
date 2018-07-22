import { LOGGED_IN, LOGGED_OUT } from '../../actionType'

const initialState = {
  isAuthenticated: false,
  info: null
}

function user(state = initialState, action) {
  switch (action.type) {
    case LOGGED_IN :
      return {...state, isAuthenticated: true, info: {...action.user}}
    case LOGGED_OUT :
      return initialState
    default :
      return state
  }
}

export default user