'use strict'

const promisify = require('es6-promisify')
const server = require('./server')
const config = require('./config')
const http = require('http')

// explain why graceful stop is important (order of components)
process.on('SIGTERM', stop)

// do not init the process if a crucial component can not start up
const initServer = promisify(server.listen, server)
async function init () {
  try {
    await initServer(config.port)
  } catch (err) {
    console.log(`Couldn't init thess app: ${err}`)
    // exit code for fatal exception
    process.exit(1)
  }
  console.log(`App is listening on port ${config.port}`)
}

const closeServer = promisify(server.close, server)
async function stop () {
  await closeServer()
  // process.exit(0)
}

module.exports = {
  init,
  stop
}
