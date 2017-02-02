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
];
if (navigator.userAgent.indexOf('Mac OS X') !== -1) {
  window.location.hash = lifeInEmoji[ Math.floor( Math.random() * ( lifeInEmoji.length - 1 ) ) ];
}
