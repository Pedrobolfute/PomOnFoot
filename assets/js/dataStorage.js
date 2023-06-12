const date = new Date()
const today = date.getDay()
let tomorrow = today + 1
if (tomorrow >= 6) { tomorrow = 0 }
let yesterday = today - 1
if (yesterday <= 0) { yesterday = 6 }



//From toDo
function whichTodoDay() {
  if (document.querySelector('h6')) {
    const whoScreenIs = document.querySelector('h6').textContent.toLowerCase()
    if (whoScreenIs === 'hoje') {
      return today
    } else if (whoScreenIs === 'amanhã') {
      return tomorrow
    } else if (whoScreenIs === 'ontem') {
      return yesterday
    }
  }
}

function setTodoData(value) {
  let tasks = Array()
  if (localStorage.hasOwnProperty(`tasks${whichTodoDay()}`)) {
    tasks = JSON.parse(localStorage.getItem(`tasks${whichTodoDay()}`))
  }
  tasks.push({ task: value })
  localStorage.setItem(`tasks${whichTodoDay()}`, JSON.stringify(tasks))
}

function loadLastTodoData() {
  let list = document.getElementsByClassName('list')[0]
  if (localStorage.hasOwnProperty(`tasks${whichTodoDay()}`)) {
    let myTasks = JSON.parse(localStorage.getItem(`tasks${whichTodoDay()}`))
    let last = myTasks[myTasks.length - 1].task
    const element = `
        <div class="formItem">
          <input type="checkbox" class="taskList" name="${last}" id="${last}">
          <label for="${last}">${last}</label></div>`
    list.innerHTML += element
  }
}

function getTodoData() {
  let list = document.getElementsByClassName('list')[0]
  if (localStorage.hasOwnProperty(`tasks${whichTodoDay()}`)) {
    let myTasks = JSON.parse(localStorage.getItem(`tasks${whichTodoDay()}`))
    myTasks.forEach(task => {
      const element = `
      <div class="formItem">
        <input type="checkbox" class="taskList" name="${task.task}" id="${task.task}">
        <label for="${task.task}">${task.task}</label></div>`
      list.innerHTML += element
    })
  }
}

function removeTodoData(item) {
  if (item) {
    let itemValue = item.getAttribute('name')
    if (localStorage.hasOwnProperty(`tasks${whichTodoDay()}`)) {
      let myTasks = JSON.parse(localStorage.getItem(`tasks${whichTodoDay()}`))

      myTasks = myTasks.filter(task => {
        return task.task !== `${itemValue}`
      })
      localStorage.setItem(`tasks${whichTodoDay()}`, JSON.stringify(myTasks))
    }
  }
}

function cleanScreen() {
  let list = document.getElementsByClassName('list')[0]
  list.innerHTML = ''
}


// from Week
function fromWeek() {
  return week = {
    'domingo': 0,
    'segunda': 1,
    'terçe': 2,
    'quarta': 3,
    'quinta': 4,
    'sexta': 5,
    'sábado': 6
  }



}

function getWeekData() {
  for (let i = 0; i <= 6; i++) {
    const allWeek = document.querySelectorAll(`tr td:nth-child(${i + 1})`)
    if (localStorage.hasOwnProperty(`tasks${i}`)) {
      let myTasks = JSON.parse(localStorage.getItem(`tasks${i}`))
      myTasks.map((task, index) => {
        allWeek[index].textContent = task.task
      })
    }
  }
}

function loadLastWeekData() {
  let list = document.getElementsByClassName('enter')[0]
  if (localStorage.hasOwnProperty(`tasks${0}`)) {
    let myTasks = JSON.parse(localStorage.getItem(`tasks${0}`))
    let last = myTasks[myTasks.length - 1].task
    const element = `
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
      value="${isValueEmpty(last)}">
  `
    list.innerHTML += element
  }
}

function setWeekData(element, oldValue, index) {
  let value = element.value
  let oldV = oldValue
  if (localStorage.hasOwnProperty(`tasks${index}`)) {
    if (value.trim() !== '' && oldV.trim() == '') {
      console.log('IF')
      addWeekData(value, oldV, index)
    } else if (value.trim() == '' && oldV.trim() !== '') {
      removeWeekData(value, oldV, index)
    } else {
      console.log('ELSE')
      changeWeekData(value, oldV, index)
    }
  }
}

//FUNÇÕES AUXILIARES À SETWEEKDATA
function addWeekData(eleValue, old, index) {
  console.log(index)
  let tasks = Array()
  let value = eleValue
  let oldValue = old
  console.log(oldValue)

  tasks = JSON.parse(localStorage.getItem(`tasks${index}`))
  tasks.push({ task: value })
  localStorage.setItem(`tasks${index}`, JSON.stringify(tasks))
}

function removeWeekData(value, oldV, index) {
  let oldValue = oldV
  let myTasks = JSON.parse(localStorage.getItem(`tasks${index}`))
  myTasks = myTasks.filter(task => {
    return task.task !== oldValue
  })
  localStorage.setItem(`tasks${index}`, JSON.stringify(myTasks))
}

function changeWeekData(value, oldV, index) {
  let newValue = value
  let oldValue = oldV
  let myNewTasks = Array()

  let myTasks = JSON.parse(localStorage.getItem(`tasks${index}`))
  myTasks = myTasks.filter(task => {
    return task.task !== oldValue
  })
  myNewTasks = myTasks
  myNewTasks.push({task: newValue})
  console.log(myNewTasks)
  localStorage.setItem(`tasks${index}`, JSON.stringify(myNewTasks))
}