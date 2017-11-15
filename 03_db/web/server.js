'use strict'

const http = require('http')
const express = require('express')
const routes = require('./routes')

const app = express()

app.use(routes)

// create a http server from the app (this can be closed properly, unlike the express app)
module.exports = http.createServer(app)
