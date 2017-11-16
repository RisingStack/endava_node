'use strict'

const http = require('http')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const apicache = require('apicache')
const redis = require('../models/redis')
const routes = require('./routes')
const { errorHandler } = require('./utils')

const app = express()

const cacheMiddleware = apicache.options({ redisClient: redis.connection }).middleware

app.use(cors())
app.use(cacheMiddleware('30 minutes'))
app.use(bodyParser.json())
app.use(routes)
app.use(errorHandler)

// create a http server from the app (this can be closed properly, unlike the express app)
module.exports = http.createServer(app)
