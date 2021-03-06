import React, { Fragment } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import Home from '../components/Home'
import Nav from './Nav'
import FormPage from '../components/FormPage'
import DashBoard from './DashBoard'
import ResetPasswordForm from '../components/ResetPasswordForm'
import WrongPage from '../components/WrongPage'
import { withAuth } from '../hoc/withAuth'

const Main = (props) => (
  <Fragment>
    <Nav />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/signup' render={() => <FormPage type='signup' {...props} />} />
      <Route exact path='/signin' render={() => <FormPage type='signin' {...props} />} />
      <Route exact path='/dashboard' component={withAuth(DashBoard)} />
      <Route exact path='/reset' render={() => <ResetPasswordForm {...props} />} />
      <Route path='/api/user/reset_password/confirmation' component={WrongPage} />
      <Route component={WrongPage} />
    </Switch>
  </Fragment>
)

export default withRouter(Main)