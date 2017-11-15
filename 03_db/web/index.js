'use strict'

const app = require('./server')
const db = require('./models/db')
const config = require('./config')

async function init () {
  await db.init()
  await app.init()
}
init()
