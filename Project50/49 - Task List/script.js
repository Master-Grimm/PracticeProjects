const form = document.getElementById('form')
const input = document.getElementById('input')
const tasksUL = document.getElementById('tasks')

const tasks = JSON.parse(sessionStorage.getItem('tasks'))

if (tasks) {
  tasks.forEach((task) => addtask(task))
}

function update() {
  tasksEl = document.querySelectorAll('li')

  const tasks = []

  tasksEl.forEach((taskEl) => {
    tasks.push({
      text: taskEl.innerText,
      completed: taskEl.classList.contains('completed'),
    })
  })

  sessionStorage.setItem('tasks', JSON.stringify(tasks))
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  addtask()
})

function addtask(task) {
  let taskText = input.value

  if (task) {
    taskText = task.text
  }

  if (taskText) {
    const taskEl = document.createElement('li')
    if (task && task.completed) {
      taskEl.classList.add('completed')
    }

    taskEl.innerText = taskText

    taskEl.addEventListener('click', () => {
      taskEl.classList.toggle('completed')
      update()
    })

    taskEl.addEventListener('contextmenu', (e) => {
      e.preventDefault()

      taskEl.remove()
      update()
    })

    tasksUL.appendChild(taskEl)

    input.value = ''

    update()
  }
}
