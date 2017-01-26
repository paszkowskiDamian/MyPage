var app = angular.module('app',
    [
        //here add depedencies
        //'pascalprecht.translate'
        'ngAnimate',
        'ngCookies'
    ]);

app.config(['$compileProvider', function ($compileProvider) {
  $compileProvider.debugInfoEnabled(false);
}]);
