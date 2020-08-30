


/* Show & Hide Menu */

$(document).ready(function() {

    'use strict';
    $('.navbar').css ({
        'margin-top': '-100px',
        'opacity': '0',
    });

    $(window).scroll(function() {

    // 'use strict';

        if ($(window).scrollTop() < 100) {

                $('.navbar').css ({
                    'margin-top': '-100px',
                    'opacity': '0',
                });

                $('.navbar-default').css({
                    'background-color': 'rgba(59, 59, 59, 0)',
                });

               
                
        } 
        else {
            $('.navbar').css ({
                'margin-top': '0px',
                'opacity': '1',
            });

            $('.navbar-default').css({
                'background-color': 'rgba(59, 59, 59, 0.7)',
                'border-color': '#444',
                'color': 'white',
            });

            $('.navbar-brand').css({
                'height': '35px',
            });

            $('.navbar-nav > li > a').css({

                'padding-top': '15px',

            });


        }

    });


});

// window.onscroll = function() {


//     var navbar = document.getElementById("navbar-defaul");
//     if(window.pageYOffset >= 260) {
        
//     navbar.style.display = "block";        
        
        

//     }
//     else 
//     navbar.style.display ="none";   
// }


/*         Smooth Scrolling     */

$(document).ready(function(){

    'use-strict';

    $('.nav-item, #scroll-to-top')
  // Remove links that don't actually link to anything
  .not('.screens')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


});



/*  Active menu on Click on each item */

$(document).ready(function(){
    'use-strict';
    
    $(".navbar-nav li a").click(function(){

        'use-strict';
        $(".navbar-nav li a").parent().removeClass("active");

        $(this).parent().addClass("active");

    });

});

// highlight menue item on scroll


$(document).ready(function(){
    'use-strict';

    $(window).scroll(function() {

        'use-strict';

        $("section").each(function(){

        'use-strict';
        var attrb = $(this).attr("id"); // About contact Download..

        var hei = $(this).outerHeight();

        var grttop = $(this).offset().top - 70;


        if ($(window).scrollTop() > grttop && $(window).scrollTop() < grttop + hei) {

            $(".navbar-nav li a[href='#" + attrb + "']").parent().addClass("active");
            
        

            }else 
            $(".navbar-nav li a[href='#" + attrb + "']").parent().removeClass("active");



        });

    });
});


// auto padding to header 

$(document).ready(function(){
    'use-strict';
    setInterval(function(){
        'use-strict';

        var windowHeight = $(window).height();

        var containerHeight = $(".header-container").height();

        var paddTop = windowHeight - containerHeight;

        $(".header-container").css({
            'padding-top': Math.round(paddTop / 2) + "px",
            'padding-bottom': Math.round(paddTop / 2) + "px",

        }, 1000)

    })

});

// Counter


$(document).ready(function(){

    $('.counter-num').counterUp({
        delay: 10,
        time: 4000,
    });

});


// Add animation init

$(document).ready(function() {


    new WOW().init();
    

});


// SLider for the Screen Section 
$(document).ready(function() {

    $('.bxslider').bxSlider({
        slideWidth: 292.5,
        auto: true,
        minSlides: 1, 
        maxSlides: 5, 
        slideMargin: 50
      });

});

