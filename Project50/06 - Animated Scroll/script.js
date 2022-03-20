const boxes = document.querySelectorAll('.block')

window.addEventListener('scroll', checkBlocks)

checkBlocks()

function checkBlocks() {
  const triggerHeight = window.innerHeight * 0.85

  boxes.forEach((block) => {
    const boxTop = block.getBoundingClientRect().top

    if (boxTop < triggerHeight) {
      block.classList.add('show')
    } else {
      block.classList.remove('show')
    }
  })
}
