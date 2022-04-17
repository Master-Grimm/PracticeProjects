const numbers = document.querySelectorAll('.numbers span')
const numCont = document.querySelector('.numers-container')
const endMsg = document.querySelector('.end')
const replay = document.querySelector('.replay')

const ult = numbers.length - 1
const penult = numbers.length - 2

runAnimation()

function resetDOM() {
  numCont.classList.remove('nowYouDont')
  endMsg.classList.remove('nowYouSeeMe')

  numbers.forEach((num) => {
    num.classList.value = ''
  })

  numbers[0].classList.add('in')
}

function runAnimation() {
  numbers.forEach((num, i) => {
    num.addEventListener('animationend', (e) => {
      if (e.animationName === 'goIn' && i !== ult) {
        num.classList.remove('in')
        num.classList.add('out')
      } else if (e.animationName === 'goOut' && i == penult) {
        num.nextElementSibling.classList.add('in')
        go()
      } else if (e.animationName === 'goOut' && i !== ult) {
        num.nextElementSibling.classList.add('in')
      } else {
        numCont.classList.add('nowYouDont')
        endMsg.classList.add('nowYouSeeMe')
      }
    })
  })
}

replay.addEventListener('click', () => {
  resetDOM()
  runAnimation()
})

const colors = [
  '#000000',
  '#ffffff',
  '#ff0000',
  '#00ffff',
  '#00ff00',
  '#ff00ff',
  '#0000ff',
  '#ffff00',
]

function go() {
  confetti({
    particleCount: 50,
    angle: 60,
    spread: 55,
    origin: { x: 0 },
    colors: colors,
  })
  confetti({
    particleCount: 50,
    angle: 120,
    spread: 55,
    origin: { x: 1 },
    colors: colors,
  })
}
