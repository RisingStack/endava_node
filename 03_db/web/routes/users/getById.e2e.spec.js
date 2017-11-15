'use strict'

const nock = require('nock')
const { expect } = require('chai')
const request = require('super-request')
const server = require('../../server')

describe('GET /api/v1/users/:id', () => {
  it('should get the user with a specific id', async () => {
    const resp = await request(server)
      .get('/api/v1/users/12')
      .json(true)
      .expect(200)
      .end()

    expect(resp.body).to.have.all.keys(
      ['login', 'id', 'url', 'html_url', 'avatar_url', 'repos_url', 'followers_url']
    )
    expect(resp.body.login).to.eql('12')
  })
})
