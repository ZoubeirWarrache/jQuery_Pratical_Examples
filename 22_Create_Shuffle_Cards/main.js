$(function () {

    "use strict";

    var zIndex = 0;
    
    $('.card').on('click', function () {

        $(this).animate({

            left: '20%'

        }, 600, function () {

            zIndex--;
            $(this).css('z-index', zIndex);

        }).animate({

            left: $(this).css('left')

        }, 600);
    });
});