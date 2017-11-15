'use strict'

const nock = require('nock')
const { expect } = require('chai')
const user = require('./user')

describe('User model', () => {
  const githubApi = nock('https://api.github.com', {
    reqheaders: {
      accept: 'application/vnd.github.v3+json',
      'user-agent': 'RisingStack-Bootcamp'
    }
  })

  describe('getUsers', () => {
    it('should get a list of users', async () => {
      const getUsersFromApi = githubApi
        .get('/users')
        .reply(200, { users: [] })

      const users = await user.getUsers()
      expect(getUsersFromApi.isDone()).to.be.true
      expect(users).to.eql({ users: [] })
    })

    it('should respect the fromId parameter', async () => {
      const getUserFromApi = githubApi
        .get('/users')
        .query({ since: 13 })
        .reply(200, { users: [] })

      const users = await user.getUsers(13)
      expect(getUserFromApi.isDone()).to.be.true
      expect(users).to.eql({ users: [] })
    })
  })

  describe('getUserById', () => {
    it('should get a user by id', async () => {
      const getUserFromApi = githubApi
        .get('/users/12')
        .reply(200, { id: 12, name: 'User' })

      const users = await user.getUserById(12)
      expect(getUserFromApi.isDone()).to.be.true
      expect(users).to.eql({ id: 12, name: 'User' })
    })
  })
})
