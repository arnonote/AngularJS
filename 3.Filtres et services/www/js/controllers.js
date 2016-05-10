var app = angular.module('myApp.controllers', []);


// RootCtrl
app.controller('RootCtrl', function($scope, Data) 
{
	$scope.characters = Data.get_characters();
	
	$scope.hello = function(index){
		alert('Hello from '+$scope.characters[index].title)
	}
	
});

