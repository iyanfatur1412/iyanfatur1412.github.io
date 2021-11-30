const btnNavs = document.querySelector(".toggle"),
      navs = document.querySelector(".navs"),
      carouselItem = document.querySelectorAll(".carousel-item"),
      btnPrev = document.querySelector(".prev"),
      btnNext = document.querySelector(".next");


btnNavs.addEventListener("click", function() {
    navs.classList.toggle("show-navs");
})

let index = 1;
showCarousel();

function nextCarousel() {
    index++;
    if(index>carouselItem.length) {
        index = 1;
    }
    showCarousel()
}

btnNext.addEventListener("click", nextCarousel);

function prevCarousel() {
    index--;
    if(index < 1) {
        index = carouselItem.length;
    }
    showCarousel()
}

btnPrev.addEventListener("click", prevCarousel);

function showCarousel() {
    for(let i=0; i<carouselItem.length; i++) {
        carouselItem[i].style.display = "none";
    }
    carouselItem[index-1].style.display = "block";
}