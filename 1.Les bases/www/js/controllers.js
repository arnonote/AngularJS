var app = angular.module('myApp.controllers', []);

// RootCtrl
app.controller('RootCtrl', function($scope) 
{
	$scope.name = "Luke";
	$scope.email = "luke.skywalker@starwars.com";
});

// LogCtrl
app.controller('LogCtrl', function($scope, $timeout) 
{
	$timeout(function()
	{
		$scope.name = "Chewie";
	},5000);
});