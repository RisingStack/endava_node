'use strict'

require('dotenv').config({ path: '.env.test' })
const chai = require('chai')
const sinonChai = require('sinon-chai')
const app = require('../web')

chai.use(sinonChai)

// test port
process.env.TEST_PORT = 3456

before(async () => {
  await app.init()
})

after(async () => {
  await app.stop()
})
