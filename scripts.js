// Initialize Swiper with coverflow effect
var swiper = new Swiper(".swiper", {
    effect: "coverflow",        
    grabCursor: true,           
    centeredSlides: true,     
    coverflowEffect: {
      rotate: 0,               
      stretch: 0,             
      depth: 100,            
      modifier: 4,           
      slideShadow: true       
    },
    loop: true,               
    navigation: {
      nextEl: ".swiper-button-next",  
      prevEl: ".swiper-button-prev",  
    },
    keyboard: {
      enabled: true,          
    },
    mousewheel: {
      thresholdDelta: 70,      
    },
    breakpoints: {
      560: {
        slidesPerView: 2.5,     
      },
      768: {
        slidesPerView: 3,     
      },
      1024: {
        slidesPerView: 3,       
      },
    },
  });
  