'use strict'

const joi = require('joi')
const commentModel = require('../../../models/comment')

const paramsSchema = joi.object({
  commentId: joi.string().alphanum().length(24).required()
}).required()

async function getCommentById (req, res) {
  const { commentId } = joi.attempt(req.params, paramsSchema)
  const comment  = await commentModel.getCommentById(commentId)
  res.send(comment)
}

module.exports = getCommentById
