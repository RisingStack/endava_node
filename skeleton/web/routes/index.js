'use strict'

const { Router } = require('express')
const users = require('./users')
const products = require('./products')

const router = new Router()

router.get('/', function (req, res) {
  res.send('Hello World!')
})

router.get('/users', users.get)
router.post('/users', users.post)

router.get('/products/:productId', products.get)
