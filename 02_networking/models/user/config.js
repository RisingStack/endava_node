'use strict'

const joi = require('joi')

const schema = joi.object({
  USER_API_URL: joi.string().uri({ scheme: 'https' }).required()
}).unknown().required()

const envVars = joi.attempt(process.env, schema)

module.exports = {
  baseUrl: envVars.USER_API_URL,
  headers: {
    Accept: 'application/vnd.github.v3+json',
    'User-Agent': 'Endava-Training'
  },
  json: true
}
