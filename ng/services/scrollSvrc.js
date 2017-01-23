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