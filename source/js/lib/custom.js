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

	]);

