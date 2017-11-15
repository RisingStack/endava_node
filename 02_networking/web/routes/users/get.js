'use strict'

const joi = require('joi')
const userModel = require('../../../models/user')

const querySchema = joi.object({
  q: joi.string().required(),
  sort: joi.valid(['followers', 'repositories', 'joined']),
  order: joi.valid(['asc', 'desc'])
})

async function getUsers (req, res) {
  const query = joi.attempt(req.query, querySchema)
  const users = await userModel.getUsers(query)
  res.send(users)
}

module.exports = getUsers
