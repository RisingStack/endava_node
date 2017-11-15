'use strict'

const promisify = require('es6-promisify')
const express = require('express')
const config = require('./config')
const routes = require('./routes')

const app = express()

app.use(routes)

const initApp = promisify(app.listen, app)
async function init () {
  try {
    await initApp(config.port)
  } catch (err) {
    console.error(`Can not init the web app: ${err}`)
    process.exit(1)
  }
  console.log(`App is listening on ${config.port}`)
}

module.exports = {
  init
}
