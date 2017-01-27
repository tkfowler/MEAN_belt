//require the express module
var express = require("express");
//create an express app
var app = express();
// require path
var path = require("path");
//require body-parser(to receive post data from client)
var bodyParser = require("body-parser");

app.use(bodyParser.json({}))
//setting client folder directory
app.use(express.static(path.join(__dirname, './client')))
//setting bower_components directory
app.use(express.static(path.join(__dirname, './bower_components')))

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(8000, function() {
 console.log("listening on port 8000");
});
