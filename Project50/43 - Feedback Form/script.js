const rate = document.querySelectorAll('.rate')
const ratesContainer = document.querySelector('.rates-container')
const sendBtn = document.querySelector('.send-btn')
const form = document.querySelector('.form')

let selectedRate = 'Neutral'

ratesContainer.addEventListener('click', (e) => {
  if (
    e.target.parentNode.classList.contains('rate') &&
    e.target.nextElementSibling
  ) {
    removeActive()
    e.target.parentNode.classList.add('active')
    selectedRate = e.target.nextElementSibling.innerHTML
  } else if (
    e.target.parentNode.classList.contains('rate') &&
    e.target.previousSibling &&
    e.target.previousElementSibling.nodeName === 'I'
  ) {
    removeActive()
    e.target.parentNode.classList.add('active')
    selectedRate = e.target.innerHTML
  }
})

sendBtn.addEventListener('click', (e) => {
  form.innerHTML = `
        <h3>Thank You!</h3>
        <h3>Your experience with us was: ${selectedRate}</h3>
        <h4>We'll use your feedback to improve our customer support</h4>
    `
})

function removeActive() {
  rate.forEach((e) => e.classList.remove('active'))
}
