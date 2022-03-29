const itemsElem = document.getElementById('items')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (i) => {
  createTags(i.target.value)

  if (i.key === 'Enter') {
    setTimeout(() => {
      i.target.value = ''
    }, 10)

    randomSelect()
  }
})

function createTags(input) {
  const entities = input
    .split(',')
    .filter((item) => item.trim() !== '')
    .map((item) => item.trim())

  itemsElem.innerHTML = ''

  entities.forEach((item) => {
    const itemElem = document.createElement('span')
    itemElem.classList.add('item')
    itemElem.innerText = item
    itemsElem.appendChild(itemElem)
  })
}

function randomSelect() {
  const times = 25

  const interval = setInterval(() => {
    const randomItem = pickRandomItem()

    if (randomItem !== undefined) {
      highlightItem(randomItem)

      setTimeout(() => {
        unHighlightItem(randomItem)
      }, 500)
    }
  }, 500)

  setTimeout(() => {
    clearInterval(interval)

    setTimeout(() => {
      const randomItem = pickRandomItem()

      highlightItem(randomItem)
    }, 500)
  }, times * 500)
}

function pickRandomItem() {
  const entities = document.querySelectorAll('.item')
  return entities[Math.floor(Math.random() * entities.length)]
}

function highlightItem(item) {
  item.classList.add('highlight')
}

function unHighlightItem(item) {
  item.classList.remove('highlight')
}
