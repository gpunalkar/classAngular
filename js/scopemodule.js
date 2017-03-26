var scopeModule = angular.module('ScopeModule',[]);

scopeModule.controller('MainController', ['$scope',function($scope){
    $scope.tod = "Sunday";
    $scope.name = "Ganesh"; 
    }
]);

scopeModule.controller('ChildController', ['$scope',function($scope){
    $scope.tod = "Child Sunday";
    $scope.name = "Child Ganesh"; 
    }
]);

scopeModule.controller('GrandChildController', ['$scope',function($scope){
    $scope.tod = "Grand Child Sunday";
    $scope.name = "Grand Child Ganesh"; 
    }
]);