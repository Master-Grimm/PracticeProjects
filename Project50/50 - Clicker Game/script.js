const welcome = document.getElementById('welcome')
const diff_btns = document.querySelectorAll('.diff-btn')
const game = document.getElementById('game')
const timeEl = document.getElementById('time')
const scoreEl = document.getElementById('score')
const message = document.getElementById('message')

const stopTime = 20
let seconds = 0
let score = 0
let scoreShow = 0
let selected_target = {}
let diffuculty = 0

diff_btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const img = btn.querySelector('img')
    const src = img.getAttribute('src')
    const alt = img.getAttribute('alt')
    selected_target = { src, alt }
    welcome.classList.add('hide')
    setTimeout(createTarget, 1000)
    startGame()
  })
})

function startGame() {
  setInterval(increaseTime, 1000)
  setInterval(endGame, 1000)
}

function increaseTime() {
  let sec = seconds
  sec = sec < 10 ? `0${sec}` : sec
  timeEl.innerHTML = `Time: ${sec} sec`
  seconds++
}

function endGame() {
  if (seconds > stopTime) {
    if (score > 80) {
      gz()
      message.innerHTML = `
    <h2>
      Well done! <br />
      You managed to get ${score} points!
    </h2>

    <button id="reload" class="reload" onclick="location.reload()">
      Play Again
    </button>
`
    } else {
      message.innerHTML = `
    <h2>
      You managed to get ${score} points!
    </h2>

    <button id="reload" class="reload" onclick="location.reload()">
      Play Again
    </button>
`
    }

    message.classList.add('show')
  }
}

function createTarget() {
  const target = document.createElement('div')
  target.classList.add('target')
  const { x, y } = getRandomLocation()
  target.style.top = `${y}px`
  target.style.left = `${x}px`
  target.innerHTML = `<img src="${selected_target.src}" alt="${
    selected_target.alt
  }" style="transform: rotate(${Math.random() * 360}deg)" />`

  target.addEventListener('click', clickTarget)
  diffuculty = +selected_target.alt
  game.appendChild(target)
}

function getRandomLocation() {
  const width = window.innerWidth
  const height = window.innerHeight
  const x = Math.random() * (width - 180) + 110
  const y = Math.random() * (height - 180) + 110
  return { x, y }
}

function clickTarget() {
  increaseScore()
  this.classList.add('clicked')
  setTimeout(() => this.remove(), 2000)
  addtargets()
}

function addtargets() {
  let timeout = 1000 / (5 - diffuculty)
  setTimeout(createTarget, timeout)
  setTimeout(createTarget, timeout * 1.5)
}

function increaseScore() {
  score = score + diffuculty
  if (score < 10) scoreShow = `00${score}`
  else if (score < 100) {
    scoreShow = `0${score}`
  } else {
    scoreShow = score
  }
  scoreEl.innerHTML = `Score: ${scoreShow}`
}

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

function gz() {
  confetti({
    particleCount: 70,
    angle: 60,
    spread: 80,
    origin: { x: 0 },
    colors: colors,
  })
  confetti({
    particleCount: 70,
    angle: 120,
    spread: 80,
    origin: { x: 1 },
    colors: colors,
  })

  setTimeout(() => {
    confetti.reset()
  }, 3000)
}
