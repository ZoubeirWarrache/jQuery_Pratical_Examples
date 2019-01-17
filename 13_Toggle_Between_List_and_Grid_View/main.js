$(function () {

    "use strict";

    // Change between list and grid view
    $('.view-option i').on('click', function() {
        
        $(this).addClass('active').siblings().removeClass('active');

        $('.products').removeClass('grid list').addClass($(this).data('view'));

    });

    // on click the icon plus show the p description
    $('.grid .product i').on('click', function () {

        $(this).toggleClass('fa-plus fa-minus').next('p').slideToggle();
    });

});