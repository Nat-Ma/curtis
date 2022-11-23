const mongoose = require('mongoose')
const warningSchema = require('./warning')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  passwort: {
    type: String,
    required: true
  },
  publicId: String,
  imageUrl: String,
  radius: Number
})

const User = mongoose.model('User', userSchema)

module.exports = User
