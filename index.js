let viewResponsive = 2;

if(document.body.offsetWidth >= 1024) {
    viewResponsive = 1;
}else if(document.body.offsetWidth >= 640) {
    viewResponsive = 3;
}

const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: viewResponsive,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: false
});
const sw = document.querySelector(".swiper").swiper;
sw.slideNext();