'use strict'

const nock = require('nock')
const { expect } = require('chai')
const sinon = require('sinon')
const request = require('super-request')
const user = require('../../../models/user')
const server = require('../../server')

describe('GET /api/v1/users', () => {
  let sandbox

  beforeEach(() => {
    sandbox = sinon.sandbox.create()
  })

  afterEach(() => {
    sandbox.restore()
  })

  it('should get the users from the user model', async () => {
    const getUsers = sandbox.stub(user, 'getUsers').returns({ users: [] })
    const users = await request(server)
      .get('/api/v1/users?q=bo')
      .expect(200, { users: [] })
      .end()

    expect(getUsers).to.be.calledOnce
  })
})
