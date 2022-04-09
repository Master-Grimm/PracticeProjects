const sliderContainer = document.querySelector('.slider-container')
const rightSlide = document.querySelector('.right-slide')
const leftSlide = document.querySelector('.left-slide')
const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sliderLength = leftSlide.querySelectorAll('div').length

let activeSlideIndex = 4

leftSlide.style.top = `-${(sliderLength - 1) * 100}vh`

upBtn.addEventListener('click', () => changeSlide('up'))
downBtn.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight
  if (direction === 'up') {
    activeSlideIndex++
    if (activeSlideIndex > sliderLength - 1) {
      activeSlideIndex = 0
    }
  } else if (direction === 'down') {
    activeSlideIndex--
    if (activeSlideIndex < 0) {
      activeSlideIndex = sliderLength - 1
    }
  }

  rightSlide.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`
  leftSlide.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}

changeSlide()
