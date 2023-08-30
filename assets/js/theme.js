const body = document.body;
const icon = document.querySelector('#theme');
const thElements = document.getElementsByTagName('th');
const tdElements = document.getElementsByTagName('td');
const elements = document.querySelectorAll('#theme, #return');
let whichTheme;


function changeImageColor(color) {
  const icons = document.querySelectorAll('.icon img');
  icons.forEach((img) => {
    img.style.filter = `invert(0%) sepia(0%) saturate(0%) ${color} brightness(90%) contrast(150%)`;
  });
}

icon.addEventListener('click', function () {
  body.classList.toggle('dark-mode');

  const isDarkMode = body.classList.contains('dark-mode');

  if (isDarkMode) {
    changeImageColor('invert(100%)');
    themeLigth();

  } else {
    changeImageColor('invert(0%)');
    themeDark();
  }
});

/*Cores dos botoes */

function themeLigthButtons() {
  var iconElements = document.querySelectorAll('.pomodoro');
  iconElements.forEach(function (element) {
    var images = element.querySelectorAll('img:not(.buttonAdd img)');

    images.forEach(function (image) {
      image.style.filter = 'hue-rotate(90deg)';
      var originalColor = image.style.filter;
      image.addEventListener('mouseout', function () {
        image.style.filter = originalColor;
      });
    });
  });
}

function themeDarkButtons() {
  var iconElements = document.querySelectorAll('.pomodoro');
  iconElements.forEach(function (element) {
    var images = element.querySelectorAll('img:not(.buttonAdd img)');

    images.forEach(function (image) {
      image.style.filter = 'invert(83%) sepia(57%) saturate(546%) hue-rotate(163deg) brightness(103%) contrast(102%)';
      var originalFilter = image.style.filter;
      image.addEventListener('mouseout', function () {
        image.style.filter = originalFilter;
      });
    });
  });
}

/*funções para alterar os temas */

function themeDark() {
  let allBody = document.body
  let pomodoro = document.querySelector('.pomodoro');
  let time = document.querySelector('.dial-plate .time')
  let insertBlock = document.querySelector('.columnMiddle .insert')
  let info = document.querySelector('.info h6')
  let inputAdd = document.querySelector('.inputAdd')
  pomodoro.style.background = '';
  pomodoro.style.backgroundColor = 'rgba(10, 13, 13, 0.5)';
  allBody.style.background = ''
  pomodoro.style.color = '#fff';
  time.style.background = ''
  insertBlock.style.backgroundColor = ''
  info.style.color = ''
  inputAdd.style.color = ''
  inputAdd.style.backgroundColor = ''
  themeDarkButtons();
}

function themeLigth() {
  let allBody = document.body
  let pomodoro = document.querySelector('.pomodoro');
  let time = document.querySelector('.dial-plate .time')
  let insertBlock = document.querySelector('.columnMiddle .insert')
  let info = document.querySelector('.info h6')
  let inputAdd = document.querySelector('.inputAdd')
  pomodoro.style.background = '#ffffff88';
  pomodoro.style.color = "#e4dddd";
  allBody.style.background = '#cac3c3'
  time.style.background = '#ce5454'
  insertBlock.style.backgroundColor = '#00000057'
  insertBlock.style.borderColor = '#79797957'
  info.style.color = 'black'
  inputAdd.style.backgroundColor = 'aliceblue'
  inputAdd.style.color = 'black'
  themeLigthButtons();
}
