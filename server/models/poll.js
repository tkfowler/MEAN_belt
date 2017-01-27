console.log('poll model');
var mongoose = require('mongoose');
// build your friend schema and add it to the mongoose.models
var Schema = mongoose.Schema;
var pollSchema = new mongoose.Schema({
  user: {type: Schema.Types.ObjectId, ref:'User'},
  question: {type: String, required: [true, "Question must be asked"], minlength: [8, "Question must be at least 8 characters"]},
  option: [{
    option: {type: String, required: [true, "Must fill out options"], minlength: [3, "Option must be at least 3 characters"]},
    vote: {type: Number, required: true, default: 0}
  }]
}, {timestamps: true})

// var optionSchema = new mongoose.Schema({
//   question: {type: Schema.Types.ObjectId, ref: 'Poll'},
//   option: {type: String, required: true, minlength: 3},
//   vote: {type: Number, required: true, default: 0}
// }, {timestamps: true})
// Retrieve Schema called 'Customer' and store it to variable Customer
var Poll = mongoose.model('Poll', pollSchema)
// var Options = mongoose.model('Options', optionSchema)
