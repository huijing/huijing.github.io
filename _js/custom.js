/* Custom javascript */
var lifeInEmoji = [
  '🚲',
  '🏀',
  '🎮',
  '👾',
  '💻',
  '👟',
  '🎹',
  '🎨'
]
if (navigator.userAgent.indexOf('Mac OS X') !== -1) {
  window.location.hash = lifeInEmoji[ Math.floor( Math.random() * ( lifeInEmoji.length - 1 ) ) ]
}

var blendCheckbox = document.getElementById('blendToggle')
var blender = document.getElementById('blender')
blendCheckbox.addEventListener('click', toggleBlend, false)

function toggleBlend(e) {
  if (e.target.checked) {
    localStorage.checked = true
  } else {
    localStorage.checked = ''
    blender.classList.remove('active')
  }
}

(function() {
  blendCheckbox.checked = localStorage.checked
  if (localStorage.checked) {
    blender.classList.add('active')
  } else {
    blender.classList.remove('active')
  }
})()