$(function () {

    "use strict";

    $('.show-popup').on('click', function () {

        $('.' + $(this).data('popup')).fadeIn(300);
    });

    $('.popup').on('click', function () {
        
        $(this).fadeOut(300);
    });

    $('.popup .inner').on('click', function (e) {

        e.stopPropagation();
    });

    $('.popup .inner .close').click(function (e) {

        e.preventDefault();

        $(this).parentsUntil('.popup').parent().fadeOut(300);
    });

});