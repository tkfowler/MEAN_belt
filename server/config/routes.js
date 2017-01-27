console.log("routes");

var users = require('../controllers/users.js');
var polls = require('../controllers/polls.js');
// var orders = require('../controllers/orders.js');
module.exports = function(app){
  app.get('/polls', polls.index);
  app.get('/polls/:id', polls.show);
  app.post('/vote/:id', polls.vote)
  app.post('/polls/:id', polls.create);
  app.post('/login', users.login);
  app.post('/users', users.create);
  app.delete('/polls/:id', polls.delete);
  // app.get('/users/:id', users.show);
  // app.post('/users', users.create);
  // app.put('/users/:id', users.update);
  // app.delete('/users/:id', users.delete);

}
