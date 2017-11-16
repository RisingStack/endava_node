const redis = require('redis')
const config = require('./config')

const db = {
  init,
  close
}

function init () {
  db.connection = redis.createClient(config)
}

function close () {
  if (db.connection) {
    db.connection.quit()
  }
  db.connection = undefined
}

module.exports = db
