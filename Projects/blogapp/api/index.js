const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/user.route')
const authRoutes = require('./routes/auth.route')
const cors = require('cors')

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

app.use(cors({
  origin: 'http://localhost:5173', // Allow requests from this origin
}));

app.listen(3000, () => {
  console.log("app is runnng on port 3000")
})

app.use('/api/user', userRoute)
app.use('/api/auth', authRoutes)

//creating a middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'internal server error'
  res.status(statusCode).json({
    success: false,
    statusCode,
    message
  })
})
