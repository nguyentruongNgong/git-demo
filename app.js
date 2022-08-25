$(document).ready(function(){
    $('.slider-img').slick({
   
    arrows: true,
    speed:1000,
    prevArrow: `<button type='button' class='slick-prev slick-arrow'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
    nextArrow: `<button type='button' class='slick-next slick-arrow'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
               arrows:false
            }
        },
        {
            breakpoint: 600,
            settings: {
                arrows:false
                
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows:false
            }
        }

  ]
    });
  });