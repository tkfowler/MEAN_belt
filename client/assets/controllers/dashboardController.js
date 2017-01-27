app.controller('dashboardController', ['$scope', '$location', 'dashboardsFactory', function($scope, $location, dashboardsFactory) {
  $scope.logout = function(){
    dashboardsFactory.logout(function(data){
      $scope.user = data
    })
    $location.url('/')
  }

  var getCurrentUser = function(){
    dashboardsFactory.getCurrentUser(function(data){
      $scope.user = data
    })
  }
  getCurrentUser();

  var getPolls = function(){
    dashboardsFactory.getPolls(function(data){
      $scope.polls = data
      console.log($scope.polls);
    })
  }
  getPolls();

  $scope.login = function(){
    dashboardsFactory.login($scope.user, function(data){
      if(data === null){
        dashboardsFactory.create($scope.user, function(data){
          if(data.errors){
            $scope.errors = data.errors
          }else{
            $location.url('/dashboard')
          }
        })
      }else{
        $location.url('/dashboard')
      }
    })
  }

  $scope.delete = function(id){
    console.log(id);
    dashboardsFactory.delete(id, $scope.user, function(data){
      $scope.polls = data;
      getPolls();
    })
  }
}]);
