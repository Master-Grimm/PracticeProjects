const imgsElem = document.getElementById('image-container')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')
const imgsArr = document.querySelectorAll('img')

let i = 0
let delay = 3000
let interval = setInterval(run, delay)

function changeImage() {
  if (i > imgsArr.length - 1) {
    i = 0
  } else if (i < 0) {
    i = imgsArr.length - 1
  }

  imgsElem.style.transform = `translateX(${-i * 400}px)`
}

function run() {
  i++
  changeImage()
}

function resetInterval() {
  clearInterval(interval)
  interval = setInterval(run, delay)
}

rightBtn.addEventListener('click', () => {
  i++
  changeImage()
  resetInterval()
})

leftBtn.addEventListener('click', () => {
  i--
  changeImage()
  resetInterval()
})
