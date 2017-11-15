'use strict'

const url = require('url')
const axios = require('axios')
const _ = require('lodash')
const config = require('./config')
const fetch = axios.create(config)

async function getUsers (query) {
  const resp = await fetch({
    url: '/search/users',
    params: query
  })
  return resp.data.items.map(pickUserFields)
}

async function getUserById (userId) {
  const resp = await fetch({
    url: `/users/${userId}`
  })
  return pickUserFields(resp.data)
}

function pickUserFields (user) {
  return _.pick(user, ['login', 'id', 'url', 'html_url', 'avatar_url', 'repos_url', 'followers_url'])
}

module.exports = {
  getUsers,
  getUserById
}
