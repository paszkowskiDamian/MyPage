var app = angular.module('app');

app.directive('skillCategory',function () { 
    return {
        restrict: 'E',
        scope: {
            category : '=',
            skills: '='
        },
        controller: 'skillCategoryCtrl',
        templateUrl: 'assets/templates/skillCategory.html'
    }
  })