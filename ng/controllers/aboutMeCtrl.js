var app = angular.module('app');

app.controller('aboutMeCtrl', function ($scope, getContentSvrc) {

    getContentSvrc.getData('about-me').then(function (data) {
        $scope.content = data.data;
        console.log(data.data)
    });

    

})


