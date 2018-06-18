'use strict'

const joi = require('joi')

const schema = joi.object({
  MONGO_URI: joi.string().uri({ scheme: 'mongodb' }).required(),
  MONGO_NAME: joi.string().required()
}).unknown().required()

const envVars = joi.attempt(process.env, schema)

module.exports = {
  uri: envVars.MONGO_URI,
  name: envVars.MONGO_NAME
}
