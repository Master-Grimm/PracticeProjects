const counters = document.querySelectorAll('.counter')

counters.forEach((counter) => {
  counter.innerText = '0'

  const updateCounter = () => {
    const target = +counter.getAttribute('target')
    const count = +counter.innerText

    const increment = target / 250

    if (count < target) {
      counter.innerText = `${Math.ceil(count + increment)}`
      setTimeout(updateCounter, 5)
    } else {
      counter.innerText = target
    }
  }

  updateCounter()
})
