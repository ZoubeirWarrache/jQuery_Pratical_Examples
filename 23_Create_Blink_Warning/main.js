$(function () {

    "use strict";

    function blinkWarning() {

        $('.warning').fadeOut(1000, function () {

            $(this).fadeIn(1000);

            blinkWarning();
        });
    }
    
    blinkWarning();
});