const bar = document.getElementById('bar')

bar.addEventListener('input', (e) => {
  const value = +e.target.value
  const label = e.target.nextElementSibling

  let barWidth = +getComputedStyle(e.target)
    .getPropertyValue('width')
    .substring(
      0,
      getComputedStyle(e.target).getPropertyValue('width').length - 2
    )

  let labelWidth = +getComputedStyle(label)
    .getPropertyValue('width')
    .substring(0, getComputedStyle(label).getPropertyValue('width').length - 2)

  const max = +e.target.max
  const min = +e.target.min

  const left =
    value * (barWidth / max) - labelWidth / 2 + scale(value, min, max, 25, -25)

  label.style.left = `${left}px`

  label.innerHTML = value
})

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
