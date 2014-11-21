var AwesomeAngularWebApp = angular.module('AwesomeAngularWebApp', ['ngRoute', 'ngCookies']);
AwesomeAngularWebApp.controller('BaseController', BaseController);
AwesomeAngularWebApp.controller('LoginController', LoginController);
AwesomeAngularWebApp.controller('RegisterController', RegisterController);
AwesomeAngularWebApp.controller('ValuesController', ValuesController);
AwesomeAngularWebApp.service('SessionService', SessionService);
AwesomeAngularWebApp.factory('LoginFactory', LoginFactory);
AwesomeAngularWebApp.factory('RegisterFactory', RegisterFactory);
AwesomeAngularWebApp.factory('GetValuesFactory', GetValuesFactory);

var ConfigFunction = function($routeProvider) {
  $routeProvider
   .when('/login', {
    templateUrl: 'views/login.html',
    controller: 'LoginController'
  })
  .when('/register', {
    templateUrl: 'views/register.html',
    controller: 'RegisterController'
  })
  .when('/values', {
    templateUrl: 'views/values.html',
    controller: 'ValuesController'
  });
};
ConfigFunction.$inject = ['$routeProvider'];
AwesomeAngularWebApp.config(ConfigFunction);