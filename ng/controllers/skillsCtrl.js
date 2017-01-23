var app = angular.module('app');

app.controller('skillsCtrl',function ($scope,getContentSvrc) {


    $scope.$watch(function () {
        return getContentSvrc.getCurrentLang();
    }, function (newVal) {
        getContentSvrc.getData('skills').then(function (data) {
            $scope.content = data.data;
        });
    }, true)

  })