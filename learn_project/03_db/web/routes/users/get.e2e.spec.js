'use strict'

const { expect } = require('chai')
const request = require('super-request')
const server = require('../../server')

describe('GET /api/v1/users', () => {
  it('should get the users', async () => {
    const resp = await request(server)
      .get('/api/v1/users?q=tom')
      .json(true)
      .expect(200)
      .end()

    expect(resp.body).to.be.instanceof(Array)
    expect(resp.body).to.have.lengthOf.above(0)
  })
})
