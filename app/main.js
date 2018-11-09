(function(){angular.module('adminApp',["ngRoute"])
		.controller('adminContrl',['$scope','$location',function($scope,$location){
			$scope.logout = function() {
				sessionStorage.clear('user');
				$location.path('/');
			}
		}])

		.run(['$rootScope', '$location',  function($rootScope, $location) {
        $rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute) {
        	console.log('Route Change event');
            if(!nextRoute.permission) {
                if(!(sessionStorage.getItem('user'))) {
                    $location.path('/');
                }
            }else if(sessionStorage.getItem('user') && nextRoute.$$route.originalPath === '/') {
                $location.path('/userhome');
            }
        });
    }])
})();