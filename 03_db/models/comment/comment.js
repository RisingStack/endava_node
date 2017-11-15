'use strict'

const db = require('../db')
const COLLECTION_NAME = 'comment'

async function init () {
  db.connection.createCollection(COLLECTION_NAME, {
    validator: {

    }
  })
}

async function addComment () {
  const comments = db.connection.collection(COLLECTION_NAME)
  await comments.insert({ a: 12 })
}



module.exports = {
  init,
  addComment
}
