const mongoose = require('mongoose')

const QuestionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  correctOption: {
    type: String,
    required: true
  },
  options: [{
    type: String,
    required: true
  }],

})


module.exports = new mongoose.model('Question', QuestionSchema)