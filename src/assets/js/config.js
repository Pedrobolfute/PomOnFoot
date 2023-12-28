const btnMusic = document.getElementById('btnMusic');
const btnChangeMusic = document.getElementById('btnChangeMusic');
const audioPlayer = document.getElementById('audioPlayer');
const musicSource = document.getElementById('musicSource');
const btnVolumeDown = document.getElementById('min');
const btnVolumeIncrease = document.getElementById('max');

btnMusic.addEventListener('click', toggleMusic);
btnChangeMusic.addEventListener('click', changeMusic);
audioPlayer.addEventListener('ended', handleMusicEnd);
btnVolumeDown.addEventListener('click', volumeDown);
btnVolumeIncrease.addEventListener('click', volumeIncrease);

let current = 0;
let musicaAtiva = false;
let musicaPause = false;
let next;

let tracks = [
  './src/assets/audio/rain.mp3',
  './src/assets/audio/thunderstorm.mp3',
  './src/assets/audio/fire.mp3',
  './src/assets/audio/hits.mp3'
]

function changeMusic() {
  if (musicaAtiva) {
    if (current < tracks.length - 1) {
      current++;
    } else {
      current = 0;
    }

    next = tracks[current];
    musicSource.setAttribute('src', next);
    audioPlayer.load();
    audioPlayer.play();
  }
}

function toggleMusic() {

  if (musicaAtiva && audioPlayer.paused) {

    console.log(audioPlayer.volume)
    next = tracks[current];
    musicSource.setAttribute('src', next);
    audioPlayer.load();
    audioPlayer.play();

  } else {
    audioPlayer.pause();
  }
}

function handleMusicEnd() {
  audioPlayer.currentTime = 0;
  audioPlayer.play();
}

function volumeDown() {
  if (musicaAtiva) {
    if (audioPlayer.volume > 0.1) {
      setTimeout(() => {
        audioPlayer.volume -= 0.1;
      }, 100);
    }
  }
}

function volumeIncrease() {
  if (musicaAtiva) {
    if (audioPlayer.volume < 1.0) {
      setTimeout(() => {
        audioPlayer.volume += 0.1;
      }, 100);
    }
  }
}

function changeIconMusic() {
  let click = 0
  const mute = document.querySelector('.config span:nth-child(1) img')
  mute.addEventListener('click', () => {
    click++
    if (click === 0) {
      musicaAtiva = false
      mute.setAttribute('src', './src/assets/img/svg/mute.svg')
      mute.setAttribute('title', 'Ligar Musica')
      mute.setAttribute('alt', 'unmute')
    } else {
      click = -1
      musicaAtiva = true
      mute.setAttribute('src', './src/assets/img/svg/unmute.svg')
      mute.setAttribute('title', 'Desligar Musica')
      mute.setAttribute('alt', 'mute')
    }
  })
}
changeIconMusic()

function changeBell() {
  let click = 0
  const mute = document.querySelector('.config span:nth-child(5) img');
  mute.addEventListener('click', () => {
    click++;
    if (click === 0) {
      mute.setAttribute('src', './src/assets/img/svg/bell.svg');
      mute.setAttribute('title', 'Alarme Ligado');
      mute.setAttribute('alt', 'Alarm On');
    } else {
      click = -1;
      mute.setAttribute('src', './src/assets/img/svg/bellMute.svg');
      mute.setAttribute('title', 'Alarme Desligado');
      mute.setAttribute('alt', 'Alarm Off');
    }
  })
}
changeBell()

function animateChangeMusic() {
  const mute = document.querySelector('.config span:nth-child(2) img');
  let random = 0
  mute.addEventListener('click', () => {
    if (musicaAtiva) {
      random += 180
      mute.style.transform = `rotate(${random}deg)`
      mute.style.transition = '0.5s'
    }
  })
}
animateChangeMusic()