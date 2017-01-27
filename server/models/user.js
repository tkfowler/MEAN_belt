console.log('user model');
var mongoose = require('mongoose');
// build your friend schema and add it to the mongoose.models
var Schema = mongoose.Schema;
var userSchema = new mongoose.Schema({
  name: {type: String, required: [true, "Must input name"], unique: true},
  polls: [{type: Schema.Types.ObjectId, ref: 'Poll'}],
}, {timestamps: true})
// Retrieve Schema called 'Customer' and store it to variable Customer
var User = mongoose.model('User', userSchema)
