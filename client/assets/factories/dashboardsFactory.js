app.factory('dashboardsFactory', ['$http', function($http) {
  var factory = {}
  var currentUser = {}
  var polls = []
  factory.login = function(user, callback){
    currentUser = {}
    $http.post('/login', user).then(function(data){
      currentUser = data.data
      console.log(currentUser);
      callback(data.data)
    });
  }
  factory.logout = function(callback){
    currentUser = {};
    callback(currentUser)
  }
  // create new user
  factory.create = function(newuser, callback){
    $http.post('/users', newuser).then(function(data){
      if(!data.data){
        if (typeof(callback) == 'function'){
          callback(data.data);
        }
      }else{
        currentUser = data.data
        console.log(currentUser);
        callback(data.data)
      }
    });
  };
  factory.getCurrentUser = function(callback){
    callback(currentUser);
  }

  factory.getPolls = function(callback){
    $http.get('/polls').then(function(data){
      polls = data.data
      console.log(polls);
      callback(polls)
    })
  }

  factory.delete = function(id, user, callback){
    console.log(user);
    $http.delete('/polls/'+ id, user).then(function(data){
      polls = data.data
      callback(polls)
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
  // //display specific users information
  // factory.show = function(route, callback){
  //   $http.get('/customers/' + route.id).then(function(returned_data){
  //     customer = returned_data.data;
  //     callback(customer)
  //   })
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
