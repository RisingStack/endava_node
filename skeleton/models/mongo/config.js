'use strict'

const joi = require('joi')

const schema = joi.object({
  MONGO_URI: joi.string().uri({ scheme: 'mongo' }).required()
}).unknown().required()

const envVars = joi.attempt(process.env, schema)

module.exports = {
  uri: envVars.MONGO_URI
}
