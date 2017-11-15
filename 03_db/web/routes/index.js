'use strict'

const { Router } = require('express')
const users = require('./users')
const comments = require('./comments')
const { catchAsyncErrors } = require('../utils')

const router = new Router()

router.get('/api/v1/users', catchAsyncErrors(users.get))
router.get('/api/v1/users/:userId', catchAsyncErrors(users.getById))

router.get('/api/v1/comments', comments.get)
router.get('/api/v1/comments/:commentId', catchAsyncErrors(comments.getById))
router.post('/api/v1/comments/:commentId', catchAsyncErrors(comments.post))
router.delete('/api/v1/comments/:productId', catchAsyncErrors(comments.delete))

module.exports = router
