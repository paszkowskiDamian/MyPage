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