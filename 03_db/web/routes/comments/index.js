'use strict'

const get = require('./get')
const getById = require('./getById')
const post = require('./post')
const deleteComment = require('./delete')

module.exports = {
  get,
  getById,
  post,
  delete: deleteComment
}
