// Neandro Area
const display = document.querySelector('.time');
const som = document.getElementById('som');
const btnPauseAlarm = document.getElementById('alarm');
const buttonTimerRight = document.querySelector('.buttonTimerRight');
const buttonTimerLeft = document.querySelector('.buttonTimerLeft');
const btnStart = document.querySelector('.time');
let whachTime = 1000

let defaultTime = 30
let time = defaultTime * 60;
let running = false;
let interval;
let alarmActive = true;
let alarmPaused = false;

buttonTimerLeft.addEventListener('click', toDecrease);
buttonTimerRight.addEventListener('click', increase);
btnStart.addEventListener('click', start);
btnPauseAlarm.addEventListener('click', toggleAlarm);


function toDecrease() {
  if (!running && defaultTime >= 10) {
    display.textContent = defaultTime -= 5;
  }
  return defaultTime;
}

function increase() {
  if (!running && defaultTime <= 85) {
    display.textContent = defaultTime += 5;
  }
  return defaultTime;
}

function start() {
  if (!running) {
    running = true;
    time = defaultTime * 60;
    watch();
    interval = setInterval(watch, whachTime);
  }
}

function stop() {
  clearInterval(interval);
  time = 0;
  running = false;
}

function watch() {
  if (time >= 0) {
    const { minutes, seconds } = getTimeComponents(time);
    if (time >= 60) {
      display.textContent = formatTime(minutes);
    } else {
      changeColor();
      display.textContent = seconds;
    }
  }
  if (time <= 0) {
    stop();
    showAlert();
  } else {
    time--;
  }
}

function getTimeComponents(time) {
  const minutes = Math.floor((time % 7200) / 60);
  const seconds = time % 60;
  console.log(minutes, seconds)
  return { minutes, seconds };
}

function formatTime(time) {
  return String(time).padStart(1, '0');
}

function showAlert() {
  if(alarmActive && !alarmPaused) {
    alarmActive = false;
    som.play();
    setTimeout(() => {
      alert('Tempo esgotado!');
      som.pause();
      window.location.href = "index.html";
      som.currentTime = 0;
      alarmActive = true;
    }, 100);
  }else {
    toggleAlarm();
    setTimeout(() => {
      alert('Tempo esgotado!');
      window.location.href = "index.html";
      alarmActive = true;
    }, 100);
  }
}

function toggleAlarm() {
  alarmPaused = !alarmPaused;
  if(alarmPaused) {
    som.pause();
  }
}

function changeColor() {
  let cor = document.querySelector('.time')
  if (time % 2 == 0) {
    cor.style.backgroundColor = '#ce5454'
  } else {
    cor.style.backgroundColor = '#de2e2e'
  }
}


// Deiv Area
const circle = document.querySelector('.dial-plate');
circle.addEventListener('click', animationCircle);
function animationCircle() {
  const circle01 = document.querySelector('.circle01');
  const circle02 = document.querySelector('.circle02');
  circle01.style.stroke = 'black';
  circle02.style.stroke = '#00fbff';
  if (time == 0) {
    circle01.style.stroke = '#00000000';
    circle02.style.stroke = '#00fbff00';
    circle02.style.animation = "none";
    var keyframes = "";
    var style = document.createElement("style");
    style.innerHTML = keyframes;
    document.head.appendChild(style);
  } else {
    circle01.style.stroke = '#CE5454';
    circle02.style.stroke = '#ffffffcc';
    var keyframes = `@keyframes animate-circle {
      0% {
        transform: rotate(-90deg) scaleY(1);
        stroke-dashoffset: 251.2;
      }
    
      50% {
        transform: rotate(-90deg) scaleY(1);
        stroke-dashoffset: 0;
      }
    
      50.001% {
        transform: rotate(-90deg) scaleY(-1);
        stroke-dashoffset: 0;
      }
    
      100% {
        transform: rotate(-90deg) scaleY(-1);
        stroke-dashoffset: 251.2;
      }
    }`;
    circle02.style.animation = `animate-circle ${(whachTime*120)/1000}s linear infinite`;
    var style = document.createElement("style");
    style.innerHTML = keyframes;
    document.head.appendChild(style);
  }
}