const winston = require('winston')
const config = require('./config')

module.exports = winston.createLogger({
  level: config.level,
  format: winston.format.json()
}