'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
  function($scope, Phone) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
  }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);
  
phonecatControllers.controller('CarouselDemoCtrl', ['$scope', '$routeParams', 'Phone',
  function ($scope, $routeParams, Phone) {
    $scope.myInterval = 5000;
    var slides = $scope.slides = [];
	$scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
		for(var i=0;i<phone.images.length;i++){
			slides.push({
			  image: phone.images[i],
			  text: phone.name//'Image #' + (i+1)
			});	
		}
		$scope.mainImageUrl = phone.images[0];
    });
  }]);
