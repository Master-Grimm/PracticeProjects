const boxesContainer = document.getElementById('boxes')
const btn = document.getElementById('btn')

const rows = 5
const columns = 5
const width = boxesContainer.clientWidth
const height = boxesContainer.clientHeight
let rowGap = height / rows
let columnGap = width / columns

btn.addEventListener('click', () => boxesContainer.classList.toggle('big'))

function createBoxes() {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const box = document.createElement('div')
      box.classList.add('box')
      box.style.backgroundPosition = `${-j * columnGap}px ${-i * rowGap}px`
      boxesContainer.appendChild(box)
    }
  }
}

createBoxes()
