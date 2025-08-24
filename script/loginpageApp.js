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


// Login
const loginElem = document.querySelector('#login')
const membershipElem = document.querySelector('#membership')
const membershipFormsElem = document.querySelector('.membership__forms')
const loginFormsElem = document.querySelector('.login__forms')

function switchForms(showForm, hideForm) {
  hideForm.classList.remove('forms--active')

  setTimeout( () => {
    hideForm.style.display = 'none'
  }, 400)

  showForm.style.display = 'block'
  setTimeout( () => {
    showForm.classList.add('forms--active')
  }, 10)
}

loginElem.addEventListener('click', () => {
  loginElem.classList.add('membership__item--active')
  membershipElem.classList.remove('membership__item--active')
  switchForms(loginFormsElem, membershipFormsElem)
})

membershipElem.addEventListener('click', () => {
  membershipElem.classList.add('membership__item--active')
  loginElem.classList.remove('membership__item--active')
  switchForms(membershipFormsElem, loginFormsElem)
})