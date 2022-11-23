require('dotenv').config()
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGOOSE_URL)
