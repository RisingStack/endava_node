'use strict'

const nock = require('nock')
const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const request = require('super-request')
const user = require('../../../models/user')
const server = require('../../../server')

chai.use(sinonChai)
const { expect } = chai

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
    const users = await request(server.listen())
      .get('/users')
      .expect(200)
      .end()

    // expect getUsers to be called
    expect(users).to.eql({ users: [] })
  })
})
