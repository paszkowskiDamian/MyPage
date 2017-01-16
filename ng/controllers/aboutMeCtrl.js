var app = angular.module('app');

app.controller('aboutMeCtrl', function ($scope, getContentSvrc) {




    $scope.$watch(function () {
        return getContentSvrc.getCurrentLang();
    }, function (newVal) {
        getContentSvrc.getData('about-me').then(function (data) {
            $scope.content = data.data;
        });
    }, true)

})


