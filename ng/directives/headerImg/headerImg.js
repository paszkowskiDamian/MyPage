var app = angular.module('app');

app.directive('headerImg',function () {
    return {
        restrict: 'E', 
        scope: {
            name: "@",
            lastname: "@",
            imgurl: '@'
        },
        templateUrl: 'assets/templates/headerimg.html'
    }
  })