var rootModule = angular.module('RootModule',[]);
rootModule.controller('MyController', ['$scope',function($scope){
    $scope.a=10;
    $scope.add = function(x,y){
        return x+y;
    }
}
]);
