var app = angular.module('app');

app.controller('headerCtrl', function($scope, getContentSvrc, $rootScope) {

    getContentSvrc.getData('header').then((res) => {
        $scope.content = res.data;
    });

    $scope.currentLang = getContentSvrc.getDefault();
    $scope.langKeys = getContentSvrc.getLangKeys();

    $scope.headerImage = 'assets/img/header_img.jpg';

        $scope.changeLang = function(lang) {

            getContentSvrc.getData('header', lang).then((res) => {
                $scope.content = res.data;
                $scope.currentLang = lang;
            });

        }

})


