const board = document.getElementById('board')
const onBtn = document.getElementById('all-off')
const offBtn = document.getElementById('all-on')
const btn200 = document.getElementById('ch1')
const btn400 = document.getElementById('ch2')
const btn600 = document.getElementById('ch3')
const starter = document.getElementById('starter')
const boardElem = document.getElementById('board-container')

const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
let lamps = 400 //default

function drawBoard() {
  for (let i = 0; i < lamps; i++) {
    const lamp = document.createElement('div')
    lamp.classList.add('lamp')
    lamp.classList.add('off')

    lamp.addEventListener('mouseover', () => setColor(lamp))

    lamp.addEventListener('mouseout', () => turnOn(lamp))

    board.appendChild(lamp)
  }
}

function setColor(element) {
  const color = getRandomColor()
  element.style.background = color
}

function turnOn(element) {
  element.style.background = '#e5e5e5'
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}

onBtn.addEventListener('click', () => {
  for (let i = 0; i < lamps; i++) {
    board.firstChild.remove()
  }
  for (let i = 0; i < lamps; i++) {
    const lamp = document.createElement('div')
    lamp.classList.add('lamp')
    lamp.classList.add('off')

    lamp.addEventListener('mouseover', () => setColor(lamp))

    lamp.addEventListener('mouseout', () => turnOn(lamp))

    board.appendChild(lamp)
  }
})

offBtn.addEventListener('click', () => {
  for (let i = 0; i < lamps; i++) {
    board.firstChild.remove()
  }
  for (let i = 0; i < lamps; i++) {
    const lamp = document.createElement('div')
    lamp.classList.add('lamp')
    lamp.classList.add('on')

    lamp.addEventListener('mouseover', () => setColor(lamp))

    lamp.addEventListener('mouseout', () => turnOn(lamp))

    board.appendChild(lamp)
  }
})

btn200.addEventListener('click', () => {
  starter.classList.add('shrink')
  setTimeout(() => starter.classList.add('hide'), 800)
  lamps = 200
  drawBoard()
  setTimeout(() => boardElem.classList.remove('hide'), 1000)
})

btn400.addEventListener('click', () => {
  starter.classList.add('shrink')
  setTimeout(() => starter.classList.add('hide'), 800)
  lamps = 400
  drawBoard()
  setTimeout(() => boardElem.classList.remove('hide'), 1000)
})

btn600.addEventListener('click', () => {
  starter.classList.add('shrink')
  setTimeout(() => starter.classList.add('hide'), 800)
  lamps = 600
  drawBoard()
  setTimeout(() => boardElem.classList.remove('hide'), 1000)
})
