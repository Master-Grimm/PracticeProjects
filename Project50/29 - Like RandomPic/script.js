const likeMe = document.querySelector('.likeMe')
const times = document.querySelector('#times')
const topPic = document.querySelector('#topPic')
const next = document.getElementById('next')
const prev = document.getElementById('prev')

let maxLike = 0
let timesClicked = 0
let theme = [
  'Art',
  'Portrait',
  'Wildlife',
  'Architecture',
  'Animals',
  'Cartoons',
  'Computers',
  'Games',
  'Movies',
  'Vintage',
]

let i = 0

next.addEventListener('click', () => {
  maxLike < timesClicked ? (maxLike = timesClicked) : maxLike

  topPic.innerHTML = maxLike

  timesClicked = 0
  times.innerHTML = 0

  likeMe.style.background = `none`
  i++
  i > theme.length - 1 ? (i = 0) : i
  setTimeout(
    () =>
      (likeMe.style.background = `url(${
        'https://source.unsplash.com/random/' + theme[i]
      }) no-repeat center
  center/cover`),
    100
  )
  console.log(i)
})

prev.addEventListener('click', () => {
  maxLike < timesClicked ? (maxLike = timesClicked) : maxLike

  topPic.innerHTML = maxLike

  timesClicked = 0
  times.innerHTML = 0

  likeMe.style.background = `none`
  i--
  i < 0 ? (i = theme.length - 1) : i
  setTimeout(
    () =>
      (likeMe.style.background = `url(${
        'https://source.unsplash.com/random/' + theme[i]
      }) no-repeat center
    center/cover`),
    100
  )
  console.log(i)
})

/* Looks like doublecklick event listener doesn't work for mobile devices -_- */
/*
likeMe.addEventListener('dblclick', (e) => {
  createHeart(e)
})
*/

let clickTime = 0

likeMe.addEventListener('click', (e) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime()
  } else {
    if (new Date().getTime() - clickTime < 800) {
      createHeart(e)
      clickTime = 0
    } else {
      clickTime = new Date().getTime()
    }
  }
})

const createHeart = (e) => {
  const heart = document.createElement('i')
  heart.classList.add('fas')
  heart.classList.add('fa-heart')

  const x = e.clientX
  const y = e.clientY

  const leftOffset = e.target.offsetLeft
  const topOffset = e.target.offsetTop

  const xInside = x - leftOffset
  const yInside = y - topOffset

  heart.style.top = `${yInside}px`
  heart.style.left = `${xInside}px`

  likeMe.appendChild(heart)

  times.innerHTML = ++timesClicked

  setTimeout(() => heart.remove(), 1000)
}
