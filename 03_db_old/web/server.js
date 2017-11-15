'use strict'

const { promisify } = require('utils')
const express = require('express')
const routes = require('./routes')

const app = express()

app.use(routes)


const initApp = promisify(app.listen)
async function init () {
  try {
    await initApp(config.port)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`App is listening on ${config.port}`)
}

module.exports = {
  init
}
