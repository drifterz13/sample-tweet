import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import Home from './Home'
import SignupPage from '../components/SignupPage'

const Main = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/signup' render={() => <SignupPage />} />
  </Switch>
)

export default withRouter(Main)