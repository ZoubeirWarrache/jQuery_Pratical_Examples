$(function () {
    "use strict";

    $('.navbar-links li a').on('click', function(e){

        e.preventDefault();

        // First Method
        $(this).addClass('active').parent().siblings().find('a').removeClass('active');

        // Second Method
        /*
        $('.navbar-links a').removeClass('active');
        $(this).addClass('active');
        */
    });

});