'use strict'

// use different env vars for the tests!
require('dotenv').config({ path: '.env.test' })
const chai = require('chai')
const sinonChai = require('sinon-chai')
const chaiSubset = require('chai-subset')
const app = require('../web')

chai.use(sinonChai)
chai.use(chaiSubset)

before(async () => {
  await app.init()
})

after(async () => {
  await app.stop()
})
