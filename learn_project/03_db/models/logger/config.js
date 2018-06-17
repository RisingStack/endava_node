const joi = require('joi')

const envVars = joi.attempt(
  process.env,
  joi.object({
    LOG_LEVEL: joi.string().valid('error', 'warn', 'info', 'verbose', 'debug', 'silly').required(),
  }).unknown().required()
)

module.exports = {
  level: envVars.LOG_LEVEL
}
