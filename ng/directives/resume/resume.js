var app = angular.module('app');

app.directive('resume',function () {
    return {
        restrict: 'E',
        scope: {

        },
        controller: 'resumeCtrl', 
        templateUrl: 'assets/templates/resume.html'
    }
  })