$(function () {

    "use strict";

    $('[required]').blur(function () {

        if ($(this).val() == '') {
            
            $(this).next('span').fadeIn().delay(2000).fadeOut();
        }
    });

});