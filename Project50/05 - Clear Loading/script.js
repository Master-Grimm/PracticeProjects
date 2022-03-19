const load = document.querySelector('.load')
const pic = document.querySelector('.pic')

let loading = 0

let int = setInterval(blurring, 75)

function blurring() {
  loading++

  if (loading > 99) {
    clearInterval(int)
  }

  load.innerText = `${loading}%`
  load.style.opacity = scale(loading, 0, 100, 1, 0)
  pic.style.filter = `blur(${scale(loading, 0, 100, 50, 0)}px)`
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
