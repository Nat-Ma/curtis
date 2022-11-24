const mongoose = require('mongoose')

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
  radius: Number,
})

const locationSchema = new mongoose.Schema({
  lng: Number,
  lat: Number,
  country: String,
  city: String
})

const warningSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  location: locationSchema,
  type: String,
  publicImageId: String,
  imageUrl: String,
  userId: String
}, {timestamps: true})

const User = mongoose.model('User', userSchema)
const Location = mongoose.model('Location', locationSchema)
const Warning = mongoose.model('Warning', warningSchema)

module.exports = { Warning, Location, User }
