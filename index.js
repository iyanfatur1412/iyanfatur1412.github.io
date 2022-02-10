// let viewResponsive = 2;

// if(document.body.offsetWidth >= 1024) {
//     viewResponsive = 1;
// }else if(document.body.offsetWidth >= 640) {
//     viewResponsive = 3;
// }

// const swiper = new Swiper('.swiper', {
//     loop: true,
//     slidesPerView: viewResponsive,
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     autoplay: false
// });
// const sw = document.querySelector(".swiper").swiper;
// sw.slideNext();

const profil = document.querySelector(".profil");
const about = document.querySelector(".about");
const contact = document.querySelector(".contact");
let slideBottom = "slideBottom .9s ease-in forwards"

if(window.innerWidth < 1024) {
    window.addEventListener("scroll", function() {
        if(this.scrollY >= (profil.scrollHeight - 100)) {
            about.style.animation = slideBottom;
        }
        if(this.scrollY >= (profil.scrollHeight + about.scrollHeight + 50)) {
            contact.style.animation = slideBottom;
        }
    })
}