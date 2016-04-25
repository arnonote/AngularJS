var app = angular.module('myApp.controllers', []);


// RootCtrl
app.controller('RootCtrl', function($scope) 
{
	$scope.name = "John John";
	$scope.email = "john.john@me.com";
});

// LogCtrl
app.controller('LogCtrl', function($scope) 
{
	
});