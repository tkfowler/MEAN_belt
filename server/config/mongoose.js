console.log("future mongoose connection and model loading");
// require mongoose
var mongoose = require('mongoose');
// require the fs module for loading model files
var fs = require('fs');
// require path for getting the models path
var path = require('path');
// regular expression that checks for .js extention
var reg = new RegExp(".js$", "i")
// connect to mongoose!
mongoose.connect('mongodb://localhost/meanbelt');
// create a variable that points to the path where all of the models live
var models_path = path.join(__dirname, './../models');

mongoose.connection.on('connected', function(){
  console.log('Mongoose default connection open to mongodb://localhost/meanbelt');
});

mongoose.connection.on('error', function(err){
  console.error('Mongoose default connection error: ${ err }')
});

mongoose.connection.on('disconnected', function(){
  console.log('Mongoose default connection disconnected');
});

process.on('SIGINIT', function(){
  mongoose.connection.close(function(){
    console.log('mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});
// read all of the files in the models_path and require (run) each of the javascript files
fs.readdirSync(models_path).forEach(function(file) {
  if(reg.test(file)) {
    // require the file (this runs the model file which registers the schema)
    require(path.join(models_path, file));
  }
});
