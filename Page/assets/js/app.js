var app = angular.module('app',
    [
        //here add depedencies
        //'pascalprecht.translate'
        'ngAnimate',
        'ngCookies'
    ]);


var app = angular.module('app');

app.controller('aboutMeCtrl', function ($scope, getContentSvrc) {

    $scope.$watch(function () {
        return getContentSvrc.getCurrentLang();
    }, function (newVal) {
        getContentSvrc.getData('about-me').then(function (data) {
            $scope.content = data.data;
        });
    }, true)

})



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
var app = angular.module('app');

app.controller('cookiesCtrl',function ($scope,getContentSvrc,$cookies) {

    $scope.accept = $cookies.get('cookiesAccepted');
    $scope.accept === undefined ? $scope.accept = false : $scope.accept;

    $scope.moreInfo = false;

    $scope.acceptCookies = function () { 
        $scope.accept = true;
        $cookies.put('cookiesAccepted','true');
     }

    $scope.$watch(function () {
        return getContentSvrc.getCurrentLang();
    }, function (newVal) {
        getContentSvrc.getData('cookies').then(function (data) {
            $scope.content = data.data;
        });
    }, true)

  })
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



var app = angular.module('app');

app.controller('headerImgCtrl', function($scope) {

    $scope.$watch(function() {
        return window.innerHeight;
    },function (height) {
        $scope.windowHeight = height;
      } );

})



var app = angular.module('app');

app.controller('menuCtrl', function ($scope,scrollSvrc) {


    $scope.scroller = function (anchor) {
        $scope.display = false;

        scrollSvrc.scroller(anchor);
    }

})



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



var app = angular.module('app');

app.controller('resumeCtrl', function ($scope, getContentSvrc) { 

    $scope.$watch(function () {
        return getContentSvrc.getCurrentLang();
    }, function (newVal) {
        getContentSvrc.getData('resume').then(function (data) {
            $scope.content = data.data;
        });
    }, true);



})
var app = angular.module('app');

app.controller('skillCategoryCtrl',function ($scope) {

    

  })
var app = angular.module('app');

app.controller('skillsCtrl',function ($scope,getContentSvrc) {


    $scope.$watch(function () {
        return getContentSvrc.getCurrentLang();
    }, function (newVal) {
        getContentSvrc.getData('skills').then(function (data) {
            $scope.content = data.data;
        });
    }, true)

  })
var app = angular.module('app');

app.service('emailSvrc',function($http) {
    
    this.sendEmail = function(name,email,message){
        return $http.post('api/email.php',{
            'name': name,
            'email': email,
            'message': message 
        });
    }
})
var app = angular.module('app');

app.service('getContentSvrc', function ($http,$cookies) {
    var langKey = ['en', 'pl'];
    var defaultLang = 'en';
    
    var userLang = $cookies.get('usertLang');
    if(userLang !== undefined)
    {
        var currentLang  = userLang;
    }else{
        var currentLang = defaultLang;
    }

    this.setDefault = function (key) {
        if (langKey.includes(key)) {
            defaultLang = key;
        }
    }

    this.getDefault = function () {
        return defaultLang;
    }

    this.getCurrentLang = function () {
        return currentLang;
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

    this.setCurrentLang = function(key) {
        if (langKey.includes(key)) {
            currentLang = key;
                $cookies.put('usertLang',key);
        }
    }

    this.getData = function (section, key) {
        if (typeof Key === 'undefined') {
            key = currentLang;
        }
        return $http.get('../assets/content/' + section + '/' + key + '.json');
    }
});
var app = angular.module('app');

app.service('scrollSvrc', function () {

    this.scroller = function (anchor) {
        var topOffset = $('#' + anchor.replace(" ", "")).offset().top;
        $('html , body').animate({
            scrollTop: topOffset - 60
        }, 500
        )
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

app.directive('contact',function() {
    return {
        restrict: 'E',
        scope: {

        },
        controller : 'contactCtrl',
        templateUrl : 'assets/templates/contact.html'
    }
})
var app = angular.module('app');

app.directive('cookies',function () {
    return {
        restrict: "E",
        controller: "cookiesCtrl",
        templateUrl : 'assets/templates/cookies.html'
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
var app = angular.module('app');

app.directive('myWork',function () {
    return {
        restrict: 'E', 
        scope: {
        },
        templateUrl: 'assets/templates/mywork.html'
    }
  })  
var app = angular.module('app');

app.directive('projectView',function () {
    return {
        restrict: 'E', 
        scope: {
            project : '=',
            hide: '=',
            anchor: '='
        },
        controller: 'projectViewCtrl',
        templateUrl: 'assets/templates/projectView.html'
    }
  })
var app = angular.module('app');

app.directive('resume',function () {
    return {
        restrict: 'E',
        scope: {

        },
        controller: 'resumeCtrl', 
        templateUrl: 'assets/templates/resume.html'
    }
  })
var app = angular.module('app');

app.directive('skillCategory',function () { 
    return {
        restrict: 'E',
        scope: {
            category : '=',
            skills: '='
        },
        controller: 'skillCategoryCtrl',
        templateUrl: 'assets/templates/skillCategory.html'
    }
  })
var app = angular.module('app');

app.directive('skills',function () {
    return{
        restrict: 'E', 
        scope: {
        },
        controller: 'skillsCtrl',
        templateUrl: 'assets/templates/skills.html'
    }
  })