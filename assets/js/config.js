const btnMusic = document.getElementById('btnMusic');
const btnChangeMusic = document.getElementById('btnChangeMusic');
const audioPlayer = document.getElementById('audioPlayer');
const musicSource = document.getElementById('musicSource');
//const playButton = document.querySelector('.time');

let current = 0;
let musicaAtiva = true;

btnMusic.addEventListener('click',toggleMusic);
btnChangeMusic.addEventListener('click',changeMusic);

/*
let clicked = false;

document.addEventListener('DOMContentLoaded', function() {
  playButton.addEventListener('click', function() {
      if(!clicked) {
        audio.play();
        clicked = true;
      }
      
  });
});*/
let tracks = [
  './assets/musk/1.mp3',
  './assets/musk/2.mp3',
  './assets/musk/3.mp3',
  './assets/musk/4.mp3'
]

function changeMusic(){
  toggleMusic();
  if(musicaAtiva) {
    if(current < tracks.length - 1) {
      current++;  
    } else {
      current = 0;
    }
    
    let next = tracks[current];
    console.log("carregar próxima musk: " + next);

    musicSource.setAttribute('src', next);
    audioPlayer.load();
    audioPlayer.play();
  }
}

function toggleMusic() {
  
  if(musicaAtiva && audioPlayer.paused) {
    audioPlayer.play();
  }else {
    audioPlayer.pause();
  }
}

function changeIconMusic() {
  let click = 0
  const mute = document.querySelector('.config span:nth-child(1) img')
  mute.addEventListener('click', function () {
    click++
    if (click === 0) {
      mute.setAttribute('src', './assets/img/svg/mute.svg')
      mute.setAttribute('title', 'Ligar Musica')
    } else {
      click = -1
      mute.setAttribute('src', './assets/img/svg/unmute.svg')
    }
  })
}
changeIconMusic()

function changeBell() {
  let click = 0
  const mute = document.querySelector('.config span:nth-child(5) img');
  mute.addEventListener('click', function () {
    click++;
    if (click === 0) {
      mute.setAttribute('src', './assets/img/svg/bell.svg');
    } else {
      click = -1;
      mute.setAttribute('src', './assets/img/svg/bellMute.svg');
      mute.setAttribute('title', 'Ligar Alarme');
    }
  })
}
changeBell()