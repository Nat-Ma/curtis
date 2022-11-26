const express = require('express')
const { Warning, Location, User } = require('./src/models/warning')
const uploadToCloudinary = require('./src/services/cloudinary')
const upload = require('./src/middleware/upload');
require('./src/db/mongoose')

const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.set("views", "./views");
app.use(express.static("public"));

app.get('/', async (req, res) => {
  try {
    res.render('home')
  } catch (err) {
    res.status(400).send(err)
  }
})

app.get('/api/warnings', async (req, res) => {
  try {
    const allWarnings = await Warning.find()
    res.json(allWarnings)
  } catch (err) {
    res.status(400).send(err)
  }
})

app.post('/add-warning', upload.single('image'), async (req, res) => {
  try {
    const user = await User.findById("637e89a5dae3e5065e2d2042")
    const newWarning = new Warning({...req.body, userId: user._id})
    const savedWarning = await newWarning.save()
    const newLocation = new Location(req.body)
    const image = await uploadToCloudinary(req.file.path, 'warnings')

    await Warning.updateOne(
      { _id: savedWarning._id },
      { $set: {
          location: newLocation,
          imageUrl: image.imageUrl,
          publicImageId: image.publicId,
        }
      }
    )
    res.status(200).send('New warning was posted successfully.')
  } catch (err) {
    console.log(err)
    res.status(400).send(err)
  }
})


app.listen(3000, () => {
  console.log('Server is running on port 3000.')
})
