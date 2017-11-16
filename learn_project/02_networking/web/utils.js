'use strict'

function catchAsyncErrors (middleware) {
  return (req, res, next) => Promise.resolve(middleware(req, res, next)).catch(next)
}

function errorHandler (err, req, res, next) {
  console.error(err)
  if (err.isJoi) {
    const message = err.details.map(detail => detail.message).join(', ')
    res.status(400).send(`Invalid format: ${message}`)
  } else if (err.response.status === 403) {
    res.status(403).send('GitHub api ratelimit exceeded.')
  } else {
    res.status(500).send('Oops! Internal Server Error.')
  }
}

module.exports = {
  catchAsyncErrors,
  errorHandler
}
