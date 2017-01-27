//create angular module and inject ngRoute dependency
var app = angular.module('app', ['ngRoute', 'angularMoment']);
//set up routes on client-side. calls the partials and associated controllers
app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/login.html',
      controller: 'dashboardController'
    })
    .when('/dashboard', {
      templateUrl: 'partials/dashboard.html',
      controller: 'dashboardController'
    })
    .when('/create', {
      templateUrl: 'partials/create.html',
      controller: 'pollController'
    })
    .when('/poll/:id', {
      templateUrl: 'partials/poll.html',
      controller: 'pollController'
    })
    .otherwise({
      redirectTo: '/'
    })
});
