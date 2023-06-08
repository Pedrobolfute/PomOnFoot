const body = document.body;
const icon = document.querySelector('.theme');
const thElements = document.getElementsByTagName('th');
const tdElements = document.getElementsByTagName('td');
const elements = document.querySelectorAll('.theme, #return');
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
    changeImageColor('invert(100%)');
    container.style.backgroundColor = 'rgba(118, 112, 112, 1)';
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

    changeImageColor('invert(0%)');
    container.style.backgroundColor = 'rgb(41, 31, 31)';
    container.style.color = '#fff';

    for (var i = 0; i < thElements.length; i++) {
      thElements[i].style.borderColor = 'rgb(255, 255, 255)';
    }

    for (var i = 0; i < tdElements.length; i++) {
      tdElements[i].style.borderColor = 'rgb(255, 255, 255)';
    }

    elements.forEach(element => {
      element.style.filter = 'invert(100%) sepia(5%) saturate(21%) hue-rotate(157deg) brightness(101%) contrast(105%)';
    });
  }
});
