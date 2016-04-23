   var myapp = angular.module("myApp", []);
            myapp.controller("myCntrl", function ($scope) {
                $scope.first=0;
                $scope.second=1;

                $scope.updateValue = function(){
                	$scope.test = (+$scope.first + +$scope.second);
            };
            });