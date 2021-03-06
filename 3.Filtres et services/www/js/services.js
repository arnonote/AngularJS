var app = angular.module('myApp.services', []);

app.factory('Data', function() {
	var service = {};

	service.get_characters = function() {
		var characters = [
			{title:"Leia", subtitle:"Princesse Leia Organa d'Aldérande", src:"img/leia.png", type:"women"},
			{title:"Luke Skywalker", subtitle:"Jedi, frère de Leia", src:"img/luke.jpg", type:"men"},
			{title:"Han Solo", subtitle:"Commandant du faucon millenium", src:"img/han.jpg", type:"men"},
			{title:"Chewbacca", subtitle:"Fidèle compagnon d'Han Solo", src:"img/chewie.jpg", type:"other"}
		];
		return characters;
	};


	return service;
});

