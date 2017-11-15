'use strict'

const nock = require('nock')
const { expect } = require('chai')
const user = require('./user')

describe('User model', () => {
  const  API_URL = 'https://api.github.com'
  const API_CONFIG = {
    reqheaders: {
      accept: 'application/vnd.github.v3+json',
      'user-agent': 'RisingStack-Bootcamp'
    }
  }

  describe('getUsers', () => {
    it('should get a list of users', async () => {
      const githubAPI = nock(API_URL, API_CONFIG)
        .get('/users')
        .reply(200, { users: [] })

      const users = await user.getUsers()
      expect(githubAPI.isDone()).to.be.true
      expect(users).to.eql({ users: [] })
    })

    it('should respect the fromId parameter', async () => {
      const githubAPI = nock(API_URL, API_CONFIG)
        .get('/users')
        .query({ since: 13 })
        .reply(200, { users: [] })

      const users = await user.getUsers(13)
      expect(githubAPI.isDone()).to.be.true
      expect(users).to.eql({ users: [] })
    })
  })

  describe('getUserById', () => {
    it('should get a user by id', async () => {
      const githubAPI = nock(API_URL, API_CONFIG)
        .get('/users/12')
        .reply(200, { id: 12, name: 'User' })

      const users = await user.getUserById(12)
      expect(githubAPI.isDone()).to.be.true
      expect(users).to.eql({ id: 12, name: 'User' })
    })
  })
})
