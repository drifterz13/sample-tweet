import { LOGGED_IN } from '../../actionType'

const initialState = {
  isAuthenticated: false,
  info: null
}

function user(state = initialState, action) {
  switch (action.type) {
    case LOGGED_IN :
      return {...state, isAuthenticated: true, info: {...action.user}}
    default :
      return state
  }
}

export default user