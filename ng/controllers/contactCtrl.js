var app = angular.module('app');

app.controller('contactCtrl', function ($scope, getContentSvrc, emailSvrc) {

    $scope.name = "";
    $scope.email = "";
    $scope.message = "";

    $scope.hideForm = false;

    $scope.thanks = false;
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

            emailSvrc.sendEmail($scope.nameError, $scope.emailError, $scope.messageError).then(function (data) {

                if (data.data === "sucess") {
                    console.log('server odpowiedział!')
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