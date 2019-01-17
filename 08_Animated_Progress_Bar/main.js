$(function () {

    "use strict";

    $('.animated-progress span').each(function () {

        $(this).animate({
            
            // Width of span from attribute data-progress
            width: $(this).attr('data-progress') + '%'

        }, 1500, function () {

            // text of span from attribute data-progress
            $(this).text($(this).attr('data-progress')+'%');
        });
    });

});