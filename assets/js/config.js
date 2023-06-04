function changeMute() {
  let click = 0
  const mute = document.querySelector('.config span:nth-child(1) img')
  mute.addEventListener('click', function () {
    click++
    if (click === 0) {
      mute.setAttribute('src', './assets/img/svg/unmute.svg')
    } else {
      click = -1
      mute.setAttribute('src', './assets/img/svg/mute.svg')
    }
  })
}
changeMute()