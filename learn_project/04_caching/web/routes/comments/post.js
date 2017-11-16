'use strict'

const commentModel = require('../../../models/comment')

async function addComment (req, res) {
  const comment = await commentModel.addComment(req.body)
  res.status(201).send(comment)
}

module.exports = addComment
