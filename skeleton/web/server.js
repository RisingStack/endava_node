'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const config = require('./config')
const router = require('./router')

const app = express()

app.use(bodyParser.json())
app.use(router)

app.listen(config.port, err => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log('Sample app is listening at', config.port)
})

module.exports = app
