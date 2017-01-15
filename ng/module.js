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

