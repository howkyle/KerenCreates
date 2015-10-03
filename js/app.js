var app = angular.module("KerenCreatesApp", ['ngRoute']);
app.config(function($routeProvider, $locationProvider) {
	$routeProvider
	.when('/', {
		controller: 'HomeController', 
		templateUrl: 'views/homePage.html'
	})
	.when('/craft', {
		controller: 'ProductController',
		templateUrl: 'views/crafts.html'
	})
	.otherwise({
		redirectTo:'/'
	});
	
})