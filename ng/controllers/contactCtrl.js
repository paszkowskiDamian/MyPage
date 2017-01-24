var app = angular.module('app');

app.controller('contactCtrl',function ($scope,getContentSvrc,emailSvrc) {

    $scope.send = function () {
        console.log('send')
        emailSvrc.sendEmail('hi','email','message');
    }


    $scope.$watch(function () {
        return getContentSvrc.getCurrentLang();
    }, function (newVal) {
        getContentSvrc.getData('contact').then(function (data) {
            $scope.content = data.data;
        });
    }, true);

  })