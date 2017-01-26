var app = angular.module('app');

app.controller('cookiesCtrl', function ($scope, getContentSvrc, $cookies) {

    $scope.accept = $cookies.get('cookiesAccepted');
    $scope.accept === undefined ? $scope.accept = false : $scope.accept;

    $scope.moreInfo = false;

    $scope.acceptCookies = function () {
        $scope.accept = true;
        var expireDate = new Date();
        expireDate.setDate(expireDate.getDate() + 7);
        $cookies.put('cookiesAccepted', 'true',{ 'expires': expireDate });
    }

    $scope.$watch(function () {
        return getContentSvrc.getCurrentLang();
    }, function (newVal) {
        getContentSvrc.getData('cookies').then(function (data) {
            $scope.content = data.data;
        });
    }, true)

})