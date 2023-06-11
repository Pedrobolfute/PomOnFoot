const returnToToday = document.getElementById('return');
returnToToday.addEventListener('click', () => window.location.href = '../hoje.html')

const body = document.querySelector('body')
const frame = document.querySelector('.frame')
const unsee = document.querySelector('#return')

body.style.backgroundColor = '#000'
frame.style.backgroundColor = '#333'
unsee.style.cursor = 'pointer'


//Main
function main() {
  column1()
  column2()
  column3()
  column4()
  column5()
  column6()
  column7()
}
main()

//Funções
function column1() {
  const coluna = document.querySelectorAll(`tr td:nth-child(${1})`)
  coluna.forEach(block => {
    block.addEventListener('dblclick', (e) => {
      insertInput(e.currentTarget)
    })
  })
}

function column2() {
  const coluna = document.querySelectorAll(`tr td:nth-child(${2})`)
  coluna.forEach(block => {
    block.addEventListener('dblclick', (e) => {
      insertInput(e.currentTarget)
    })
  })
}

function column3() {
  const coluna = document.querySelectorAll(`tr td:nth-child(${3})`)
  coluna.forEach(block => {
    block.addEventListener('dblclick', (e) => {
      insertInput(e.currentTarget)
    })
  })
}

function column4() {
  const coluna = document.querySelectorAll(`tr td:nth-child(${4})`)
  coluna.forEach(block => {
    block.addEventListener('dblclick', (e) => {
      insertInput(e.currentTarget)
    })
  })
}

function column5() {
  const coluna = document.querySelectorAll(`tr td:nth-child(${5})`)
  coluna.forEach(block => {
    block.addEventListener('dblclick', (e) => {
      insertInput(e.currentTarget)
    })
  })
}

function column6() {
  const coluna = document.querySelectorAll(`tr td:nth-child(${6})`)
  coluna.forEach(block => {
    block.addEventListener('dblclick', (e) => {
      insertInput(e.currentTarget)
    })
  })
}

function column7() {
  const coluna = document.querySelectorAll(`tr td:nth-child(${7})`)
  coluna.forEach(block => {
    block.addEventListener('dblclick', (e) => {
      insertInput(e.currentTarget)
    })
  })
}


//Funções auxiliares
function insertInput(element) {
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
  keyEnter(element)
}

function keyEnter(element) {
  const inputEle = document.querySelector('.enter')
  inputEle.addEventListener('keyup', (e) => {
    let key = e.which || e.keyCode
    if (key == 13) {
      element.textContent = inputEle.value
    }
  })
}

function isValueEmpty(element) {
  let value = ''
  if (element.textContent !== '') {
    return value = element.textContent
  } return value
}