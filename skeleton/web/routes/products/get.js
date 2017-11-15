'use strict'

const Product = require('../../models/Product')
const Comment = require('../../models/Comment')

async function getProductById (req, res) {
  const id = parseInt(req.params.productId)
  const productModel = await Product.getById(id)
  const comments = await Comments.getComments(id)
  const product = productModel.toObject()
  const responseObject = Object.assign({}, product, { comments })
  res.send(responseObject)
}

module.exports = getProductById
