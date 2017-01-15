var app = angular.module('app');

app.directive('topNav',function () {
    return {
        restrict: 'E', 
        scope: {
            sections: '=',
            langlist: '=',
            language: '=',
            foo: '='
        },
        templateUrl: 'assets/templates/menu.html'
    }
  })