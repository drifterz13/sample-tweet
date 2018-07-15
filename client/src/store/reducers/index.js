import { combineReducers } from 'redux'
import user from './auth'
import error from './error'
import messages from './message'

export const rootReducer = combineReducers({
  user,
  error,
  messages
})