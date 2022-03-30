const glasses = document.querySelectorAll('.glass')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateTank()

glasses.forEach((g, i) => {
  g.addEventListener('click', () => fillGlass(i))
})

function fillGlass(i) {
  if (i === glasses.length - 1 && glasses[i].classList.contains('full')) i--
  else if (
    glasses[i].classList.contains('full') &&
    !glasses[i].nextElementSibling.classList.contains('full')
  ) {
    i--
  }

  glasses.forEach((g, j) => {
    if (j <= i) {
      g.classList.add('full')
    } else {
      g.classList.remove('full')
    }
  })

  updateTank()
}

function updateTank() {
  const fullGlasses = document.querySelectorAll('.glass.full').length
  const totalGlasses = glasses.length

  if (fullGlasses === 0) {
    percentage.style.visibility = 'hidden'
    percentage.style.height = 0
  } else {
    percentage.style.visibility = 'visible'
    percentage.style.height = `${(fullGlasses / totalGlasses) * 380}px`
    percentage.innerText = `${Math.round((fullGlasses / totalGlasses) * 100)}%`
  }

  if (fullGlasses === totalGlasses) {
    remained.style.visibility = 'hidden'
    remained.style.height = 0
  } else {
    remained.style.visibility = 'visible'
    let rounded = function (number) {
      return +number.toFixed(2)
    }
    let remainder = rounded(1.8 - (200 * fullGlasses) / 1000)
    liters.innerText = `${remainder}L`
  }
}
