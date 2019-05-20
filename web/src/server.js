import express from 'express'
import path from 'path'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter, matchPath } from 'react-router-dom'
import Main from './containers/Main'
import template from './views/template'
import routes from './route'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static(path.resolve(__dirname, 'public')))

app.get('*', (req, res) => {
  const matchRoute = routes.find(route => matchPath(req.url, route))
  
  const component = ReactDOMServer.renderToString(
      <StaticRouter location={req.url}>
        <Main />
      </StaticRouter>)

  res.send(template(component))
})

app.listen(PORT,()=> console.log(`Server is running on port ${PORT}`))