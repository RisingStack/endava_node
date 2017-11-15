'use strict'

const server = require('./server')

async function init () {
  await server.init()
}

module.exports = {
  init
}
