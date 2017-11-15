'use strict'

const request = require('request-promise-native')

const API_URL = 'https://api.github.com'

const config = {
  baseUrl: API_URL,
  headers: {
    Accept: 'application/vnd.github.v3+json',
    'User-Agent': 'Endava-Training'
  },
  json: true
}

module.exports = request.defaults(config)
