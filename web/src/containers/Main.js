import React from 'react'
import { Login } from './index'
import { renderRoutes } from 'react-router-config'
import { withRouter, Switch, Route } from 'react-router-dom'
import routes from '../route'

function Main(props) {
  return renderRoutes(routes)
  // return(
  //   <Switch>
  //     {renderRoutes(routes)}
      
  //   </Switch>
  // ) 
}

export default withRouter(Main)