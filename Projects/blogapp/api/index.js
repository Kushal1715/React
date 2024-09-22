const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/user.route')
const authRoutes = require('./routes/auth.route')

dotenv.config()

mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log("connected to database")
  })
  .catch((err) => {
    console.log(err)
  })
const app = express();
app.use(express.json())

app.listen(3000, () => {
  console.log("app is runnng on port 3000")
})

app.use('/api/user', userRoute)
app.use('/api/auth', authRoutes)
