'use strict';

var controllers = angular.module('dabbble.controllers', []);


controllers.controller('homeCtrl', function ($scope, $http) {
	$scope.bike = 'Dirt bike';
	$scope.result = [];

	$scope.getImages = function () {
		$http.get('js/api.json')
			.success(function(result){
				$scope.result = result;
				console.log($scope.result);

			})
			.error(function(data, status){
				console.log(data);
		});

	}();
	
	
	
});

controllers.controller('AppCtrl', function ($scope) {
	$scope.name = "Module";
});

controllers.controller('ShotsListCtrl', function ($scope, dribbble, $routeParams) {

	var list = $routeParams.list;

	dribbble.list(list).then(function (data) {
		$scope.list = data.data;
		console.log(data);
	});

	$scope.loadNextPage = function () {
		dribbble.list(list, {page: $scope.list.page + 1}).then(function (data){
			console.log(data);
			$scope.list.page = data.data.page;
			$scope.list.shots = $scope.list.shots.concat(data.data.shots);

		});

	}

});

controllers.controller('ShotsCtrl', function ($routeParams, $scope, dribbble) {
	var id = $routeParams.id;

	dribbble.shot(id).then(function (data) {
		$scope.shot = data.data;
		console.log(data);
	})


});
