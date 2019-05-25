import {
  Login,
  Register,
  Dashboard,
  NotFound
} from '../containers'
import React from 'react'

const routes = [
  {
    path: '/login',
    component: Login,
    exact: true
  },
  {
    path: '/register',
    component: Register,
    exact: true
  },
  {
    path: '/dashboard',
    component: Dashboard,
    exact: true
  },
  {
    path: '*',
    component: NotFound,
    exact: true
  }
]

export default routes