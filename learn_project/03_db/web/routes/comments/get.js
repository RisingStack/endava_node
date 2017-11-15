'use strict'

const joi = require('joi')
const commentModel = require('../../../models/comment')

const paramsSchema = joi.object({
  userId: joi.string().min(1).required()
}).required()

async function getComments (req, res) {
  const { userId } = joi.attempt(req.params, paramsSchema)
  const comments = await commentModel.getCommentsForUser(userId)
  res.send(comments)
}

module.exports = getComments
