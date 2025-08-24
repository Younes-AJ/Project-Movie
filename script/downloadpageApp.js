// Movie Slide
var movieSwiper = new Swiper(".movieSwiper", {
  slidesPerView: 5,
  spaceBetween: 30,
  breakpoints: {
    0: {
      slidesPerView: 2
    },
    576: {
      slidesPerView: 3
    },
    768: {
      slidesPerView: 4
    },
    1200: {
      slidesPerView: 5
    },
    1400: {
      slidesPerView: 5
    },
  },
  loop: true,
  navigation: {
    nextEl: ".movie-swiper-button-next",
    prevEl: ".movie-swiper-button-prev",
  },
});


// Sliding Menu
const slideMenu = document.querySelector('.nav-sliding-wrapper')
const openMenu = document.querySelector('#openMenu')
const closeMenu =document.querySelector('#closeMenu')

openMenu.addEventListener('click', () => {
  slideMenu.classList.add('active')
})
closeMenu.addEventListener('click', () => {
  slideMenu.classList.remove('active')
})


// Download Section BTN
document.querySelectorAll('.download__movie .download__icon').forEach(icon => {
    icon.addEventListener('click', () => {
        // const downloadMovie = document.querySelector('.download__movie')
        const partWrapper = icon.closest('.download__movie').nextElementSibling
        const downloadMovie = icon.closest('.download__movie')
        icon.classList.toggle('active')
        partWrapper.classList.toggle('download__part-wrapper-open')
        downloadMovie.classList.toggle('download__movie-open')
    })
})

document.querySelectorAll('.download__part .download__icon').forEach(icon => {
    icon.addEventListener('click', () => {
        const barsWrapper = icon.closest('.download__part').nextElementSibling
        icon.classList.toggle('active')
        barsWrapper.classList.toggle('download__bars-open')
    })
})


// Footer Scroll
document.getElementById('scrollTop').addEventListener('click', function (event) {
  event.preventDefault()
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})