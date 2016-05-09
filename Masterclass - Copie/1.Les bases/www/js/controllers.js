var app = angular.module('myApp.controllers', []);

app.controller('RootCtrl',function($scope){
	$scope.name = "Luke";
	$scope.email = "Luke@starwars.com";
});

app.controller('OtherCtrl',function($scope){
	$scope.name = "Chewie";
});