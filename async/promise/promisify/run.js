'use strict'

const readFilePromise = require('./index')
const countLines = require('../../util/countLines') // realtive to script file
const handleError = require('../../util/handleError')

let lineSum = 0
readFilePromise('./test-file.txt', 'utf-8')
  .then(function (content) {
    lineSum += countLines(content)
  })
  .then(function () {
    return readFilePromise('./test-file2.txt', 'utf-8')
  })
  .then(function (content) {
    lineSum += countLines(content)
    console.log(lineSum)
  })
  .catch(handleError)
