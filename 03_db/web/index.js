'use strict'

const promisify = require('es6-promisify')
const server = require('./server')
const config = require('./config')
const db = require('../models/db')
const comment = require('../models/comment')

// explain why graceful stop is important (order of components)
process.on('SIGTERM', async () => {
  const exitCode = await stop()
  process.exit(exitCode)
})

// do not init the process if a crucial component can not start up
const initServer = promisify(server.listen, server)
async function init () {
  try {
    await db.init()
    await comment.init()
    await initServer(config.port)
  } catch (err) {
    console.log(`Couldn't init thess app: ${err}`)
    // exit code for fatal exception
    process.exit(1)
  }
  comment.addComment()
  console.log(`App is listening on port ${config.port}`)
}

const closeServer = promisify(server.close, server)
async function stop () {
  // start with a normal exit code
  let exitCode = 0
  try {
    await closeServer()
  } catch (err) {
    console.log(`Failed to close the server: ${err}`)
    exitCode = 1
  }

  try {
    await db.close()
  } catch (err) {
    console.log(`Failed to close the db: ${err}`)
    exitCode = 1
  }
  return exitCode
}

module.exports = {
  init,
  stop
}
