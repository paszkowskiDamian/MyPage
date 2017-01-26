var app = angular.module('app');

app.controller('contactCtrl', function ($scope, getContentSvrc, emailSvrc, $cookies) {

    $scope.name = "";
    $scope.email = "";
    $scope.message = "";

    if ($cookies.get('messageSent') === 'true') {
        $scope.hideForm = true;
        $scope.thanks = true;
    } else {
        $scope.hideForm = false;
        $scope.thanks = false;
    }


    $scope.nameError = false;
    $scope.emailError = false;
    $scope.messageError = false;

    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
 
    $scope.send = function () {

        $scope.nameError = ($scope.name === undefined || $scope.name.length === 0);

        $scope.emailError = (!validateEmail($scope.email));

        $scope.messageError = ($scope.message === undefined || $scope.message.length === 0);

        if (!$scope.nameError && !$scope.emailError && !$scope.messageError) {

            $scope.hideForm = true;

            emailSvrc.sendEmail($scope.name, $scope.email, $scope.message).then(function (data) {

                if (data.data === "sucess") {
                    var expireDate = new Date();
                    expireDate.setDate(expireDate.getDate() + 7);
                    $cookies.put('messageSent', 'true', { 'expires': expireDate });
                    $scope.thanks = true;
                }

            });
        }

    }


    $scope.$watch(function () {
        return getContentSvrc.getCurrentLang();
    }, function (newVal) {
        getContentSvrc.getData('contact').then(function (data) {
            $scope.content = data.data;
        });
    }, true);

})