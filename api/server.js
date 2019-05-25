'use strict'

const nconf = require('nconf'),
      http = require('http'),
      express = require('express'),
      bodyParser = require('body-parser')

const app = express()

nconf.argv()
     .env()
	//  .add('global', { file: __dirname + '/config/' + process.env.NODE_ENV + '.json', type: 'file' })
     .add('user', { file: __dirname + '/config/development.json', type: 'file' })

const db_config = nconf.get('DB_CONFIG')
global.moment = require('moment')
global._ = require('lodash')
global.r = require('rethinkdb')
global.Utility = new(require('./utility'))()
global.routerHandler = require('./utility/routerHandler')

// database connection
r.connect(db_config, (err, conn)=> {
    if (err)
        throw err
    global.connection = conn   
})

// middleware to read post body request
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

app.use(require('./routes/user'))

// http.createServer(app)
app.listen(4200, ()=> console.log('Listening...'))
 