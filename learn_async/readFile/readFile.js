'use strict'

const fs = require('fs')
const countLines = require('../util/countLines') // realtive to script file

fs.readFile('./test-file.txt', 'utf-8', (err, content1) => { // relative to working directory
  if (err) {
    console.error(err)
    process.exit(1)
  }

  const lineNo1 = countLines(content1)
  fs.readFile('./test-file2.txt', 'utf-8', (err, content2) => {
    if (err) {
      console.error(err)
      process.exit(1)
    }

    const lineNo2 = countLines(content2)
    console.log(lineNo1 + lineNo2)
  })
})
