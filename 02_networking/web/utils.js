'use strict'

function catchAsyncErrors (middleware) {
  return (req, res, next) => Promise.resolve(middleware(req, res, next)).catch(next)
}

function errorHandler (err, req, res, next) {
  console.error(err)
  res.status(500).send('Oops! Internal Server Error.')
}

module.exports = {
  catchAsyncErrors,
  errorHandler
}
