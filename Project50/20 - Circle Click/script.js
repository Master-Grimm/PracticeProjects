const buttons = document.querySelectorAll('.ripple')

buttons.forEach((button) => {
  button.addEventListener('click', function (e) {
    const x = e.clientX
    const y = e.clientY

    const btnTop = e.target.offsetTop
    const btnLeft = e.target.offsetLeft

    const innerX = x - btnLeft
    const innerY = y - btnTop

    const square = document.createElement('span')
    square.classList.add('square')
    square.style.top = innerY + 'px'
    square.style.left = innerX + 'px'

    this.appendChild(square)

    setTimeout(() => square.remove(), 750)
  })
})
