const mongoose = require('mongoose')

const locationSchema = new mongoose.Schema({
  lng: Decimal128,
  lat: Decimal128,
  country: String,
  city: String
})

const Location = mongoose.model('Location', locationSchema)

module.exports = Location
