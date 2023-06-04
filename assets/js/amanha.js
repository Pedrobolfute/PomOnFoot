console.log(whoScreenIs)

if (whoScreenIs === 'hoje') {
  seeWeek.addEventListener('click', () => window.location.href = '../week.html')

  buttonTodoLeft.addEventListener('click', () => window.location.href = '../ontem.html');

  buttonTodoRight.addEventListener('click', () => window.location.href = './amanha.html');
} else if (whoScreenIs === 'ontem') {
  seeWeek.addEventListener('click', () => window.location.href = '../week.html')

  buttonTodoRight.addEventListener('click', () => window.location.href = './hoje.html');
}
else if (whoScreenIs === 'amanhã') {
  seeWeek.addEventListener('click', () => window.location.href = '../week.html')

  buttonTodoLeft.addEventListener('click', () => window.location.href = '../hoje.html');

  tomorrowChangeEvents()
}


function tomorrowChangeEvents() {
  const tomorrowButtonTodoRight = document.querySelector('.tomorrow.buttonTodoRight')
  tomorrowButtonTodoRight.style.pointerEvents = 'none'
  tomorrowButtonTodoRight.style.opacity = 0.5
}