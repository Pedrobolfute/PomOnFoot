const body = document.body;
const icon = document.querySelector('.theme');
const thElements = document.getElementsByTagName('th');
const tdElements = document.getElementsByTagName('td');
const elements = document.querySelectorAll('.theme, #return');
const pomodoro = document.querySelector('.pomodoro');

function changeImageColor(color) {
  const icons = document.querySelectorAll('.icon img');
  icons.forEach((img) => {
    img.style.filter = `invert(0%) sepia(0%) saturate(0%) ${color} brightness(90%) contrast(150%)`;
  });
}

icon.addEventListener('click', function () {
  body.classList.toggle('dark-mode');

  const isDarkMode = body.classList.contains('dark-mode');
  const container = document.querySelector('#container');

  if (isDarkMode) {
    temerLigthButtons();
    pomodoro.style.backgroundColor = 'aliceblue';
    pomodoro.style.color = "#000";
    changeImageColor('invert(100%)');
    container.style.backgroundColor = 'rgba(156, 191, 187)';
    container.style.color = '#000';
    for (var i = 0; i < thElements.length; i++) {
      thElements[i].style.borderColor = 'rgb(0, 0, 0)';
    }

    for (var i = 0; i < tdElements.length; i++) {
      tdElements[i].style.borderColor = 'rgb(0, 0, 0)';
    }

    elements.forEach(element => {
      element.style.filter = 'invert(0%) sepia(5%) saturate(21%) hue-rotate(157deg) brightness(101%) contrast(105%)';
    });

  } else {
    temerDarkButtons();
    pomodoro.style.backgroundColor = 'rgba(10, 13, 13, 0.5)';
    pomodoro.style.color = '#fff';
    changeImageColor('invert(0%)');
    container.style.backgroundColor = 'rgba(10, 13, 13, 0.5)';
    container.style.color = '#FFFF';
    for (var i = 0; i < thElements.length; i++) {
      thElements[i].style.borderColor = 'rgb(255, 255, 255)';
    }

    for (var i = 0; i < tdElements.length; i++) {
      tdElements[i].style.borderColor = 'rgb(255, 255, 255)';
    }

    elements.forEach(element => {
      element.style.filter = 'invert(83%) sepia(57%) saturate(546%) hue-rotate(163deg) brightness(103%) contrast(102%)';
    });
  }
});

/*Cores dos botoes */

function temerLigthButtons() {
  var iconElements = document.querySelectorAll('.pomodoro');

  iconElements.forEach(function (element) {
    var images = element.querySelectorAll('img');

    images.forEach(function (image) {
      var originalColor = image.style.filter;

      image.addEventListener('mouseover', function () {
        image.style.filter = 'hue-rotate(90deg)';
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
    var images = element.querySelectorAll('img');

    images.forEach(function (image) {

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








