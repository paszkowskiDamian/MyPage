var app = angular.module('app');

app.controller('myWorkCtrl', function ($scope, getContentSvrc,scrollSvrc) {

    $scope.currentCategory = 'all';
    $scope.hideView = true;

    $scope.selectCategory = function (category) {
        $scope.currentCategory = category;
        $scope.hideView = true;
        $scope.projects = $scope.streamProjects();
    }

    $scope.viewProject;

    $scope.click = function (section,project) {
        $scope.hideView = false;
        $scope.viewProject = project;
        scrollSvrc.scroller(section); 
    }

    $scope.streamProjects = function () {
        var list = [];
        for (var i = 0; i < $scope.content.MYWORK.length; i++) {

            var category = $scope.content.MYWORK[i].CATEGORY;
            if (category === $scope.currentCategory || $scope.currentCategory === 'all') {
                for (var j = 0; j < $scope.content.MYWORK[i].PROJECTS.length; j++) {
                    list.push($scope.content.MYWORK[i].PROJECTS[j]);
                }
            }
        }
        return list;
    }

    $scope.$watch(function () {
        return getContentSvrc.getCurrentLang();
    }, function (newVal) {
        getContentSvrc.getData('my-work').then(function (data) {
            $scope.content = data.data;
            
            $scope.projects = $scope.streamProjects();
            
        });
    }, true)

})


