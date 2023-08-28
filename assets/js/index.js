// Hoje
const seeWeek = document.querySelector('.seeWeek')
const buttonTodoLeft = document.querySelector('.buttonTodoLeft')
const buttonTodoRight = document.querySelector('.buttonTodoRight')
const whoScreenIs = document.querySelector('.info h6').textContent.toLowerCase()

function changePage() {
  let place = ['Ontem', 'Hoje', 'Amanhã']
  let index = 1
  let day = document.querySelector('.info h6')

  buttonTodoLeft.addEventListener('click', () => {
    index--
    day.textContent = place[index]
    if (day.textContent == place[0]) {
      yesterdayChangeEvents()
    } else if (day.textContent == place[2]) {
      tomorrowChangeEvents()
    } else { todayChangeEvents() }
    cleanTodoData()
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
    cleanTodoData()
    getTodoData()
    load()
  })

  seeWeek.addEventListener('click', () => {
    let config = document.querySelector('.config')
    let pomodoro = document.querySelector('.pomodoro')
    let week = document.querySelector('#container')

    config.style.display = 'none'
    pomodoro.style.display = 'none'
    week.style.display = 'flex'
    cleanWeekData()
    getWeekData()
  })
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