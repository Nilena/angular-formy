(function(){angular.module('adminApp')
	
			.config(function($routeProvider){
			$routeProvider
			.when("/",{
				template:"<login-dir></login-dir>",
				permission:true
			})
			.when("/userhome",{
				template:"<home-dir></home-dir>",
				controller: 'adminContrl'
			})
			.when("/userregistration",{
				template:"<reg-dir></reg-dir>"
			})
			.otherwise({
				redirectTo: '/'
			});
		});
})();