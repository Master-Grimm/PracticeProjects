const progress = document.getElementById('progress')
const back = document.getElementById('back')
const next = document.getElementById('next')
const start = document.getElementById('start')
const end = document.getElementById('end')
const squares = document.querySelectorAll('.square')

let currentActive = 1

next.addEventListener('click', () => {
  currentActive++

  if (currentActive > squares.length) {
    currentActive = squares.length
  }

  update()
})

back.addEventListener('click', () => {
  currentActive--

  if (currentActive < 1) {
    currentActive = 1
  }

  update()
})

start.addEventListener('click', () => {
  currentActive = 1

  if (currentActive > squares.length) {
    currentActive = squares.length
  }
  back.disabled = true
  next.disabled = false
  update()
})

end.addEventListener('click', () => {
  currentActive = squares.length

  if (currentActive > squares.length) {
    currentActive = squares.length
  }
  back.disabled = false
  next.disabled = true
  update()
})

function update() {
  squares.forEach((square, i) => {
    if (i < currentActive) {
      square.classList.add('active')
    } else {
      square.classList.remove('active')
    }
  })

  const actives = document.querySelectorAll('.active')

  progress.style.width =
    ((actives.length - 1) / (squares.length - 1)) * 100 + '%'

  if (currentActive === 1) {
    back.disabled = true
  } else if (currentActive === squares.length) {
    next.disabled = true
  } else {
    back.disabled = false
    next.disabled = false
  }
}
