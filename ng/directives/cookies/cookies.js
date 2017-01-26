var app = angular.module('app');

app.directive('cookies',function () {
    return {
        restrict: "E",
        controller: "cookiesCtrl",
        templateUrl : 'assets/templates/cookies.html'
    }
  })