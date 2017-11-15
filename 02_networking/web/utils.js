'use strict'

function catchAsyncErrors (middleware) {
  return (req, res, next) => Promise.resolve(middleware(req, res, next)).catch(next)
}

function errorHandler (err, req, res, next) {
  console.error(err)
  // joi validation error
  if (err.isJoi) {
    const message = err.details.map(detail => detail.message).join(', ')
    res.status(400).send(`Bad Request: ${message}`)
  }
  res.status(500).send('Oops! Internal Server Error.')
}

module.exports = {
  catchAsyncErrors,
  errorHandler
}
