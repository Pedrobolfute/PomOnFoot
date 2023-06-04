const seeWeek = document.getElementsByClassName('seeWeek')[0]
const buttonTodoLeft = document.getElementsByClassName('buttonTodoLeft')[0]
const buttonTodoRight = document.getElementsByClassName('buttonTodoRight')[0]
const whoScreenIs = document.querySelector('h6').textContent.toLowerCase()

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
}

