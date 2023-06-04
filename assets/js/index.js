const display = document.querySelector('.time');
const som = document.getElementById('som');
const buttonTimerRight = document.querySelector('.buttonTimerRight')
const buttonTimerLeft = document.querySelector('.buttonTimerLeft')
const btnStart = document.querySelector('.time');

let defaultTime = 30
let time = defaultTime * 60;
let running = false;
let interval;

buttonTimerLeft.addEventListener('click', toDecrease);
buttonTimerRight.addEventListener('click', increase);
btnStart.addEventListener('click', start);

function toDecrease() {
  if(!running && defaultTime >= 10) {
      display.textContent = defaultTime -= 5;
  }
  return defaultTime;
}

function increase() {
  if(!running && defaultTime <= 85) {
      display.textContent = defaultTime += 5;
  }
  return defaultTime;
}
  
function start() {
  if (!running) {
    running = true;
    time = defaultTime * 60;
    watch();
    interval = setInterval(watch, 1000);
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

    if(time >= 60) {
      display.textContent = formatTime(minutes);
    }else {
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
  som.play();
  setTimeout(() => {
    alert('Tempo esgotado!');
    som.pause();
    window.location.href = "hoje.html";
    som.currentTime = 0;
  }, 100);
}

const insert = document.getElementsByClassName('insert')[0];
const list = document.getElementsByClassName('list')[0];

insert.onsubmit = function(parameter){
  
  parameter.preventDefault();
  const inputAdd = document.getElementsByClassName('inputAdd')[0];

  if(inputAdd.value.trim() !== ''){
  newElement(inputAdd.value);
  insert.reset();
  }
}

let newElement = function newTask(description){
  const createDiv = document.createElement("div");
  const createContent = document.createElement("input");
  const createLabel = document.createElement("label");
  const descriptionInput = document.createTextNode(description);

  createContent.setAttribute("type", "checkbox");
  createContent.setAttribute("class", "taskList");
  createContent.setAttribute("name", description);
  createContent.setAttribute("id", description);

  createLabel.setAttribute("for", description);
  createLabel.appendChild(descriptionInput);

  createDiv.classList.add("formItem");
  createDiv.appendChild(createContent);
  createDiv.appendChild(createLabel);
  createDiv.appendChild(descriptionInput);
  
  list.appendChild(createDiv);
}

function changeColor() {
  let cor = document.querySelector('.time')

  if(time %2 == 0) {
    cor.style.backgroundColor = '#ce5454'
  } else {
    cor.style.backgroundColor = '#de2e2e'
  }
  
}

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
    circle01.style.stroke = 'black';
    circle02.style.stroke = '#00fbff';
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
    circle02.style.animation = "animate-circle 120s linear infinite";
    var style = document.createElement("style");
    style.innerHTML = keyframes;
    document.head.appendChild(style);
  }
}