'use strict'

const { MongoClient } = require('mongodb')
const config = require('./config')

function init () {
  return MongoClient.connect(config.uri)
}

module.exports = {
  init
}
