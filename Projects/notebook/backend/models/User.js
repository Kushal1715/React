const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email:{
    type: String,
    requred: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: new Date
  }
});

const User = mongoose.model('user',userSchema);
module.exports = User;

