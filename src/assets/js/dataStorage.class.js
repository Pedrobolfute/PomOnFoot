Date.prototype.getWeek = function () {
  let oneJan = new Date(this.getFullYear(), 0, 1)
  let today = new Date(this.getFullYear(), this.getMonth(), this.getDate())
  let dayOfYear = (today - oneJan + 86400000) / 86400000
  return Math.ceil(dayOfYear / 7)
}

class DataStorage {
  constructor(element, value) {
    this.element = element
    this.value = value
  }

  //Aux
  allWeek = {
    0: 'Domingo',
    1: 'Segunda',
    2: 'Terça',
    3: 'Quarta',
    4: 'Quinta',
    5: 'Sexta',
    6: 'Sabado',
    7: 'Ontem'
  }

  getWeek() {
    const date = new Date()
    return date.getWeek()
  }

  getDay() {
    const date = new Date()
    return date.getDay()
  }

  //Todo
  whichTodoDay() {
    let date = new Date()
    let today = date.getDay()
    let tomorrow = today + 1
    let yesterday = today - 1
    if (tomorrow >= 6) { tomorrow = 0 }
    if (yesterday <= 0) { yesterday = 6 }
    if (this.element) {
      let whoScreenIs = this.element.textContent.toLowerCase()
      if (whoScreenIs === 'hoje') { return today }
      if (whoScreenIs === 'amanhã') { return tomorrow }
      if (whoScreenIs === 'ontem') { return yesterday }
    }
  }
  setTodoData(value) {
    let tasks = Array()
    if (localStorage.hasOwnProperty(`${this.allWeek[this.whichTodoDay()]}`)) {
      tasks = JSON.parse(localStorage.getItem(`${this.allWeek[this.whichTodoDay()]}`))
    }
    tasks.push({ task: value, week: this.getWeek(), weekDay: this.getDay() })
    localStorage.setItem(`${this.allWeek[this.whichTodoDay()]}`, JSON.stringify(tasks))
  }
  loadLastTodoData(elementPlace) {
    if (localStorage.hasOwnProperty(`${this.allWeek[this.whichTodoDay()]}`)) {
      let myTasks = JSON.parse(localStorage.getItem(`${this.allWeek[this.whichTodoDay()]}`))
      let lastTask = myTasks[myTasks.length - 1].task
      const element = `
      <div class="formItem">
        <input type="checkbox" class="taskList" name="${lastTask}" id="${lastTask}">
        <label for="${lastTask}">${lastTask}</label>
      </div>
      `
      elementPlace.innerHTML += element
    }
  }
  getTodoData(elementPlace) {
    if (localStorage.hasOwnProperty(`${this.allWeek[this.whichTodoDay()]}`)) {
      let myTasks = JSON.parse(localStorage.getItem(`${this.allWeek[this.whichTodoDay()]}`))
      myTasks.forEach(task => {
        const element = `
        <div class="formItem">
          <input type="checkbox" class="taskList" name="${task.task}" id="${task.task}">
          <label for="${task.task}">${task.task}</label>
        </div>
        `
        elementPlace.innerHTML += element
      })
    }
  }
  removeTodoData(item) {
    if (item) {
      let itemValue = item.getAttribute('name')
      if (localStorage.hasOwnProperty(`${this.allWeek[this.whichTodoDay()]}`)) {
        let myTasks = JSON.parse(localStorage.getItem(`${this.allWeek[this.whichTodoDay()]}`))
        myTasks = myTasks.filter(task => {
          return task.task !== `${itemValue}`
        })
        localStorage.setItem(`${this.allWeek[this.whichTodoDay()]}`, JSON.stringify(myTasks))
      }
    }
  }
  cleanTodoData(elementPlace) {
    elementPlace.innerHTML = ''
  }

  //Week
  cleanWeekData(elements) {
    for (let i = 0; i < elements.length; i++) {
      elements[i].textContent = ''
    }
  }
  getWeekData() {
    for (let i = 0; i <= 7; i++) {
      const elements = document.querySelectorAll(`tr td:nth-child(${i + 1})`)
      if (localStorage.hasOwnProperty(`${this.allWeek[i]}`)) {
        let myTasks = JSON.parse(localStorage.getItem(`${this.allWeek[i]}`))
        myTasks.map((task, index) => {
          elements[index].textContent = task.task
        })
      }
    }
  }
  setWeekData(element, oldValue, index) {
    let value = element.value
    if (value.trim() !== '' && oldValue.trim() == '') {
      let tasks = Array()
      if (localStorage.hasOwnProperty(`${this.allWeek[index - 1]}`)) {
        tasks = JSON.parse(localStorage.getItem(`${this.allWeek[index - 1]}`))
      }
      tasks.push({ task: value })
      localStorage.setItem(`${this.allWeek[index - 1]}`, JSON.stringify(tasks))
    } else if (value.trim() == '' && oldValue.trim() !== '') {
      let myTasks = JSON.parse(localStorage.getItem(`${this.allWeek[index - 1]}`))
      myTasks = myTasks.filter(task => {
        return task.task !== oldValue
      })
      localStorage.setItem(`${this.allWeek[index - 1]}`, JSON.stringify(myTasks))
    } else if (oldValue.trim() == value.trim()) {
      console.log('...')
    } else {
      let myNewTasks = Array()
      let myTasks = JSON.parse(localStorage.getItem(`${this.allWeek[index - 1]}`))
      myTasks = myTasks.filter(task => {
        return task.task !== oldValue
      })
      myNewTasks = myTasks
      myNewTasks.push({ task: value })
      localStorage.setItem(`${this.allWeek[index - 1]}`, JSON.stringify(myNewTasks))
    }
  }
}