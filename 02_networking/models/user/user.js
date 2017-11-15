'use strict'

const request = require('request-promise-native')
const config = require('./config')
const api = request.defaults(config)

function getUsers (fromId) {
  return api({
    method: 'GET',
    uri: '/users',
    qs: { since: fromId }
  })
}

function getUserById (userId) {
  return api({
    method: 'GET',
    uri: `/users/${userId}`
  })
}

module.exports = {
  getUsers,
  getUserById
}
