$(function () {

    "use strict";

    var fixedMenu = $('.fixed-menu');

    $('.fixed-menu .icon').on('click', function () {

        fixedMenu.toggleClass('is-visible');

        if(fixedMenu.hasClass('is-visible')) {

            fixedMenu.animate({

                left: 0

            }, 500);

        } else {

            fixedMenu.animate({

                left: - fixedMenu.innerWidth()
                
            }, 500);
        }
    });
});