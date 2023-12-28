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
let boy
let timePulse

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
  boy = setInterval(animationBoy, 250)
  timePulse = setInterval(animationTimer, 500)
  btnStart.removeEventListener('click', start)
  if (!running) {
    running = true;
    time = (defaultTime * 60) + 59;
    watch();
    interval = setInterval(watch, whachTime);
  }
}

function stop() {
  clearInterval(interval);
  clearInterval(boy)
  clearInterval(timePulse)
  time = 0;
  running = false;
  setTimeout(()=>{
    btnStart.addEventListener('click', start)
  }, (Math.ceil(som.duration) + 1) * 1000)
}

function watch() {
  if (time >= 0) {
    const { minutes, seconds } = getTimeComponents(time);
    if (time >= 60) {
      display.textContent = formatTime(minutes);
    } else {
      display.textContent = 0;
    }
  }
  if (time <= 60) {
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
  if (alarmActive) {
    som.play();
    setTimeout(() => {
      const icon = document.querySelector('.columnLeft h6')
      display.innerHTML = defaultTime
      icon.innerHTML = toy[0]
      data.cleanTodoData(document.querySelector('.list'))
      data.getTodoData(document.querySelector('.list'))
      load()
    }, (Math.ceil(som.duration) + 1) * 1000)
  }
}

function toggleAlarm() {
  alarmPaused = !alarmPaused;
  if (alarmPaused) {
    som.volume = 1e-16
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
