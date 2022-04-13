const resultElem = document.getElementById('result')
const lengthElem = document.getElementById('length')
const lowercaseElem = document.getElementById('lowercase')
const uppercaseElem = document.getElementById('uppercase')
const numbersElem = document.getElementById('numbers')
const symbolsElem = document.getElementById('symbols')
const generateElem = document.getElementById('generate')
const copyElem = document.getElementById('copy')

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
}

copyElem.addEventListener('click', () => {
  const textarea = document.createElement('textarea')
  const pass = resultElem.innerText

  if (!pass) {
    return
  }

  textarea.value = pass
  document.body.appendChild(textarea)
  textarea.sElemect()
  document.execCommand('copy')
  textarea.remove()
  alert('password copied')
})

generateElem.addEventListener('click', () => {
  const length = +lengthElem.value
  const hasLower = lowercaseElem.checked
  const hasUpper = uppercaseElem.checked
  const hasNumber = numbersElem.checked
  const hasSymbol = symbolsElem.checked

  resultElem.innerText = generatePass(
    length,
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol
  )
})

function generatePass(length, lower, upper, number, symbol) {
  let generatedPass = ''
  const typesCount = lower + upper + number + symbol
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  )

  if (typesCount === 0) {
    return ''
  }

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0]
      generatedPass += randomFunc[funcName]()
    })
  }

  let prePass = generatedPass.slice(0, length)
  let finalPass = shuffle(prePass)
  return finalPass
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
  const symbols = '!#$%&*+-?@^_~'
  return symbols[Math.floor(Math.random() * symbols.length)]
}

function shuffle(str) {
  return str
    .split('')
    .sort(() => Math.random() - 0.5)
    .join('')
}
