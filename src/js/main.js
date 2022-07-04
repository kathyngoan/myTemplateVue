(function ($) {
    "use strict"; // Start of use strict
    //Main menu top effect
    $(window).scroll(function () {
        var height = $('header').height();
       
        if ($(this).scrollTop() > height) {
           $('header').addClass('scrolled')
        }
        else {
           $('header').removeClass('scrolled');
        }
     });

    //Toogle menu mobile -> lock scroll body
    function lockScrollBody() {
            if($('body').hasClass('lock-scroll')) {
                $('body').removeClass('lock-scroll')
            } else {
                $('body').addClass('lock-scroll')
            }
    }
    $(document).on('click','#button-collapse,.navbar-close-toggler', function(){
        lockScrollBody()
    });
    $(document).on('click','header #button-collapse', function(){
        $('.footerMenuMobileToogle').addClass('active');
    });
    $(document).on('click','header .navbar-close-toggler', function(){
        $('.footerMenuMobileToogle').removeClass('active');
    });
    // News Slider
    var newsSlideshow = $('.js-news-carousel');
    newsSlideshow.owlCarousel({
        loop: true,
        touchDrag: true,
        mouseDrag: true,
        margin: 25,
        stagePadding: $(window).width() <= 767 ? 70 : 0,
        nav: false,
        items: 1,
        dots: true,
        autoplay: false,
        animateOut: 'fadeOut',
        autoplayTimeout: 3000,
        navText: [
            '<span class="bg-white text-primary"><i class="fa fa-arrow-left"></i></span>',
            '<span class="bg-white text-primary"><i class="fa fa-arrow-right"></i></span>'
        ],
        responsive: {
            0: {
                items: 1
            },
            1000: {
                items: 4
            },
            1600: {
                items: 4
            },
            1920: {
                items: 4
            }
        }
    });

    // Slider multi items use for the same setting
    var owlSlideshow = $('.js-multi-carousel');
    owlSlideshow.owlCarousel({
        loop: true,
        touchDrag: true,
        mouseDrag: true,
        margin: 25,
        stagePadding: $(window).width() <= 767 ? 50 : 150,
        nav: true,
        dots: true, 
        items: 1,
        dots: true,
        autoplay: false,
        animateOut: 'fadeOut',
        autoplayTimeout: 3500,
        navText: [
            '<span class="bg-primary p-3 text-white"><img class="mw-100" src="./img/icon-arrow-right-white.svg" alt=""></span>',
            '<span class="bg-primary p-3 text-white "><img class="mw-100" src="./img/icon-arrow-right-white.svg" alt=""></span>'
        ]
    });
    AOS.init({
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
  
        disable: function () {
            var maxWidth = 1024;
            return window.innerWidth < maxWidth;
          }
    });
    
    var rellax = new Rellax('.rellax',{
        speed: -2,
        center: true,
        wrapper: null,
        round: false,
        vertical: true,
        horizontal: false
    });

    // Toggle the side navigation
    $(".js_sidebarToggle, .menu-wrapper-overlay").on('click', function (e) {
        $("body").toggleClass("sidebar-toggled");
        if ($(".menu-wrapper-overlay").length == 0) {
            $("body").append('<div class="menu-wrapper-overlay"  data-toggle="collapse" data-target="#navbarResponsive"></div>');
        } else {
            $(".menu-wrapper-overlay").remove();
        }
    });
    $("body").on('click', '.menu-wrapper-overlay', function (e) {
        $("body").toggleClass("sidebar-toggled");
        $(this).remove();
    });

})(jQuery); // End of use strict

