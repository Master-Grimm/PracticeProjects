const password = document.getElementById('password')
const background = document.getElementById('background')

let blur = 40

password.addEventListener('input', (e) => {
  const input = e.target.value

  let small = /[a-z]/g.test(input)
  let big = /[A-Z]/g.test(input)
  let number = /[0-9]/g.test(input)
  let symbol = /[^a-zA-Z0-9]+/g.test(input)

  if (small && big && number && symbol) blur = 0
  else if (
    (small && big && number) ||
    (small && big && symbol) ||
    (small && number && number) ||
    (symbol && big && number)
  )
    blur = 10
  else if (
    (small && big) ||
    (small && number) ||
    (small && symbol) ||
    (big && number) ||
    (big && symbol) ||
    (number && symbol)
  )
    blur = 20
  else if (small || big || number || symbol) blur = 30
  else blur = 40

  background.style.filter = `blur(${blur}px)`
})
