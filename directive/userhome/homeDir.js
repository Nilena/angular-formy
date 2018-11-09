(function() {
	'use strict';
	console.log("dir2");
	angular.module('adminApp')
	.directive('homeDir', homeDirective)
	.factory('editDataFactory', function(){
		let data = {};
		return{
			get: function(key){
				try {
					return data[key];
				} finally {
					data = {};
				}
				
			},
			set: function(key, value){
				return data[key]=value;
			}
		}
	});
	homeDirective.$inject=['editDataFactory', '$location'];
	function homeDirective(editDataFactory,$location){
	var directive = {
		link:link,
		restrict:'EA',
		templateUrl: 'directive/userHome/homeTemplate.html'
	};
 return directive;
 	function link( scope, element, attr) {
 		scope.userlist= JSON.parse(localStorage.getItem('userList'));
 		console.log(scope.userlist);
 		scope.edituserDetails= function(id){
 			editDataFactory.set('user', {userlist:scope.userlist, id: id});
 			$location.path("/userregistration");
 		}
 		scope.removeuserDetails= function(id){
 			scope.userlist.splice(id,1);
 			localStorage.setItem('userList', JSON.stringify(scope.userlist));
 		}
 	}
}
})();

