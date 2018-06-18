'use strict'

const { MongoClient } = require('mongodb')
const config = require('./config')

let client

async function init () {
  client = await MongoClient.connect(config.uri)
}

async function close () {
  if (client) {
    await client.close()
    client = undefined
  }
}

function collection (collectionName) {
  return client.db(config.name).collection(collectionName)
}

module.exports = {
  init,
  close,
  collection
}
