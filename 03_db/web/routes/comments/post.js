'use strict'

const commentModel = require('../../../models/comment')

async function addComment (req, res) {
  await commentModel.addComment(req.body)
  res.status(201).send('Comment Added Successfully')
}

module.exports = addComment
