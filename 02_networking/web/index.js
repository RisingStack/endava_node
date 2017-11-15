'use strict'

const promisify = require('es6-promisify')
const app = require('./server')
const config = require('./config')
const http = require('http')

// create a http server from the app (this can be closed properly, unlike the express app)
const server = http.createServer(app)

// explain why graceful stop is important (order of components)
process.on('SIGTERM', async () => {
  await stop()
  process.exit(0)
})

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
  console.log('got sig term')
  // process.exit(0)
}

module.exports = {
  init,
  stop
}
