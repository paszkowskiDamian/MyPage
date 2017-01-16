var app = angular.module('app');

app.directive('myWork',function () {
    return {
        restrict: 'E', 
        scope: {
        },
        templateUrl: 'assets/templates/mywork.html'
    }
  })  