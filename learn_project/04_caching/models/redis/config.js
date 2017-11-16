'use strict'

const joi = require('joi')

const schema = joi.object({
  REDIS_URI: joi.string().uri({ scheme: 'redis' }).required()
}).unknown().required()

const envVars = joi.attempt(process.env, schema)

module.exports = {
  url: envVars.REDIS_URI
}
