const addBtn = document.getElementById('add')

const stickers = JSON.parse(sessionStorage.getItem('stickers'))

if (stickers) {
  stickers.forEach((sticker) => addNewsticker(sticker))
}

addBtn.addEventListener('click', () => addNewsticker())

function addNewsticker(text = '') {
  const sticker = document.createElement('div')
  sticker.classList.add('sticker')

  sticker.innerHTML = `
    <div class="tools">
        <button class="edit"><i class="fas fa-user-pen"></i></button>
        <button class="delete"><i class="fas fa-trash-can"></i></button>
    </div>
    <div class="stickerText ${text ? '' : 'hidden'}"></div>
    <textarea class="${text ? 'hidden' : ''}"></textarea>
    `

  const editBtn = sticker.querySelector('.edit')
  const deleteBtn = sticker.querySelector('.delete')
  const stickerText = sticker.querySelector('.stickerText')
  const textArea = sticker.querySelector('textarea')

  textArea.value = text
  stickerText.innerHTML = marked(text)

  deleteBtn.addEventListener('click', () => {
    sticker.remove()

    updateLS()
  })

  editBtn.addEventListener('click', () => {
    stickerText.classList.toggle('hidden')
    textArea.classList.toggle('hidden')
  })

  textArea.addEventListener('input', (e) => {
    const { value } = e.target

    stickerText.innerHTML = marked(value)

    updateLS()
  })

  document.body.appendChild(sticker)
}

function updateLS() {
  const stickersText = document.querySelectorAll('textarea')

  const stickers = []

  stickersText.forEach((sticker) => stickers.push(sticker.value))

  sessionStorage.setItem('stickers', JSON.stringify(stickers))
}
