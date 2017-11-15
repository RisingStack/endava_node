'use strict'

const fs = require('fs')
const countLines = require('../util/countLines') // realtive to script file
let content1
let content2

try {
  content1 = fs.readFileSync('./test-file.txt', 'utf-8') // relative to working directory
} catch (err) {
  console.error(err)
  process.exit(1)
}

const lineNo1 = countLines(content1)

try {
  content2 = fs.readFileSync('./test-file2.txt', 'utf-8')
} catch (err) {
  console.error(err)
  process.exit(1)
}

const lineNo2 = countLines(content2)
console.log(lineNo1 + lineNo2)
