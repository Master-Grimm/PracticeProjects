const sounds = [
  'Perc 1',
  'Perc 2',
  'Perc 3',
  'Kick 1',
  'Kick 2',
  'Kick 3',
  'Snare 1',
  'Snare 2',
  'Snare 3',
]

sounds.forEach((sound) => {
  const btn = document.createElement('button')
  btn.classList.add('btn')

  btn.innerText = sound

  btn.addEventListener('click', () => {
    document.getElementById(sound).play()
  })

  document.getElementById('buttons').appendChild(btn)
})
