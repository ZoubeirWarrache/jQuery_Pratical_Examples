$(function () {

    "use strict";

    $('.our-form input[type="file"]').wrap('<div class="custom-file"></div>');

    $('.custom-file').prepend('<span>Upload your file</span>');

    $('.custom-file').append('<i class="fas fa-upload"></i>');

    $('.our-form input[type="file"]').change(function () {

        $(this).prev('span').text($(this).val());
    });

});