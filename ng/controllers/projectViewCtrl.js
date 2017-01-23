var app = angular.module('app');

app.controller('projectViewCtrl', function ($scope, $element, $attrs, scrollSvrc, $interval) {
    $scope.data = $scope.project;
    $scope.imageList;

    $scope.return = function () {
        scrollSvrc.scroller($scope.anchor);
    }

    $scope.$watch(function () {
        return $scope.project;
    }, function (newData) {

        if (newData !== undefined) {
            $scope.mainImage = newData.IMAGEURL[0];
            $scope.imageList = newData.IMAGEURL;
        }
    });

    $scope.setMain = function (selected) {
        $scope.mainImage = selected;
    };

    var imageIndex = 0;

    $interval(function () {
        if ($scope.imageList !== undefined) {
            imageIndex++;
            if (imageIndex >= $scope.imageList.length) {
                imageIndex = 0;
            }
            $scope.mainImage = $scope.imageList[imageIndex];
        }
    }, 6000);

})


