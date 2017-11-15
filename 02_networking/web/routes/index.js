'use strict'

const { Router } = require('express')
const users = require('./users')
const comments = require('./comments')

const router = new Router()

router.get('/api/v1/users', users.get)
router.get('/api/v1/users/:userId', users.getById)

router.get('/api/v1/comments', comments.get)
router.get('/api/v1/comments/:commentId', comments.getById)
router.post('/api/v1/comments/:commentId', comments.post)
router.delete('/api/v1/comments/:productId', comments.delete)

module.exports = router
