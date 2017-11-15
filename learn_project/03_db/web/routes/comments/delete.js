'use strict'

const joi = require('joi')
const commentModel = require('../../../models/comment')

const paramsSchema = joi.object({
  userId: joi.string().min(1).required()
}).required()

async function deleteComment (req, res) {
  const { userId } = joi.attempt(req.params, paramsSchema)
  await commentModel.deleteCommentsForUser(userId)
  res.send('Comments deleted for the user')
}

module.exports = deleteComment
