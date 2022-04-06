const header = document.getElementById('header')
const title = document.getElementById('title')
const quote = document.getElementById('quote')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  )
}
let testDate = randomDate(new Date(2020, 0, 1), new Date())
  .toString()
  .split(' ')
let formRandomDate = testDate[1] + ' ' + testDate[2] + ' ' + testDate[3]
console.log(formRandomDate)

let namesArr = [
  'Abdul',
  'Barkley',
  'Cahl',
  'Dale',
  'Emerson',
  'Fearghus',
  'Garrett',
  'Hamid',
  'Idris',
  'Jack-James',
  'Kain',
  'Lawrence',
  'Magnus',
  'Nathan',
  'Oliver',
  'Pablo',
  'Qasim',
  'Raja',
  'Simon',
  'Talon',
  'Uzayr',
  'Vincent',
  'Wayde',
  'Xavier',
  'Yoji',
  'Zachariah',
]

let adjArr = [
  'Abandoned',
  'Blushing',
  'Charming',
  'Damaged',
  'Electric',
  'Fixed',
  'Gainful',
  'Handy',
  'Illegal',
  'Jolly',
  'Magnificent',
  'Nervous',
  'Oceanic',
  'Pale',
  'Rapid',
  'Scary',
  'Tasteless',
  'Unhealthy',
  'Vengeful',
  'Wealthy',
  'Young',
  'Zealous',
]

let a = Math.floor(Math.random() * namesArr.length)
let b = Math.floor(Math.random() * adjArr.length)
let generatedName = namesArr[a] + ' ' + adjArr[b]

const getNewQuote = async () => {
  var url =
    'https://gist.githubusercontent.com/Master-Grimm/b320808e12d6e2f0e3658a88b6f56d42/raw/e791bd4bccdcea4b44cf7b889ebb7b94dff3f33d/quotes2'

  const res = await fetch(url)
  console.log(typeof res)
  const quotesArr = await res.json()

  const q = Math.floor(Math.random() * quotesArr.length)

  const quoteText = quotesArr[q].quote

  quote.innerHTML = quoteText
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
let profilePic = randomIntFromInterval(1, 99)

header.innerHTML =
  '<img src="https://source.unsplash.com/random/350x200" alt="" />'

setTimeout(getData, 2000)

function getData() {
  title.innerHTML = 'Random card by guy №' + profilePic
  getNewQuote()
  profile_img.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/' +
    profilePic +
    '.jpg" alt="" />'
  name.innerHTML = generatedName
  date.innerHTML = formRandomDate

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}
