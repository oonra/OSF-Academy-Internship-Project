const galleryDisplay    = new Swiper('.gallery-display__swiper', {
    direction       : "horizontal",
    loop            : false,
    slidesPerView   : 1,  
    simulateTouch   : false, 
});

const galleryThumbs     = new Swiper('.gallery-thumbs__swiper', {
    direction       : 'vertical',
    loop            : false,
    slidesPerView   : 100,
    slideToClickedSlide: true,
    spaceBetween    : 10,       // in px
    simulateTouch   : true, 
  });

  galleryDisplay.controller.control = galleryDisplay;
  galleryThumbs.controller.control  = galleryThumbs;