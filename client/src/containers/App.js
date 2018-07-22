import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import jwtDecode from 'jwt-decode'
import { configureStore } from '../store'
import { loggedIn } from '../store/actions/auth'
import Main from './Main'

const store = configureStore()

if (localStorage.authToken) {
  const user = jwtDecode(localStorage.authToken)
  store.dispatch(loggedIn({...user, token: localStorage.authToken}))
}

const App = () => (
  <Provider store={store}>
    <Router>
      <Main />
    </Router>
  </Provider>
)

export default App;
