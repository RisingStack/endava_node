'use strict'

const userModel = require('../../../models/user')

async function getUserById (req, res) {
  const user = userModel.getUserById(req.params.userId)
  res.send(user)
}

module.exports = getUserById
