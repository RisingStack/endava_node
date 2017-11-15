'use strict'

const joi = require('joi')
const userModel = require('../../../models/user')

const paramsSchema = joi.object({
  userId: joi.string().min(1).required()
}).required()

async function getUserById (req, res) {
  const params = joi.attempt(req.params, paramsSchema)
  const user = await userModel.getUserById(params.userId)
  res.send(user)
}

module.exports = getUserById
