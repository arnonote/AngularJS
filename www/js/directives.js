var app = angular.module('myApp.directives', []);

app.directive('swCard', function() {
	return {
		scope:{title:'@'}, // isolation de scope
		restrict: 'E',
		replace: true,
		template: 	'<div>'
					+'<img src="{{sw_card_src}}"/>'
					+'<h1>{{title}}</1h1>'
					+'<h2>{{sw_card_subtitle}}</h2>'
					+'</div>',
					
		link:function(scope, element, attrs){
			console.log(scope)
			console.log(element)
			console.log(attrs)
			
			scope.sw_card_subtitle = element.text;
			scope.sw_card_src = attrs.src;
		}
	};
});