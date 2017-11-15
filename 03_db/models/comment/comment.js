'use strict'

const joi = require()
const db = require('../db')
const COLLECTION_NAME = 'comment'

function getCommentById (commentId) {
  const comments = db.connection.collection(COLLECTION_NAME)
  return comments.findOne({ _id: commentId })
}

async function getCommentsForUser (userId) {
  const comments = db.connection.collection(COLLECTION_NAME)
  return comments.find({ user: userId })
}

function addComment (comment) {
  const comments = db.connection.collection(COLLECTION_NAME)
  return comments.insertOne(comment)
}

function deleteCommentById (commentId) {
  const comments = db.connection.collection(COLLECTION_NAME)
  return comments.deleteOne({ _id: commentId })
}

function deleteCommentsForUser (userId) {
  const comments = db.connection.collection(COLLECTION_NAME)
  return comments.deleteMany({ user: userId })
}

module.exports = {
  getCommentById,
  getCommentsForUser,
  addComment,
  deleteCommentById,
  deleteCommentsForUser
}
