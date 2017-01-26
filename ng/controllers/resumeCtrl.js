var app = angular.module('app');

app.controller('resumeCtrl', function ($scope, getContentSvrc) { 

    $scope.$watch(function () {
        return getContentSvrc.getCurrentLang();
    }, function (newVal) {
        getContentSvrc.getData('resume').then(function (data) {
            $scope.content = data.data;
        });
    }, true);



})