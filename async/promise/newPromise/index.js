'use strict'

const fs = require('fs')
const countLines = require('../../util/countLines')

function readFilePromise (path, options) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, options, (err, content) => {
      if (err) {
        return reject(err)
      }
      resolve(content)
    })
  })
}

module.exports = readFilePromise
