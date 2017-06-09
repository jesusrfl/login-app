(function () {
  'use strict';

  angular
    .module('app', ['ui.router', 'ngMessages', 'ngStorage'])
    .config(config)
    .run(run);

  function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home/index.view.html',
        controller: 'Home.IndexController',
        controllerAs: 'vm'
      })
      .state('login', {
      	url: '/login',
      	templateUrl: 'login/index.view.html',
      	controller: 'Login.IndexController',
      	controllerAs: 'vm'
      });
  }

  function run($rootScope, $http, $location, $localStorage) {
  	if ($localStorage.currentEmail) {
  	  $http.defaults.headers.common.Authorization = 'Bearer ' + $localStorage.currentEmail.token;
  	}

  	$rootScope.$on('$locationChangeStart', function (event, next, current) {
  	  var publicPages = ['/login'];
  	  var restrictedPage = publicPages.indexOf($location.path()) === -1;
  	  if (restrictedPage && !$localStorage.currentEmail) {
  	  	$location.path('/login');
  	  } 
  	});
  }
})();