var app = angular.module('app');

app.directive('contact',function() {
    return {
        restrict: 'E',
        scope: {

        },
        controller : 'contactCtrl',
        templateUrl : 'assets/templates/contact.html'
    }
})