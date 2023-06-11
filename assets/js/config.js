const btnPause = document.getElementById('music');
const audio = new Audio('./assets/musk/Sinister - Anno Domini Beats.mp3');
const playButton = document.querySelector('.time');

let clicked = false;

document.addEventListener('DOMContentLoaded', function() {
  playButton.addEventListener('click', function() {
      if(!clicked) {
        audio.play();
        clicked = true;
      }
      
  });
});

/*window.addEventListener('load', ()=>{
  btnPauseAlarm.addEventListener('click', ()=>{

    if(!audio2.paused) {
      audio2.pause();
    }
  });
})*/

btnPause.addEventListener('click',pausarMusic);

function pausarMusic() {
  if(!audio.paused) {
    audio.pause();
  }else {
    audio.play();
  }
}

function changeMusic() {
  let click = 0
  const mute = document.querySelector('.config span:nth-child(1) img')
  mute.addEventListener('click', function () {
    click++
    if (click === 0) {
      mute.setAttribute('src', './assets/img/svg/unmute.svg')
    } else {
      click = -1
      mute.setAttribute('src', './assets/img/svg/mute.svg')
      mute.setAttribute('title', 'Ligar Musica')
    }
  })
}
changeMusic()

function changeBell() {
  let click = 0
  const mute = document.querySelector('.config span:nth-child(5) img')
  mute.addEventListener('click', function () {
    click++
    if (click === 0) {
      mute.setAttribute('src', './assets/img/svg/bell.svg')
    } else {
      click = -1
      mute.setAttribute('src', './assets/img/svg/bellMute.svg')
      mute.setAttribute('title', 'Ligar Alarme')

    }
  })
}
changeBell()