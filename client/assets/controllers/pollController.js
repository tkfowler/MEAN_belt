app.controller('pollController', ['$scope', '$location', '$routeParams', 'pollsFactory','dashboardsFactory', function($scope, $location, $routeParams, pollsFactory, dashboardsFactory) {
  var getCurrentUser = function(){
    dashboardsFactory.getCurrentUser(function(data){
      $scope.user = data
    })
  }
  getCurrentUser();

  $scope.create = function(){
    pollsFactory.create($scope.poll, $scope.user, function(data){
      if(data.errors){
        $scope.errors = data.errors
      }else{
        $location.url('/dashboard')
      }
    })
  }
  $scope.show = function(){
    pollsFactory.show($routeParams, function(data){
      $scope.poll = data
      console.log($scope.poll);
    })
  }();
  $scope.vote = function(id){
    console.log(id);
    pollsFactory.vote(id, $routeParams, function(data){
      $scope.poll = data
    })
  }
}])
