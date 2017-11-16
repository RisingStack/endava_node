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

const cache = apicache.options({ redisClient: redis.connection }).middleware
const cacheMiddleware = cache('30 minutes', (req, res) => req.method === 'GET')

app.use(cors())
app.use(cacheMiddleware)
app.use(bodyParser.json())
app.use(routes)
app.use(errorHandler)

// create a http server from the app (this can be closed properly, unlike the express app)
module.exports = http.createServer(app)
