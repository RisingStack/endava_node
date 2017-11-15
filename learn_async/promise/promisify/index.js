'use strict'

const promisify = require('es6-promisify')
const fs = require('fs')

module.exports = promisify(fs.readFile)
