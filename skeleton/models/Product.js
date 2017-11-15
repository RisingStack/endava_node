'use strict'

const mongoose = require('mongoose')
const connection = require('../connection/mongo')
const Schema = mongoose.Schema

const MODEL_NAME = 'Product'

const productSchema = new Schema({
  _id: Number,
  name: String,
  price: Number
})

const Product = mongoose.model(MODEL_NAME, productSchema)

Product.getById = function (id) {
  return Product.findOne({ _id: id }, { __v: false })
}

module.exports = Product
