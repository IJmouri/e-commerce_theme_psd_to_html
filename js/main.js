(function ($) {
"use strict";

jQuery('#mobile-menu').meanmenu({
    meanMenuContainer: '.mobile-menu',
    meanScreenWidth: "767"
    });
$('.slider-active').owlCarousel({
    loop:true,
    nav: true,
    navText:['PREV', 'NEXT'],
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$('.product-active').owlCarousel({
    loop:true,
    nav: true,
    margin: 30,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    navText:['PREV', 'NEXT'],
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:4
        }
    }
})
$('.brand-active').owlCarousel({
    loop:true,
    nav: false,
    margin: 30,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    navText:['PREV', 'NEXT'],
    responsive:{
        0:{
            items:3
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }
})



})(jQuery);

