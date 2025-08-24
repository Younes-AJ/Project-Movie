// Menu
const navElem = document.querySelector('.nav')
const mySwiperElem = document.querySelector('.header')

window.addEventListener('scroll', () => {
  const mySwiperElemTop = mySwiperElem.getBoundingClientRect().top + window.scrollY
  const scrollPosition = window.scrollY

  if (scrollPosition >= mySwiperElemTop + 100) {
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


// Footer Scroll
document.getElementById('scrollTop').addEventListener('click', function (event) {
  event.preventDefault()
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})