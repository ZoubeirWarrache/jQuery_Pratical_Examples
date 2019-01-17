$(function () {

    "use strict";

    $('.thumbnails img').on('click', function() {

        $(this).addClass('selected').siblings().removeClass('selected');

        $('.master-img img').hide().attr('src', $(this).attr('src')).fadeIn(300);
    });

    // next button
    $('.master-img .next').on('click', function () {

        if($('.thumbnails .selected').is(':last-child')) {

            $('.thumbnails img').eq(0).click();

        } else {
            $('.thumbnails .selected').next().click();
        }
    });

    // prev button
    $('.master-img .prev').on('click', function () {

        if($('.thumbnails .selected').is(':first-child')) {

            $('.thumbnails img:last').click();

        } else {
            $('.thumbnails .selected').prev().click();
        }
    });

    // dynamic width and margin right for images
    var numOfThumb = $('.thumbnails').children().length,   // num of images
        thumbMargin = 1, // 1% margin-right of images
        totalThumbMargin = (numOfThumb - 1) * thumbMargin, // total of margin-right of images
        widthOfThumb = (100 - totalThumbMargin) / numOfThumb;  // width of each image

    $('.thumbnails img').css({
        'width' : widthOfThumb + '%',
        'margin-right' : thumbMargin + '%'
    });

});