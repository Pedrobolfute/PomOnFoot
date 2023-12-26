const returnToToday = document.getElementById('return');
returnToToday.addEventListener('click', () => {
  let config = document.querySelector('.config')
  let pomodoro = document.querySelector('.pomodoro')
  let week = document.querySelector('#container')

  config.style.display = 'grid'
  pomodoro.style.display = 'grid'
  week.style.display = 'none'

  data.cleanTodoData(document.querySelector('.list'))
  data.getTodoData(document.querySelector('.list'))
  load()
})

//mainWeek
function mainWeek() {
  column1()
  column2()
  column3()
  column4()
  column5()
  column6()
  column7()
}

window.addEventListener('DOMContentLoaded', () => {
  data.getWeekData()
  mainWeek()  
})


//Funções
function column1() {
  const coluna = document.querySelectorAll(`tr td:nth-child(${1})`)
  coluna.forEach(block => {
    block.addEventListener('dblclick', (e) => {
      let index = e.currentTarget.cellIndex + 1
      insertInput(e.currentTarget, index)
    })
  })
}

function column2() {
  const coluna = document.querySelectorAll(`tr td:nth-child(${2})`)
  coluna.forEach(block => {
    block.addEventListener('dblclick', (e) => {
      let index = e.currentTarget.cellIndex + 1
      insertInput(e.currentTarget, index)
    })
  })
}

function column3() {
  const coluna = document.querySelectorAll(`tr td:nth-child(${3})`)
  coluna.forEach(block => {
    block.addEventListener('dblclick', (e) => {
      let index = e.currentTarget.cellIndex + 1
      insertInput(e.currentTarget, index)
    })
  })
}

function column4() {
  const coluna = document.querySelectorAll(`tr td:nth-child(${4})`)
  coluna.forEach(block => {
    block.addEventListener('dblclick', (e) => {
      let index = e.currentTarget.cellIndex + 1
      insertInput(e.currentTarget, index)
    })
  })
}

function column5() {
  const coluna = document.querySelectorAll(`tr td:nth-child(${5})`)
  coluna.forEach(block => {
    block.addEventListener('dblclick', (e) => {
      let index = e.currentTarget.cellIndex + 1
      insertInput(e.currentTarget, index)
    })
  })
}

function column6() {
  const coluna = document.querySelectorAll(`tr td:nth-child(${6})`)
  coluna.forEach(block => {
    block.addEventListener('dblclick', (e) => {
      let index = e.currentTarget.cellIndex + 1
      insertInput(e.currentTarget, index)
    })
  })
}

function column7() {
  const coluna = document.querySelectorAll(`tr td:nth-child(${7})`)
  coluna.forEach(block => {
    block.addEventListener('dblclick', (e) => {
      let index = e.currentTarget.cellIndex + 1
      insertInput(e.currentTarget, index)
    })
  })
}


//Funções auxiliares
function insertInput(element, index) {
  let oldValue = element.textContent
  const input = `
    <input 
      type="text" 
      style="
          box-sizing: border-box;
          height: 100%;
          width: 100%;
          border: solid 4px #0B57D0;
          background-color: #abc8f7;
          "
      class="enter"
      value="${isValueEmpty(element)}">
  `
  element.innerHTML = input
  keyEnter(element, oldValue, index)
}

function keyEnter(element, oldValue, index) {
  let i = index
  const inputEle = document.querySelector('.enter')
  inputEle.addEventListener('keyup', (e) => {
    let key = e.which || e.keyCode
    if (key == 13) {
      element.textContent = inputEle.value
      data.setWeekData(inputEle, oldValue, i)
    }
  })
}

function isValueEmpty(element) {
  let value = ''
  if (element.textContent !== '') {
    return value = element.textContent
  } return value
}