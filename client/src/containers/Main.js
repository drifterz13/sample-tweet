import React, { Fragment } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import Home from '../components/Home'
import Nav from '../components/Nav'
import FormPage from '../components/FormPage'
import DashBoard from './DashBoard'


const Main = (props) => (
  <Fragment>
    <Nav />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/signup' render={() => <FormPage type='signup' {...props} />} />
      <Route exact path='/signin' render={() => <FormPage type='signin' {...props} />} />
      <Route exact path='/dashboard' render={() => <DashBoard {...props} />} />
    </Switch>
  </Fragment>
)

export default withRouter(Main)