const digits = document.querySelectorAll('.digit')

digits[0].focus()

digits.forEach((digit, i) => {
  digit.addEventListener('keydown', (e) => {
    if (e.key > -1 && e.key < 10) {
      digits[i].value = ''
      setTimeout(() => digits[i + 1].focus(), 1)
    } else if (e.key === 'Backspace') {
      setTimeout(() => digits[i - 1].focus(), 1)
    }
  })
})
