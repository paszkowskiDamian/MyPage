var app = angular.module('app');

app.directive('projectView',function () {
    return {
        restrict: 'E', 
        scope: {
            project : '=',
            hide: '=',
            anchor: '='
        },
        controller: 'projectViewCtrl',
        templateUrl: 'assets/templates/projectView.html'
    }
  })