const date = new Date()
const today = date.getDay() + 1
let tomorrow = today + 1
if(tomorrow >= 7){tomorrow = 1}
let yesterday = today - 1
if(yesterday <= 1){yesterday = 7}



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

function loadLastTodoData(){
    let list = document.getElementsByClassName('list')[0]
    if (localStorage.hasOwnProperty(`tasks${whichTodoDay()}`)) {
      let myTasks = JSON.parse(localStorage.getItem(`tasks${whichTodoDay()}`))
      let last = myTasks[myTasks.length-1].task
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

function cleanScreen(){
  let list = document.getElementsByClassName('list')[0]
  list.innerHTML = ''
}


// from Week
function fromWeek() {
  return week = {
    'monday': 1,
    'tuesday': 2,
    'wednesday': 3,
    'thursday': 4,
    'friday': 5,
    'saturday': 6,
    'sunday': 7
  }

  

}

function getWeekData(){
  for(let i = 1; i <= 7; i++){
    const allWeek = document.querySelectorAll(`tr td:nth-child(${i})`)
  
  if(localStorage.hasOwnProperty(`tasks${i}`)){
    let myTasks = JSON.parse(localStorage.getItem(`tasks${i}`))
    myTasks.map((task, index) => {
      
      allWeek[index].textContent = task.task
    })
  }
}
}

function setWeekData(value){
  let tasks = Array()
  if(localStorage.hasOwnProperty(`tasks${6}`)){
    tasks.JSON.parse(localStorage.getItem(`tasks${6}`))
  }
  tasks.push({task: value})
  localStorage.setItem(`tasks${6}`, JSON.stringify(tasks))
}