var app = angular.module('myApp.directives', []);

app.directive('swCard', function() {
	return {
		scope:{title:'@', subtitle:'@'}, // isolation de scope
		restrict: 'E',
		replace: true,
		template: 	'<div class="sw-card clearfix">'
					+'<div class="img" style="background-image:url({{sw_card_src}})"></div>'
					+'<h1>{{title}}</h1>'
					+'<h2>{{subtitle}}</h2>'
					+'</div>',
					
		link:function(scope, element, attrs){
			scope.sw_card_src = attrs.src;
		}
	};
});