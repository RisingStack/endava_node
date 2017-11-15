'use strict'

const joi = require('joi')
const commentModel = require('../../../models/comment')

const paramsSchema = joi.object({
  commentId: joi.string().alphanum().length(24).required()
}).required()

async function deleteCommentById (req, res) {
  const { commentId } = joi.attempt(req.params, paramsSchema)
  await commentModel.deleteCommentById(commentId)
  res.send('Deleted Comment')
}

module.exports = deleteCommentById
