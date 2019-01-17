$(function () {

    "use strict";

    $('.add-tags').on('keyup', function (event) {

        var keyboardKey = event.keycode || event.which;

        if(keyboardKey === 188 && $(this).val() != ',') {

            var inputValue = $(this).val().slice(0, -1);

            $('.tags').append('<span class="tag-span"><i class="fas fa-times"></i> '+ inputValue +'</span>');

            $(this).val('');
        }
    });

    // remove tags
    $('.tags').on('click', '.tag-span i', function () {

        $(this).parent('.tag-span').fadeOut();
    });

});