app.factory('pollsFactory', ['$http', function($http) {
  var factory = {}
  // create new user
  factory.create = function(newpoll, user, callback){
    console.log(user);
    console.log(newpoll);
    $http.post('/polls/' + user._id, newpoll).then(function(data){
      if(!data.data){
        if (typeof(callback) == 'function'){
          console.log(data.data);
          callback(data.data);
        }
      }else{
        console.log(data.data);
        callback(data.data)
      }
    });
  };
  //display specific users information
  factory.show = function(route, callback){
    $http.get('/polls/' + route.id).then(function(data){
      poll = data.data;
      callback(poll)
    })
  };
  factory.vote = function(id, route, callback){
    console.log(id);
    console.log(route);
    $http.post('/vote/' + route.id, id).then(function(data){
      poll = data.data;
      console.log(poll);
      callback(poll)
    })
  }
  // // grab all users from database and pass it to client
  // factory.index = function(callback){
  //   $http.get('/customers').then(function(returned_data){
  //     customers = returned_data.data;
  //     callback(customers)
  //   });
  // };
  // // update specific user information
  // factory.update = function(customer, callback){
  //   $http.put('/customers/' + friend._id, friend).then(function(returned_data){
  //     callback(returned_data.data);
  //   })
  // };
  // //delete specific user
  // factory.delete = function(id, callback){
  //   $http.delete('/customers/' + id).then(function(returned_data){
  //     callback();
  //   });
  // };
  // factory.getCustomers = function(callback){
  //   callback(customers);
  // };
  // factory.getCustomer = function(callback){
  //   callback(customer);
  // };
  // need to return factory at the end of every factory
  return factory;
}]);
