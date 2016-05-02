var app = angular.module('myApp.directives', []);

app.directive('swCard', function() {
	return {
		restrict: 'E',
		replace: true,
		transclude: false,
		template: 	'<div>'
					+'<img src=""/>'
					+'<h1>{{name}}</h1>'
					+'<h2>subtitle</h2>'
					+'</div>',
		link:function(scope, element, attrs){
			
		}
	};
});