(function () {
  'use strict';

  angular
    .module('app')
    .controller('Login.IndexController', Controller);

    function Controller($location, AuthenticationService) {
      var vm = this;
      vm.login = login;
      initController();

      function initController() {
      	AuthenticationService.Logout();
      }

      function login() {
      	vm.loading = true;
      	AuthenticationService.Login(vm.email, vm.password, function (result) {
      		if (result) {
              $location.path('/');
      		} else {
              vm.error = 'Los datos son incorrectos.';
              vm.loading = false;
      		}
      	});
      }
    }
})();