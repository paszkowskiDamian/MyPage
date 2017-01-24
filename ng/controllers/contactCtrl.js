var app = angular.module('app');

app.controller('contactCtrl',function ($scope,getContentSvrc) {

    $scope.$watch(function () {
        return getContentSvrc.getCurrentLang();
    }, function (newVal) {
        getContentSvrc.getData('contact').then(function (data) {
            $scope.content = data.data;
        });
    }, true);

  })