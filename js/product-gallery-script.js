const galleryDisplay    = new Swiper('.gallery-display__swiper', {
    pagination: {
        el              : ".swiper-pagination",
        type            : "bullets",
        clickable       : true,
    },
    direction       : "horizontal",
    effect          : "slide",
    loop            : false,
    simulateTouch   : true, 
});