const body = document.body
const pics = document.querySelectorAll('.pic')
const left = document.getElementById('left')
const right = document.getElementById('right')

let activePic = 0

function setBg() {
  body.style.backgroundImage = pics[activePic].style.backgroundImage
}

function setPic() {
  pics.forEach((pic) => pic.classList.remove('active'))
  pics[activePic].classList.add('active')
}

setBg()

left.addEventListener('click', () => {
  activePic--
  if (activePic < 0) {
    activePic = pics.length - 1
  }
  setBg()
  setPic()
})

right.addEventListener('click', () => {
  activePic++
  if (activePic > pics.length - 1) {
    activePic = 0
  }
  setBg()
  setPic()
})
