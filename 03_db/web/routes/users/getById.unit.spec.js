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

describe('GET /api/v1/users/:id', () => {
  let sandbox

  beforeEach(() => {
    sandbox = sinon.sandbox.create()
  })

  afterEach(() => {
    sandbox.restore()
  })

  it('should get the user with the specific id from the user model', async () => {
    const getUserById = sandbox.stub(user, 'getUserById').returns({ id: 12, name: 'Bob' })
    const user = await request(server.listen())
      .get('/users/12')
      .expect(200)
      .end()

    // expect getUsers to be called
    expect(user).to.eql({ id: 12, name: 'Bob' })
  })
})
