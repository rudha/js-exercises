var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
	$scope.dd = 0;
	$scope.tryDate = function() {
		var dn1 = Date.parse($scope.d1);
		var dn2 = Date.parse($scope.d2);

		// Check for weekends
		while (dn1 > dn2) {
			if (moment(dn1).weekday() == 0 || moment(dn1).weekday() == 6) {
				$scope.d1 = moment($scope.d1).subtract(1, 'days');
			}
			dn1 = dn1 - 86400000;
		}
		while (dn2 > dn1) {
			if (moment(dn2).weekday() == 0 || moment(dn2).weekday() == 6) {
				$scope.d2 = moment($scope.d2).subtract(1, 'days');
			}
			dn2 = dn2 - 86400000;
		}
		dn1 = Date.parse($scope.d1);
		dn2 = Date.parse($scope.d2);
		var dms = Math.abs(dn1-dn2);
		if (dms) {$scope.dd = (dms/86400000);}
		else {$scope.dd = 0;}
	}
});