const userReview = document.querySelector('.user-review')
const userPhoto = document.querySelector('.user-photo')
const userName = document.querySelector('.user-name')
const userPosition = document.querySelector('.user-position')
const progressBar = document.querySelector('.progress-bar-container')

let reviews = []

const getReviews = async () => {
  var url =
    'https://gist.githubusercontent.com/Master-Grimm/fa5b843ec70a2836105fac8618b9a4cd/raw/73540c3937b42f5e87c5dd851f25a760b9b39374/reviewsTest'
  const res = await fetch(url)
  reviews = await res.json()
}

getReviews()

const progressSpeed = 8000
let i = 0

function showBar() {
  progressBar.classList.remove('hide')
}

function updateReview() {
  const { name, position, photo, review } = reviews[i]

  userReview.innerHTML =
    '<i class="fa-solid fa-angles-left"></i>' +
    review +
    '<i class="fa-solid fa-angles-right"></i>'
  userPhoto.src = photo
  userName.innerHTML = name
  userPosition.innerHTML = position

  i++

  if (i > reviews.length - 1) {
    i = 0
  }
}

setTimeout(showBar, 1000)
setTimeout(updateReview, 1000)
setInterval(updateReview, progressSpeed)
