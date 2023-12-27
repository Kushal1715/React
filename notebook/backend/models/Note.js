const mongoose = require('mongoose');

const { Schema } = mongoose;

const noteSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description:{
    type: String,
    requred: true,
  },
  tag: {
    type: String,
    default: "General"
  },
  date: {
    type: Date,
    default: new Date
  }
});

module.exports = mongoose.model('note',noteSchema);

