'use strict'

const nock = require('nock')
const { expect } = require('chai')
const request = require('super-request')
const server = require('../../../server')

describe('GET /api/v1/users', () => {
  it('should get the users', async () => {
    const users = await request(server.listen())
      .get('/users')
      .expect(200)
      .end()

    // expect getUsers to be called
    // expect(users).to.eql({ users: [] })
  })
})
