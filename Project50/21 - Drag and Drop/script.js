const fill = document.querySelector('.fill')
const empryArr = document.querySelectorAll('.empty')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

for (const empty of empryArr) {
  empty.addEventListener('dragover', dragOver)
  empty.addEventListener('dragenter', dragEnter)
  empty.addEventListener('dragleave', dragLeave)
  empty.addEventListener('drop', drop)
}

function dragStart() {
  this.className += ' hold'
  setTimeout(() => (this.className = 'invisible'), 1)
}

function dragEnd() {
  this.className = 'fill'
}

function dragOver(e) {
  e.preventDefault()
}

function dragEnter(e) {
  e.preventDefault()
  this.className += ' hovered'
}

function dragLeave() {
  this.className = 'empty'
}

function drop() {
  this.className = 'empty'
  this.append(fill)
}
