$(function () {

    "use strict";

    function bounceElement(selector, times, distance, speed) {

        for(var i = 0; i < times ; i++) {

            $(selector).animate({
    
                top : '-=' + distance +'px'
    
            }, speed).animate({
    
                top : '+=' + distance +'px'
    
            }, speed);
        }
    }

    $('.btn').on('click', function () {

        bounceElement($(this), 2, 15, 300);
    });
});