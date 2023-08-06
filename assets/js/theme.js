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
    temerLigth();

  } else {
    changeImageColor('invert(0%)');
    temeDark();
  }
});

/*Cores dos botoes */

function temerLigthButtons() {
  var iconElements = document.querySelectorAll('.pomodoro');

  iconElements.forEach(function (element) {
    var images = element.querySelectorAll('img:not(.buttonAdd img)');

    images.forEach(function (image) {
      image.style.filter = 'hue-rotate(90deg)';
      var originalColor = image.style.filter;
      
      image.addEventListener('mouseover', function () {
        image.style.filter = 'invert(83%) sepia(57%) saturate(546%) hue-rotate(163deg) brightness(103%) contrast(102%)';
      });

      image.addEventListener('mouseout', function () {
        image.style.filter = originalColor;
      });
    });
  });
}

function temerDarkButtons() {
  var iconElements = document.querySelectorAll('.pomodoro');

  iconElements.forEach(function (element) {
    var images = element.querySelectorAll('img:not(.buttonAdd img)');

    images.forEach(function (image) {
      image.style.filter = 'invert(83%) sepia(57%) saturate(546%) hue-rotate(163deg) brightness(103%) contrast(102%)';
      var originalFilter = image.style.filter;
      image.addEventListener('mouseover', function () {
        image.style.filter = 'invert(100%)';
      });
      image.addEventListener('mouseout', function () {
        image.style.filter = originalFilter;
      });
    });
  });
}

/*funções para alterar os temas */

function temeDark() {
  let pomodoro = document.querySelector('.pomodoro');
  temerDarkButtons();
  pomodoro.style.background = '';
  pomodoro.style.backgroundColor = 'rgba(10, 13, 13, 0.5)';
  pomodoro.style.color = '#fff';
}

function temerLigth() {
  let pomodoro = document.querySelector('.pomodoro');
  temerLigthButtons();
  pomodoro.style.background = 'linear-gradient(0deg, rgb(255 255 255), rgb(227 84 84 / 51%))';
  pomodoro.style.color = "#000";
}
