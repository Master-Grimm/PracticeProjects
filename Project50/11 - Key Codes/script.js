const codes = document.getElementById('codes')

window.addEventListener('keydown', (button) => {
  codes.innerHTML = `
  <div class="key">
  ${event.key === ' ' ? 'Spacebar' : event.key} 
  <small>event.key</small>
</div>
<div class="key">
  ${event.keyCode}
  <small>event.keyCode</small>
</div>
<div class="key">
  ${event.code}
  <small>event.code</small>
</div>
  `
})
