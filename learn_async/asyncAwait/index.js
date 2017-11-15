'use strict'

const countLines = require('../util/countLines') // realtive to script file
const readFilePromise = require('../promise/promisify')

function handleError(err) {
  console.error(err)
  process.exit(1)
}

async function readFileAsync (path1, path2, options) {
  let content1
  let content2
  try {
    content1 = await readFilePromise(path1, options)
  } catch (err) {
    handleError(err)
  }
  const lineNo1 = countLines(content1)
  try {
    content2 = await readFilePromise(path2, options)
  } catch (err) {
    handleError(err)
  }
  const lineNo2 = countLines(content2)
  console.log(lineNo1 + lineNo2)
}

readFileAsync('./test-file.txt', './test-file2.txt', 'utf-8')
  .catch(handleError)
