'use strict'

const { Router } = require('express')
const users = require('./users')
const comments = require('./comments')
const { catchAsyncErrors } = require('../utils')

const router = new Router()

router.get('/users', catchAsyncErrors(users.get))
router.get('/users/:userId', catchAsyncErrors(users.getById))

router.get('/users/:userId/comments', catchAsyncErrors(comments.get))
router.get('/comments/:commentId', catchAsyncErrors(comments.getById))
router.post('/comments', catchAsyncErrors(comments.post))
router.delete('/users/:userId/comments', catchAsyncErrors(comments.delete))
router.delete('/comments/:commentId', catchAsyncErrors(comments.deleteById))

module.exports = router
