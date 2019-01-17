$(function () {

    "use strict";

    $('.show-popup').on('click', function () {

        $('.popup').fadeIn(300);
    });

    $('.popup').on('click', function () {
        
        $(this).fadeOut(300);
    });

    $('.popup .inner').on('click', function (e) {

        e.stopPropagation();
    });

    $('.popup .inner .close').click(function (e) {

        e.preventDefault();

        $('.popup').fadeOut(300);
    });

});