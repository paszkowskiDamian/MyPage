var app = angular.module('app');

app.controller('headerCtrl', function ($scope, getContentSvrc, $rootScope) {

    getContentSvrc.getData('header').then((res) => {
        $scope.content = res.data;
    });

    $scope.currentLang = getContentSvrc.getCurrentLang();
    $scope.langKeys = getContentSvrc.getLangKeys();

    $scope.headerImage = 'assets/img/header_img.jpg';

    $scope.changeLang = function (lang) {
            getContentSvrc.setCurrentLang(lang);
            getContentSvrc.getData('header').then((res) => {
            $scope.content = res.data;
            $scope.currentLang = lang;
        });

    }

})


