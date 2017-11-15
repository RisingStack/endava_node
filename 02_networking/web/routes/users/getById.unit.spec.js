'use strict'

const nock = require('nock')
const { expect } = require('chai')
const sinon = require('sinon')
const request = require('super-request')
const user = require('../../../models/user')
const server = require('../../server')

describe('GET /api/v1/users/:id', () => {
  let sandbox

  beforeEach(() => {
    sandbox = sinon.sandbox.create()
  })

  afterEach(() => {
    sandbox.restore()
  })

  it('should get the user with the specific id from the user model', async () => {
    const getUserById = sandbox.stub(user, 'getUserById').returns({ id: 12, login: 'Bob' })
    await request(server)
      .get('/api/v1/users/12')
      .expect(200, { id: 12, login: 'Bob' })
      .end()

    expect(getUserById).to.be.calledOnce
  })
})
