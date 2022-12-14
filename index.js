<<<<<<< HEAD
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

const profil = document.querySelector(".profil");
const about = document.querySelector(".about");
const contact = document.querySelector(".contact");
let slideBottom = "slideBottom .9s ease-in forwards"

if(window.innerWidth < 1024) {
    window.addEventListener("scroll", function() {
        if(this.scrollY >= (profil.scrollHeight - 100)) {
            about.style.animation = slideBottom;
            // console.log("ok")
        }
        if(this.scrollY >= (profil.scrollHeight + about.scrollHeight + 50)) {
            contact.style.animation = slideBottom;
        }
    })
=======
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

const profil = document.querySelector(".profil");
const about = document.querySelector(".about");
const contact = document.querySelector(".contact");
let slideBottom = "slideBottom .9s ease-in forwards"

if(window.innerWidth < 1024) {
    window.addEventListener("scroll", function() {
        if(this.scrollY >= (profil.scrollHeight - 100)) {
            about.style.animation = slideBottom;
            // console.log("ok")
        }
        if(this.scrollY >= (profil.scrollHeight + about.scrollHeight + 50)) {
            contact.style.animation = slideBottom;
        }
    })
}



fetch("project.json")
.then(response => response.json())
.then(data => callEl(data))
.catch(error => {console.log(error)});

function callEl(data) {
    const colProject = document.querySelector(".col-project");
    let cards = "";
    data.forEach(item => cards += newEl(item));
    colProject.innerHTML = cards;
}

function newEl(data) {
    return `
    <div class="image">
        <a href="${data.link}" target="_blank"><img src="${data.src}" alt="${data.name}"></a>
    </div>
    `
>>>>>>> 8dc04a87f7968a96c0211b90c4ea79c46dab6186
}