const redis = require('redis')
const config = require('./config')

module.exports = {
  connection: redis.createClient(config),
  close () {
    if (this.connection) {
      this.connection.quit()
    }
    this.connection = undefined
  }
}
