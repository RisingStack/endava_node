'use strict'

const userModel = require('../../../models/user')

async function getUsers (req, res) {
  const users = await userModel.getUsers(req.query.fromId)
  res.send(users)
}

module.exports = getUsers
