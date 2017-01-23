var app = angular.module('app');

app.controller('menuCtrl', function ($scope,scrollSvrc) {


    $scope.scroller = function (anchor) {
        $scope.display = false;

        scrollSvrc.scroller(anchor);
    }

})


