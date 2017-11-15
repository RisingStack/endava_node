'use strict'

const request = require('request-promise-native')

const BASE_URL = 'https://jsonplaceholder.typicode.com/comments'

async function getComments(id) {
  const response = await request(`${BASE_URL}?id=${id}`)
  return JSON.parse(response)
}

module.exports = {
  getComments
}
