'use strict'

const joi = require('joi')

const schema = joi.object({
  PORT: joi.number().integer().min(0).max(65535),
  HTTP_LOG_FORMAT: joi.string()
    .valid('combined', 'common', 'dev', 'short', 'tiny', 'none').required()
}).unknown().required()

const envVars = joi.attempt(process.env, schema)

module.exports = {
  port: envVars.PORT,
  logFormat: envVars.HTTP_LOG_FORMAT
}
