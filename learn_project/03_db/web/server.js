'use strict'

const http = require('http')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const routes = require('./routes')
const { errorHandler } = require('./utils')
const config = require('./config')

const app = express()

app.use(morgan(config.logFormat))
app.use(cors())
app.use(bodyParser.json())
app.use(routes)
app.use(errorHandler)

// create a http server from the app (this can be closed properly, unlike the express app)
module.exports = http.createServer(app)
