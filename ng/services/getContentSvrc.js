var app = angular.module('app');

app.service('getContentSvrc', function ($http) {
    var langKey = ['en', 'pl'];
    var defaultLang = 'en';
    var currentLang = defaultLang;

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
        }
    }

    this.getData = function (section, key) {
        if (typeof Key === 'undefined') {
            key = currentLang;
        }
        return $http.get('../assets/content/' + section + '/' + key + '.json');
    }
});