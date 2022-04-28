const open_btn = document.querySelector('.open')
const close_btn = document.querySelector('.close')
const nav = document.querySelectorAll('.nav')

open_btn.addEventListener('click', () => {
  nav.forEach((nav_el) => nav_el.classList.remove('hide'))
})

close_btn.addEventListener('click', () => {
  nav.forEach((nav_el) => nav_el.classList.add('hide'))
})
