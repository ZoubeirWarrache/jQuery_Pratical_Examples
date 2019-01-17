$(function () {

    "use strict";

    $('.change-colors li').on('click', function() {
        
        $('body').attr('data-special-color', $(this).data('color'));
    });

});