'use strict'

const api = require('./api')

function getUsers (fromId) {
  return api({
    method: 'GET',
    uri: '/users'
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
