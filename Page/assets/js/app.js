var app = angular.module('app',
    [
        //here add depedencies
        //'pascalprecht.translate'
        'ngAnimate'
    ]);


// app.config(['$translateProvider', function ($translateProvider) {

//     $translateProvider.useStaticFilesLoader({
//         files: [
//             {
//                 prefix: '../content/my-work-',
//                 suffix: '.json'
//             }
//             //  ,
//             // {
//             //     prefix: '../content/locale-',
//             //     suffix: '.json'
//             //  },
//             //  {
//             //      prefix: '../content/skills-',
//             //      suffix: '.json'
//             //  },{
//             //      prefix: '../content/resume-',
//             //      suffix: '.json'
//             //  }
//         ]
//     });
//     $translateProvider.preferredLanguage('en');
//     $translateProvider.fallbackLanguage(['en']);
//     $translateProvider.useSanitizeValueStrategy('escape');
// }]);

// app.controller('Ctrl', ['$translate', '$scope', function ($translate, $scope) {




//     $scope.getContent = function (param) {

//         for (var i = 1; i < 5 ; i++) {
//             $translate('MYWORK.' + param + '.PROJECTS.PROJECT' + i + '.PROJECTNAME').then(function (mywork) {
//                 $scope.data = mywork;
//                 translation = mywork;

//                 console.log($scope.data);
//                 console.log(mywork);
//                 console.log('MYWORK.' + param + '.PROJECTS.PROJECT' + i + '.PROJECTNAME');
//             })
//         }
//     }

//     $scope.changeLanguage = function (langKey) {
//         $translate.use(langKey);
//         $scope.getContent();
//     };
// }]);


var app = angular.module('app');

app.controller('aboutMeCtrl', function ($scope, getContentSvrc) {

    getContentSvrc.getData('about-me').then(function (data) {
        $scope.content = data.data;
        console.log(data.data)
    });

    

})



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



var app = angular.module('app');

app.controller('headerImgCtrl', function($scope) {

    $scope.windowHeight = window.innerHeight;

})



var app = angular.module('app');

app.controller('menuCtrl', function ($scope) {


    $scope.scroller = function (anchor) {
    $scope.display = false;

        var topOffset = $('#' + anchor.replace(" ", "")).offset().top;
        console.log(topOffset);
        $('html , body').animate({
            scrollTop: topOffset
        }, 500
        )
    }


})



var app = angular.module('app');

app.service('getContentSvrc', function($http) {
    var langKey = ['en', 'pl'];
    var defaultLang = 'en';

    this.setDefault = function (key) {
        if (langKey.includes(key)) {
            defaultLang = key;
        }
    }

    this.getDefault = function () {
        return defaultLang;
    }

    this.isDefault = function (key) {
        return key === defaultLang;
    }

    this.getLangKeys = function () {
        return langKey;
    }

    this.registerLanguage = function (key) {
        if (!langKey.includes(key)) {
            langKey.push(key);
        }
    }

    this.getData = function (section, langKey) {
        if (typeof langKey === 'undefined') {
            langKey = defaultLang
        }
        return $http.get('../assets/content/' + section + '/' + langKey + '.json');
    }
});
var app = angular.module('app');

app.directive('aboutMe',function () {
    return {
        restrict: 'E', 
        scope: {
        },
        templateUrl: 'assets/templates/aboutme.html'
    }
  })
var app = angular.module('app');

app.directive('headerImg',function () {
    return {
        restrict: 'E', 
        scope: {
            name: "@",
            lastname: "@",
            imgurl: '@'
        },
        templateUrl: 'assets/templates/headerimg.html'
    }
  })
var app = angular.module('app');

app.directive('topNav',function () {
    return {
        restrict: 'E', 
        scope: {
            sections: '=',
            langlist: '=',
            language: '=',
            foo: '='
        },
        templateUrl: 'assets/templates/menu.html'
    }
  })