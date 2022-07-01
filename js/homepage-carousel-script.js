/* --------------------------------------------------------------- */
/* --- Carousel slide customizations ----------------------------- */
/* --------------------------------------------------------------- */


const swiper = new Swiper(".swiper", {
    pagination: {
        el              : ".swiper-pagination",
        type            : "bullets",
        clickable       : true,
    },
    autoplay: {
        delay           : 10000,     //Auto transitions to next slide after 10 sec
    },
    direction       : "horizontal",
    effect          : "slide",
    loop            : false,
    simulateTouch   : false,        //Disables swiping by touching on images
});

/*  
    Swiper.js originally creates duplicates of slides when "loop:true", which causes
    the text aligning to operate incorrectly. The func below prevents the duplicates
    and creates the loop manually.
    Basically; if there is any more slide left, it swipes to that next one, if no sl-
    ides left ahead, goes back to the first slide.
*/

function next() {
    if (data[swiper.realIndex + 1]) {
        swiper.slideNext(1000)
    } else {
        swiper.slideToLoop(1000)
    }
};

/* --- Aligning the texts inside image slides -------------------- */

const texts     = document.getElementsByClassName("inslide-texts");
const margins   = ["16px 0 0 0", "16px auto 0 auto", "16px 0 0 auto"]
const alignings = ["left", "center", "right"];

for (let i=0 ; i<texts.length ; i++) {
    texts[i].style.textAlign  = alignings[i];
    texts[i].style.margin     = margins[i];
};