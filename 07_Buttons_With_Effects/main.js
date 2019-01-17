$(function () {

    "use strict";

    // First button
    $('.from-left').hover(function(){

        $(this).find('span').eq(0).animate({
            width: '100%'
        }, 200);

    }, function() {

        $(this).find('span').eq(0).animate({
            width: 0
        }, 200);
    });

    // Second button
    $('.from-top').hover(function(){

        $(this).find('span').eq(0).animate({
            height: '100%'

        }, 200);

    }, function() {

        $(this).find('span').eq(0).animate({
            height: 0
        }, 200);
    });

    // Third button
    $('.brd-from-left').hover(function(){

        $(this).find('span').eq(0).animate({
            width: '100%'
        }, 200);

    }, function() {

        $(this).find('span').eq(0).animate({
            width: 0
        }, 200);
    });

    // Fourth button
    $('.brd-from-top').hover(function(){

        $(this).find('span').eq(0).animate({
            height: '100%'
        }, 200);

    }, function() {

        $(this).find('span').eq(0).animate({
            height: 0
        }, 200);
    });
});