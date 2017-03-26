var serviceModule = angular.module('ServiceModule',[]);

serviceModule.controller('ServiceController', ['$scope','notify', function($scope,notify){
$scope.showError = function(msg) {
    notify(msg);
}    
 }]);

 serviceModule.service('notify', ['$window', function(win) {
     return function(msg) {
            win.alert(msg);
             }
 }]);