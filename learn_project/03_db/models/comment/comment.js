'use strict'

const { ObjectId } = require('mongodb')
const joi = require('joi')
const db = require('../db')
const COLLECTION_NAME = 'comment'

const commentSchema = joi.object({
  user: joi.string().required(),
  text: joi.string().min(3).max(10000).required()
}).required()

function getCommentById (commentId) {
  const comments = db.connection.collection(COLLECTION_NAME)
  return comments.findOne({ _id: new ObjectId(commentId) })
}

async function getCommentsForUser (userId) {
  const comments = db.connection.collection(COLLECTION_NAME)
  return comments.find({ user: userId }).toArray()
}

function addComment (comment) {
  comment = joi.attempt(comment, commentSchema)
  const comments = db.connection.collection(COLLECTION_NAME)
  return comments.insertOne(comment)
}

function deleteCommentById (commentId) {
  const comments = db.connection.collection(COLLECTION_NAME)
  return comments.deleteOne({ _id: new ObjectId(commentId) })
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
