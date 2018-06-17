'use strict'
/* eslint-disable no-unused-expressions */

const nock = require('nock')
const { expect } = require('chai')
const user = require('./user')

describe('User model', () => {
  const githubApi = nock('https://api.github.com', {
    reqheaders: {
      accept: 'application/vnd.github.v3+json',
      'user-agent': 'Endava-Training'
    }
  })

  describe('getUsers', () => {
    it('should get a list of users', async () => {
      const getUsersFromApi = githubApi
        .get('/search/users?q=ta')
        .reply(200, { items: [] })

      const users = await user.getUsers({ q: 'ta' })
      expect(getUsersFromApi.isDone()).to.be.true
      expect(users).to.eql([])
    })
  })

  describe('getUserById', () => {
    it('should get a user by id', async () => {
      const getUserFromApi = githubApi
        .get('/users/12')
        .reply(200, { id: 12, login: 'User' })

      const users = await user.getUserById(12)
      expect(getUserFromApi.isDone()).to.be.true
      expect(users).to.eql({ id: 12, login: 'User' })
    })
  })
})
