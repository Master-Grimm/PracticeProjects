const button = document.getElementById('button')
const btnSmall = document.getElementById('btn-small')
const notifications = document.getElementById('notifications')

const messagesArr = [
  { text: 'All Good', type: 'success' },
  { text: 'Some info', type: 'info' },
  { text: 'ALARM', type: 'alert' },
]

let msg = undefined

function getRandomMsg() {
  return messagesArr[Math.floor(Math.random() * messagesArr.length)]
}

button.addEventListener('click', () => createNotif())

function createNotif(text = undefined, type = undefined) {
  msg = getRandomMsg()

  const notif = document.createElement('div')
  notif.classList.add('notification')

  notif.innerText = text ? text : msg.text
  notif.classList.add(type ? type : msg.type)

  notifications.appendChild(notif)

  setTimeout(() => {
    notif.remove()
  }, 15000)
}

btnSmall.addEventListener('click', () => removeNotifs())

function removeNotifs() {
  console.log((notifications.innerHTML = ''))
}
