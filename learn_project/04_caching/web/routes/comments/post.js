'use strict'

const apicache = require('apicache')
const commentModel = require('../../../models/comment')

async function addComment (req, res) {
  apicache.clear(req.body.user)
  const comment = await commentModel.addComment(req.body)
  res.status(201).send(comment)
}

module.exports = addComment
