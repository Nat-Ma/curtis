require('dotenv').config()
const cloudinary = require('cloudinary')

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
})

uploadToCloudinary = (file, folder) => {
  return cloudinary.v2.uploader
  .upload(file, {folder})
  .then(data => {
    return { imageUrl: data.url, publicId: data.public_id }
  }).catch((err) => {
    console.log(err);
  });
}

module.exports = uploadToCloudinary
