$(function () {

    "use strict";

    var placeholder = '';

    $('[placeholder]').focus(function () {

        placeholder = $(this).attr('placeholder');
        
        $(this).attr('placeholder', '');

    }).blur(function () {

        $(this).attr('placeholder', placeholder);
    });

});