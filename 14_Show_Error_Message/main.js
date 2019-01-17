$(function () {

    "use strict";

    // show error message
    $('.error-message').each(function () {
        $(this).animate({
            right : 0
        }, 1200, function() {
            $(this).delay(2000).fadeOut();
        });
    });

});