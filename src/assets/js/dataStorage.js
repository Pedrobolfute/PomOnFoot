//ORIGINAL
const date = new Date()
const today = date.getDay()
let tomorrow = today + 1
let yesterday = today - 1
if (tomorrow >= 6) { tomorrow = 0 }
if (yesterday <= 0) { yesterday = 6 }


//From toDo
function whichTodoDay() {
  if (document.querySelector('h6')) {
    const whoScreenIs = document.querySelector('.info h6').textContent.toLowerCase()
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
  let list = document.querySelector('.list')
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
  let list = document.querySelector('.list')
  if (localStorage.hasOwnProperty(`tasks${whichTodoDay()}`)) {
    let myTasks = JSON.parse(localStorage.getItem(`tasks${whichTodoDay()}`))
    myTasks.forEach(task => {
      const element = `
      <div class="formItem">
        <input type="checkbox" class="taskList" name="${task.task}" id="${task.task}">
        <label for="${task.task}">${task.task}</label>
      </div>`
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

function cleanTodoData() {
  let list = document.querySelector('.list')
  list.innerHTML = ''
}


// from Week
function cleanWeekData(){
  const allWeek = document.querySelectorAll(`tr td`)
  for(let i = 0; i <= allWeek.length-1; i++){
    allWeek[i].textContent = ''
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


function setWeekData(element, oldValue, index) {
  let value = element.value
  let oldV = oldValue

  if (value.trim() !== '' && oldV.trim() == '') {
    addWeekData(value, oldV, index)
  } else if (value.trim() == '' && oldV.trim() !== '') {
    removeWeekData(value, oldV, index)
  } else if (oldV.trim() == value.trim()) {
  } else {
    changeWeekData(value, oldV, index)
  }
}

//FUNÇÕES AUXILIARES À SETWEEKDATA
function addWeekData(eleValue, old, index) {
  let i = index - 1
  let tasks = Array()
  let value = eleValue

  if (localStorage.hasOwnProperty(`tasks${i}`)) {
    tasks = JSON.parse(localStorage.getItem(`tasks${i}`))
  }
  tasks.push({ task: value })
  localStorage.setItem(`tasks${i}`, JSON.stringify(tasks))
}

function removeWeekData(value, oldV, index) {
  let oldValue = oldV

  let myTasks = JSON.parse(localStorage.getItem(`tasks${index - 1}`))
  myTasks = myTasks.filter(task => {
    return task.task !== oldValue
  })
  localStorage.setItem(`tasks${index - 1}`, JSON.stringify(myTasks))
}

function changeWeekData(value, oldV, index) {
  let newValue = value
  let oldValue = oldV
  let myNewTasks = Array()

  let myTasks = JSON.parse(localStorage.getItem(`tasks${index - 1}`))
  myTasks = myTasks.filter(task => {
    return task.task !== oldValue
  })
  myNewTasks = myTasks
  myNewTasks.push({ task: newValue })
  localStorage.setItem(`tasks${index - 1}`, JSON.stringify(myNewTasks))
}
