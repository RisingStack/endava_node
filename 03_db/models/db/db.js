'use strict'

const { MongoClient } = require('mongodb')
const config = require('./config')

const db = {
  init,
  close
}

async function init () {
  db.connection = await MongoClient.connect(config.uri)
}

async function close () {
  if (db.connection) {
    await db.connection.close()
  }
  db.connection = undefined
}

module.exports = db
