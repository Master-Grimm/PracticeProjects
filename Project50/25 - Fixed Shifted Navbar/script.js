const fixedNav = document.querySelector('.fixedNav')
window.addEventListener('scroll', fixNav)

function fixNav() {
  if (window.scrollY > fixedNav.offsetHeight + 20) {
    fixedNav.classList.add('active')
  } else {
    fixedNav.classList.remove('active')
  }
}
