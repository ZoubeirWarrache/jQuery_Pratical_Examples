$(function () {

    "use strict";

    // Add asterisk to all required filed
    $('<span class="asterisk">*</span>').insertBefore(':input[required]');


    // Customize asterisk with jQuery

    $('.asterisk').parent('div').css('position', 'relative');

    $('.asterisk').each(function () {
        
        $(this).css({
            'position': 'absolute', 
            'top' : 13, 
            'left' : $(this).parent('div').find(':input').innerWidth() + 30,
            'color': '#c30c0c'
        });
    });

});