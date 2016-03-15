'use strict';
var app = angular

	.module('app', ['ngAnimate','ui.bootstrap', 'ngMap', 'ngTouch', 'angular-parallax', 'duScroll', 'angulartics', 'angulartics.google.analytics'])

	.controller('mapCtrl', [ '$scope', '$uibModal',
		function($scope, $uibModal) {
			$scope.open = function (size) {

				var modalInstance = $uibModal.open({
					templateUrl: 'modalTemplate',
					controller: 'ModalInstanceCtrl',
					size: 'lg'
				});

			}
		}
	])

	.controller('ModalInstanceCtrl', ['$scope', '$uibModalInstance',

		function ($scope, $uibModalInstance) {

			$scope.cancel = function () {
				$uibModalInstance.dismiss('cancel');
			};
		}

	])

	.controller('ContactCtrl', ['$scope',
		function ($scope) {

			$scope.sendTheMail = function() {

				var apiURL = "https://mandrillapp.com/api/1.0/messages/send.json";
				var emailBody = "From: sabrillapp<br><br>Subject: asuton<br><br>Mensaje";
				var name = $scope.name;
				console.log(name);
				// var params = {
				// 	"message": {
				// 		"from_email":'test@test.com',
				// 		"to":[{"email":"myemail@hotmail.com"}],
				// 		"subject": "New email from website",
				// 		"html": emailBody
				// 	}
				// };

				// $http.post(apiURL, params).

				// success(function (data, status, headers, config) {
				// 	console.log(status);
				// }).

				// error( function (data, status, headers, config) {
				// 	console.log(status);
				// });

			};
		}

	]);