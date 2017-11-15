'use strict'

const User = require('../../models/User')

async function insertUser (req, res) {
  try {
    await Users.register(req.body)
  } catch (err) {
    return res.status(403).send('User already registered')
  }
  res.status(201).send('Success!')
}
