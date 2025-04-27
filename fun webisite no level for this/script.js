const savedMood = localStorage.getItem('mood')
if (savedMood) document.body.classList.add(savedMood)

document.getElementById('happy-btn').addEventListener('click', () => changeMood('happy'))
document.getElementById('sad-btn').addEventListener('click', () => changeMood('sad'))
document.getElementById('energetic-btn').addEventListener('click', () => changeMood('energetic'))
document.getElementById('calm-btn').addEventListener('click', () => changeMood('calm'))

function changeMood(mood) {
  document.body.classList.remove('happy', 'sad', 'energetic', 'calm')
  document.body.classList.add(mood)
  localStorage.setItem('mood', mood)
}
