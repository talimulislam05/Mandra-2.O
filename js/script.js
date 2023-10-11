$(document).ready(function(){
    var mixer = mixitup('#mix_it_up', {
        animation: {
            duration: 300
        }
    });

    $(".count").countMe(5,10);
    $(".counter").countMe(5,15);
    $(".count2").countMe(5,20);

    AOS.init();

    $('.js-preloader').preloadinator({
        // scroll:false,
        // minTime: 400,
        // animation:'fadeIn',
        animationDuration: 400
    
    
    
    });



















})


