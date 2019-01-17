$(function () {
    "use strict";

    $('body').css('padding-top', $('nav').innerHeight());

    $('.navbar-links li a').on('click', function(e){

        e.preventDefault();

        // Scroll To Element
        $('html, body').animate({

            scrollTop: $('#' + $(this).data('scroll')).offset().top - $('nav').innerHeight()

        },1000);

        //  Add Class 'active' To Active links
        // First Method
        $(this).addClass('active').parent().siblings().find('a').removeClass('active');

        // Second Method
        /*
        $('.navbar-links a').removeClass('active');
        $(this).addClass('active');
        */
    });

    // Sync links with sections 
    $(window).scroll(function () {
	
        $('.block').each(function () {
            
            if ( $(window).scrollTop() >= ($(this).offset().top )-$('nav').innerHeight()) {
                
                if( ! $(this).hasClass('active') ) {
    
                    var blockID = $(this).attr('id');
                    
                    $('.navbar-links a').removeClass('active');
        
                    $('.navbar-links li a[data-scroll="' + blockID + '"]').addClass('active');
                
                }
            }
        });
    });

});