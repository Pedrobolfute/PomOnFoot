const display = document.querySelector('.time');
const som = document.getElementById('som');
const buttonTimerRight = document.querySelector('.buttonTimerRight')
const buttonTimerLeft = document.querySelector('.buttonTimerLeft')
const btnStart = document.querySelector('.time');

let defaultTime = 5
let time = defaultTime * 60;
let running = false;
let interval;

buttonTimerLeft.addEventListener('click', toDecrease);
buttonTimerRight.addEventListener('click', increase);
btnStart.addEventListener('click', start);

function toDecrease() {
  if(defaultTime >= 5) {
    display.textContent = defaultTime -= 5;
  }
  return defaultTime;
}

function increase() {
  if(defaultTime <= 85) {
    display.textContent = defaultTime += 5;
  }
  return defaultTime;
}
  
function start() {
  if (!running) {
    running = true;
    time = defaultTime * 60;
    watch();
    interval = setInterval(watch, 10);
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
    //console.log(minutes)

    if(time >= 60) {
      display.textContent = formatTime(minutes);
    }else {
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
  /*else{
    return String(time).padStart(2, '0');
  }
}*/

function showAlert() {
  som.play();
  setTimeout(() => {
    alert('Tempo esgotado!');
    som.pause();
    som.currentTime = 0;
  }, 100);
}

const insert = document.getElementsByClassName('insert')[0];
const list = document.getElementsByClassName('list')[0];

insert.onsubmit = function(parameter){
  
  parameter.preventDefault();
  const inputAdd = document.getElementsByClassName('inputAdd')[0];

  if(inputAdd.value.trim() !== ''){
  newTask(inputAdd.value);
  insert.reset();
  }
}

function newTask(description){
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