var app = angular.module('app');

app.controller('menuCtrl', function ($scope) {


    $scope.scroller = function (anchor) {
    $scope.display = false;

        var topOffset = $('#' + anchor.replace(" ", "")).offset().top;
        console.log(topOffset);
        $('html , body').animate({
            scrollTop: topOffset
        }, 500
        )
    }


})


