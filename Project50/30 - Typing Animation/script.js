const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const timesEl = document.getElementById('times')
const runBtn = document.getElementById('run')
const usrString = document.getElementById('usr-string')

let text = 'Example string'
let idx = 1
let speed = 181
let typing = true
let times = 1

function writeText() {
  if (idx <= text.length) {
    textEl.innerText = text.slice(0, idx)
    setTimeout(writeText, speed)
    idx++
  } else {
    removeText()
  }
}

function removeText() {
  if (idx > 0) {
    textEl.innerText = text.slice(text.length - idx + 1, text.length)
    setTimeout(removeText, speed)
    idx--
  } else {
    if (times > 1) {
      times--
      writeText()
    }
  }
}

speedEl.addEventListener('input', (e) => (speed = 200 - e.target.value * 19))
timesEl.addEventListener('input', (e) => (times = e.target.value))

runBtn.addEventListener('click', () => {
  text = usrString.value
  writeText()
})
