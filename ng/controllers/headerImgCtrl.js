var app = angular.module('app');

app.controller('headerImgCtrl', function($scope) {

    $scope.$watch(function() {
        return window.innerHeight;
    },function (height) {
        $scope.windowHeight = height;
      } );

})


