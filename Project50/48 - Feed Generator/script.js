const container = document.querySelector('.container')

const count = 20
const sizeBase = 350

for (let i = 0; i < count; i++) {
  let img = document.createElement('img')
  let size = sizeBase + i
  img.src = `https://source.unsplash.com/random/${size}x${size}`
  container.appendChild(img)
}
