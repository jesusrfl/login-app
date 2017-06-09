(function () {
  'use strict';
  
   angular
     .module('app')
     .factory('AuthenticationService', Service);

    function Service($http, $localStorage) {
      var service = {};

      service.Login = Login;
      service.Logout = Logout;

      return service;

    	function Login(email, password, callback) {
          $http.post('/jesusrfl/Login/1.0/login', { email: email, password: password})
            .success(function (response) {
              if (response.code === 200) {
                $localStorage.currentEmail = { email: email };
              	$http.defaults.headers.common.Authorization = 'Bearer ' + response.token;
              	callback(true);
              } else {
              	callback(false);
              }
            });
    	}

    	function Logout() {
    	  delete $localStorage.currentEmail;
    	  $http.defaults.headers.common.Authorization = '';
    	}
    }
})();