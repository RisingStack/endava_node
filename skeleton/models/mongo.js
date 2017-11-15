'use strict'
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/basics-skeleton')
mongoose.Promise = global.Promise
