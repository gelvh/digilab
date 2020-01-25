//slider-homepage

var SliderSS = $('#home_');

    SliderSS.owlCarousel({
      animateIn: 'bonuceIn',
      animateOut: 'fadeOut',
      rtl: true,
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      Dots: false
    });


    //slider-projects
    
    var Sliderpro = $('#slider-projects');

    Sliderpro.owlCarousel({
      rtl: true,
      margin: 33,
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      dotsEach: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        660: {
          items: 2,
        },
        768: {
          items: 3,
        }
      }
    });