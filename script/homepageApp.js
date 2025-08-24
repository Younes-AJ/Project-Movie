// Menu
const navElem = document.querySelector('.nav')
const mySwiperElem = document.querySelector('.mySwiper')

window.addEventListener('scroll', () => {
  const mySwiperElemTop = mySwiperElem.getBoundingClientRect().top + window.scrollY
  const scrollPosition = window.scrollY

  if (scrollPosition >= mySwiperElemTop + 600) {
    navElem.classList.add('sticky')
  } else {
    navElem.classList.remove('sticky')
  }
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



    const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
          progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
      }
    });

    // var swiper = new Swiper(".mySwiper", {
    //   slidesPerView: 1,
    //   spaceBetween: 30,
    //   loop: true,
    //   pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //   },
    //   navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    //   },
    // });


// ADV Search
const advBtn = document.querySelector('.adv__btn')
const advContnt = document.querySelector('.adv__content')
const advTitle = document.querySelector('.adv__title')

advBtn.addEventListener('click', function(){
  advTitle.classList.toggle('open')
  advContnt.classList.toggle('adv__content-open')
  advBtn.classList.toggle('active')
})

const advDubleBtn = document.querySelector('.adv-form__dublebtn')
const advDubleCircle = document.querySelector('.adv-form__duble-btn')

advDubleBtn.addEventListener('click', function (){
  advDubleCircle.style.width = (advDubleCircle.style.width === '31px') ? '13px' : '31px'
})

const advSubtitleBtn = document.querySelector('.adv-form__subtitle-btn')
const advSubtitleCircle = document.querySelector('.adv-form__subtitle-btn')

advSubtitleBtn.addEventListener('click', function (){
  advSubtitleCircle.style.opacity = (advSubtitleCircle.style.opacity === '1') ? '0' : '1'
})


var movieSwiper = new Swiper(".movieSwiper", {
  spaceBetween: 20,
  slidesPerView: 5,
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


var movie__barSwiper = new Swiper(".movie__barSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// Footer Scroll
document.getElementById('scrollTop').addEventListener('click', function (event) {
  event.preventDefault()
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})