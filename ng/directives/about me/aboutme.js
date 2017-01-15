var app = angular.module('app');

app.directive('aboutMe',function () {
    return {
        restrict: 'E', 
        scope: {
        },
        templateUrl: 'assets/templates/aboutme.html'
    }
  })