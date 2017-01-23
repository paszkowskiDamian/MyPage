var app = angular.module('app');

app.directive('skills',function () {
    return{
        restrict: 'E', 
        scope: {
        },
        controller: 'skillsCtrl',
        templateUrl: 'assets/templates/skills.html'
    }
  })