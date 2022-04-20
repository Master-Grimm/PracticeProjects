const contentArr = document.querySelectorAll('.content')
const list = document.querySelectorAll('li')

list.forEach((item, i) => {
  item.addEventListener('click', () => {
    hideAll()
    contentArr[i].classList.add('show')
    item.classList.add('active')
  })
})

function hideAll() {
  contentArr.forEach((e) => e.classList.remove('show'))
  list.forEach((item) => item.classList.remove('active'))
}
