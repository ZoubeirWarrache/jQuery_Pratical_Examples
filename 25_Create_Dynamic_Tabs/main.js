$(function () {

    "use strict";

    $('.dynamic-tabs .tabs-list li').on('click', function () {

        $(this).addClass('active').siblings().removeClass('active');
        $('.dynamic-tabs .content-list > div').hide();
        $($(this).data('content')).fadeIn();
    });
});