console.log(whoScreenIs)

if (whoScreenIs === 'hoje') {
  seeWeek.addEventListener('click', () => window.location.href = '../week.html')

  buttonTodoLeft.addEventListener('click', () => window.location.href = '../ontem.html');

  buttonTodoRight.addEventListener('click', () => window.location.href = './amanha.html');
} else if (whoScreenIs === 'ontem') {
  seeWeek.addEventListener('click', () => window.location.href = '../week.html')

  buttonTodoRight.addEventListener('click', () => window.location.href = './hoje.html');

  yesterdayChangeEvents()
}
else if (whoScreenIs === 'amanhã') {
  seeWeek.addEventListener('click', () => window.location.href = '../week.html')

  buttonTodoLeft.addEventListener('click', () => window.location.href = '../hoje.html');

}

function yesterdayChangeEvents() {
  const yesterdayFormPreventEvent = document.querySelector('.yesterdayInsert')
  yesterdayFormPreventEvent.style.pointerEvents = 'none'
  yesterdayFormPreventEvent.style.opacity = 0.5

  const yesterdayButtonTodoLeft = document.querySelector('.yesterday.buttonTodoLeft')
  yesterdayButtonTodoLeft.style.pointerEvents = 'none'
  yesterdayButtonTodoLeft.style.opacity = 0.5
}