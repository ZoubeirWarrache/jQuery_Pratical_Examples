$(function () {

    "use strict";

    var scrollTopBtn = $('.scroll-top');

    // Show & hide scroll-top button 
    if ($(window).scrollTop() >= 800) {

        scrollTopBtn.fadeIn(200);

    } else {
        scrollTopBtn.fadeOut(200);
    }

    $(window).scroll(function () {

        if ($(window).scrollTop() >= 800) {

            if(scrollTopBtn.is(':hidden')) {
                scrollTopBtn.fadeIn(200);
            }
            
        } else {
    
            if(scrollTopBtn.is(':visible')){
                scrollTopBtn.fadeOut(200);
            }
        }
    });

    // on click scroll to top
    scrollTopBtn.on('click', function () {

        $('html, body').animate({
            scrollTop : 0
        }, 1000);
    });


});