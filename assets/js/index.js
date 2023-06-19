// Hoje
const seeWeek = document.getElementsByClassName('seeWeek')[0]
const buttonTodoLeft = document.getElementsByClassName('buttonTodoLeft')[0]
const buttonTodoRight = document.getElementsByClassName('buttonTodoRight')[0]
const whoScreenIs = document.querySelector('h6').textContent.toLowerCase()

function changePage() {
  let place = ['ontem', 'hoje', 'amanhã']
  let index = 1
  let day = document.querySelector('h6')

  buttonTodoLeft.addEventListener('click', () => {
    index--
    day.textContent = place[index]
    if (day.textContent == place[0]) {
      yesterdayChangeEvents()
      let list = document.getElementsByClassName('list')[0]
    } else if (day.textContent == place[2]) {
      tomorrowChangeEvents()
    } else { todayChangeEvents() }
    cleanScreen()
    getTodoData()
    load()
  })

  buttonTodoRight.addEventListener('click', () => {
    index++
    day.textContent = place[index]
    if (day.textContent == place[2]) {
      tomorrowChangeEvents()
    } else if (day.textContent == place[0]) {
      yesterdayChangeEvents()
    } else { todayChangeEvents() }
    cleanScreen()
    getTodoData()
    load()
  })

  seeWeek.addEventListener('click', () => window.location.href = '../week.html')
}
changePage()


function yesterdayChangeEvents() {
  const yesterdayFormPreventEvent = document.querySelector('.insert')
  yesterdayFormPreventEvent.style.pointerEvents = 'none'
  yesterdayFormPreventEvent.style.opacity = 0.5

  const yesterdayButtonTodoLeft = document.querySelector('.buttonTodoLeft')
  yesterdayButtonTodoLeft.style.pointerEvents = 'none'
  yesterdayButtonTodoLeft.style.opacity = 0.5
}

function todayChangeEvents() {
  const todayChangeEvents = document.querySelector('.insert')
  todayChangeEvents.style.pointerEvents = 'auto'
  todayChangeEvents.style.opacity = ''

  const todayButtonTodoLeft = document.querySelector('.buttonTodoLeft')
  todayButtonTodoLeft.style.pointerEvents = 'auto'
  todayButtonTodoLeft.style.opacity = ''


  const todayButtonTodoRight = document.querySelector('.buttonTodoRight')
  todayButtonTodoRight.style.pointerEvents = 'auto'
  todayButtonTodoRight.style.opacity = ''
}

function tomorrowChangeEvents() {
  const tomorrowButtonTodoRight = document.querySelector('.buttonTodoRight')
  tomorrowButtonTodoRight.style.pointerEvents = 'none'
  tomorrowButtonTodoRight.style.opacity = 0.5
}