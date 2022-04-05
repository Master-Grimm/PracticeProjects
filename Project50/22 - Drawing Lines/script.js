const canvas = document.getElementById('canvas')
const increaseBtn = document.getElementById('increase')
const decreaseBtn = document.getElementById('decrease')
const increase4Btn = document.getElementById('increase4')
const decrease4Btn = document.getElementById('decrease4')
const sizeElem = document.getElementById('size')
const colorElem = document.getElementById('color')
const clearElem = document.getElementById('clear')

const ctx = canvas.getContext('2d')

let size = 5
let isPressed = false
colorElem.value = 'black'
let color = colorElem.value
let x
let y

canvas.addEventListener('mousedown', (e) => {
  isPressed = true
  x = e.offsetX
  y = e.offsetY
})

canvas.addEventListener('mouseup', (e) => {
  isPressed = false
  x = undefined
  y = undefined
})

canvas.addEventListener('mousemove', (e) => {
  if (isPressed) {
    const x2 = e.offsetX
    const y2 = e.offsetY
    drawCircle(x2, y2)
    drawLine(x, y, x2, y2)
    x = x2
    y = y2
  }
})

function drawCircle(x, y) {
  ctx.beginPath()
  ctx.arc(x, y, size, 0, Math.PI * 2)
  ctx.fillStyle = color
  ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.strokeStyle = color
  ctx.lineWidth = size * 2
  ctx.stroke()
}

function updateSizeOnScreen() {
  sizeElem.innerText = size
}

increaseBtn.addEventListener('click', () => {
  size += 1
  if (size > 100) {
    size = 100
  }
  updateSizeOnScreen()
})

decreaseBtn.addEventListener('click', () => {
  size -= 1
  if (size < 1) {
    size = 1
  }
  updateSizeOnScreen()
})

increase4Btn.addEventListener('click', () => {
  size += 4
  if (size > 100) {
    size = 100
  }
  updateSizeOnScreen()
})

decrease4Btn.addEventListener('click', () => {
  size -= 4
  if (size < 1) {
    size = 1
  }
  updateSizeOnScreen()
})

colorElem.addEventListener('change', (e) => (color = e.target.value))
clearElem.addEventListener('click', () =>
  ctx.clearRect(0, 0, canvas.width, canvas.height)
)
