const { urlencoded } = require('express')
const express = require('express')
const { Warning, Location, User } = require('./src/models/warning')
require('./src/db/mongoose')

const app = express()

app.use(express.json())
app.use(urlencoded({extended: true}))

app.get('/', async (req, res) => {
  try {
    const allWarnings = await Warning.find()
    // const userWarnings = await Warning.find({userId: "637e87badae3e5065e2d2041"})
    res.status(200).send(allWarnings)
  } catch (err) {
    res.status(400).send(err)
  }
})

app.post('/add-warning', async (req, res) => {
  try {
    const user = await User.findById("637e89a5dae3e5065e2d2042")
    const newWarning = new Warning({...req.body.warning, userId: user._id})
    const savedWarning = await newWarning.save()
    const newLocation = new Location(req.body.location)
    await Warning.updateOne(
      { _id: savedWarning._id },
      { $set: { location: newLocation }}
    )
    res.status(200).send('New warning was posted successfully.')
  } catch (err) {
    res.status(400).send(err)
  }
})


app.listen(3000, () => {
  console.log('Server is running on port 3000.')
})
