const toggles = document.querySelectorAll('.toggle')
const good = document.querySelector('#good')
const cheap = document.querySelector('#cheap')
const fast = document.querySelector('#fast')
const result = document.querySelector('#result')

toggles.forEach((toggle) =>
  toggle.addEventListener('change', (e) => doTheTrick(e.target))
)

function doTheTrick(theClickedOne) {
  if (good.checked && cheap.checked && fast.checked) {
    if (good === theClickedOne) {
      fast.checked = false
      result.innerHTML = 'Slow'
    }

    if (cheap === theClickedOne) {
      good.checked = false
      result.innerHTML = 'Ugly'
    }

    if (fast === theClickedOne) {
      cheap.checked = false
      result.innerHTML = 'Expensive'
    }
  } else if (good.checked && cheap.checked) {
    result.innerHTML = 'Slow'
  } else if (good.checked && fast.checked) {
    result.innerHTML = 'Expensive'
  } else if (fast.checked && cheap.checked) {
    result.innerHTML = 'Ugly'
  } else {
    result.innerHTML = '???'
  }
}
