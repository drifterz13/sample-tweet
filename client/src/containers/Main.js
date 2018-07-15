import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import Home from './Home'
import FormPage from '../components/FormPage'


const Main = (props) => (
  <div className='main'>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/signup' render={() => <FormPage type='signup' {...props} />} />
      <Route exact path='/signin' render={() => <FormPage type='signin' {...props} />} />
    </Switch>
  </div>
)

export default withRouter(Main)