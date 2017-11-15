'use strict'

const User = require('../../models/User')

async function getUsers (req, res) {
  const userModels = await Users.getUsers()
  const user = userModels.map(function (model) {
    return model.toObject()
  })
  let responseString

  try {
    responseString = JSON.stringify(user)
  } catch (err) {
    console.error()
  }

  res.send(responseString)
}

module.exports = getUsers
