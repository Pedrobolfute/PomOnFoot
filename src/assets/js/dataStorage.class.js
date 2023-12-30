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
    if (tomorrow > 6) { tomorrow = 0 }
    if (yesterday < 0) { yesterday = 6 }
    if (this.element) {
      let whoScreenIs = this.element.textContent.toLowerCase()
      if (whoScreenIs === 'hoje') { return today }
      if (whoScreenIs === 'amanhã') { return tomorrow }
      if (whoScreenIs === 'ontem') { return yesterday }
    }
  }

  removePast() {
    for (let i = 0; i <= this.getWeek(); i++) {
      for (let j = 0; j <= 6; j++) {
        if (i <= this.getWeek() - 2) {
          if (localStorage.hasOwnProperty(`${i}-${this.allWeek[j]}`)) {
            localStorage.removeItem(`${i}-${this.allWeek[j]}`)
          }
        } else {
          if (i === this.getWeek() && j === 0) {
            if (localStorage.hasOwnProperty(`${i - 1}-${this.allWeek[5]}`)) {
              localStorage.removeItem(`${i - 1}-${this.allWeek[5]}`)
            }
          }
          else if (i === this.getWeek() && j === 1) {
            if (localStorage.hasOwnProperty(`${i - 1}-${this.allWeek[6]}`)) {
              localStorage.removeItem(`${i - 1}-${this.allWeek[6]}`)
            }
          }
          else if (i === this.getWeek() && j != 0 && j != 1 && j <= this.getDay()) {
            if (localStorage.hasOwnProperty(`${i}-${this.allWeek[j]}`)) {
              localStorage.removeItem(`${i}-${this.allWeek[j - 2]}`)
            }
          }
        }
      }
    }
  }

  setTodoData(value) {
    let tasks = Array()
    let isTomorrow = this.element.textContent.toLowerCase() === 'amanhã'
    let isSaturday = this.getDay() === 6
    let weekTrobleshot
    if (isTomorrow && isSaturday) { weekTrobleshot = this.getWeek() + 1 }
    else { weekTrobleshot = this.getWeek() }
    if (localStorage.hasOwnProperty(`${weekTrobleshot}-${this.allWeek[this.whichTodoDay()]}`)) {
      tasks = JSON.parse(localStorage.getItem(`${weekTrobleshot}-${this.allWeek[this.whichTodoDay()]}`))
    }
    tasks.push({ task: value, week: weekTrobleshot, weekDay: this.whichTodoDay() })
    localStorage.setItem(`${weekTrobleshot}-${this.allWeek[this.whichTodoDay()]}`, JSON.stringify(tasks))
  }
  loadLastTodoData(elementPlace) {
    let isTomorrow = this.element.textContent.toLowerCase() === 'amanhã'
    let isSaturday = this.getDay() === 6
    let weekTrobleshot
    if (isTomorrow && isSaturday) { weekTrobleshot = this.getWeek() + 1 }
    else { weekTrobleshot = this.getWeek() }
    if (localStorage.hasOwnProperty(`${weekTrobleshot}-${this.allWeek[this.whichTodoDay()]}`)) {
      let myTasks = JSON.parse(localStorage.getItem(`${weekTrobleshot}-${this.allWeek[this.whichTodoDay()]}`))
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
    let myTasks
    if (localStorage.hasOwnProperty(`${this.getWeek()}-${this.allWeek[this.whichTodoDay()]}`) || localStorage.hasOwnProperty(`${this.getWeek() + 1}-${this.allWeek[0]}`)) {
      if (this.getDay() === 6 && this.whichTodoDay() === 0 && localStorage.hasOwnProperty(`${this.getWeek() + 1}-${this.allWeek[0]}`)) {
        myTasks = JSON.parse(localStorage.getItem(`${this.getWeek() + 1}-${this.allWeek[this.whichTodoDay()]}`))
        myTasks.forEach(task => {
          const element = `
          <div class="formItem">
          <input type="checkbox" class="taskList" name="${task.task}" id="${task.task}">
          <label for="${task.task}">${task.task}</label>
          </div>
          `
          elementPlace.innerHTML += element
        })
      } else if (this.getDay() === 0 && this.whichTodoDay() === 6 && localStorage.hasOwnProperty(`${this.getWeek() - 1}-${this.allWeek[6]}`)) {
        myTasks = JSON.parse(localStorage.getItem(`${this.getWeek() - 1}-${this.allWeek[this.whichTodoDay()]}`))
        myTasks.forEach(task => {
          const element = `
          <div class="formItem">
            <input type="checkbox" class="taskList" name="${task.task}" id="${task.task}">
            <label for="${task.task}">${task.task}</label>
          </div>
          `
          elementPlace.innerHTML += element
        })
      } else {
        if (localStorage.hasOwnProperty(`${this.getWeek()}-${this.allWeek[this.whichTodoDay()]}`)) {
          myTasks = JSON.parse(localStorage.getItem(`${this.getWeek()}-${this.allWeek[this.whichTodoDay()]}`))
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
    }
  }
  removeTodoData(item) {
    let isTomorrow = this.element.textContent.toLowerCase() === 'amanhã'
    let isSaturday = this.getDay() === 6
    let weekTrobleshot
    if (isTomorrow && isSaturday) { weekTrobleshot = this.getWeek() + 1 }
    else { weekTrobleshot = this.getWeek() }
    if (item) {
      let itemValue = item.getAttribute('name')
      if (localStorage.hasOwnProperty(`${weekTrobleshot}-${this.allWeek[this.whichTodoDay()]}`)) {
        let myTasks = JSON.parse(localStorage.getItem(`${weekTrobleshot}-${this.allWeek[this.whichTodoDay()]}`))
        myTasks = myTasks.filter(task => {
          return task.task !== `${itemValue}`
        })
        localStorage.setItem(`${weekTrobleshot}-${this.allWeek[this.whichTodoDay()]}`, JSON.stringify(myTasks))
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
    let myTasks = Array()
    let days
    for (let i = 0; i <= 6; i++) {
      if (i >= this.getDay()) {
        days = i
      }
      const elements = document.querySelectorAll(`tr td:nth-child(${i + 1})`)
      if (localStorage.hasOwnProperty(`${this.getWeek()}-${this.allWeek[days]}`) || localStorage.hasOwnProperty(`${this.getWeek() + 1}-${this.allWeek[i]}`)) {
        myTasks = JSON.parse(localStorage.getItem(`${this.getWeek()}-${this.allWeek[days]}`) || localStorage.getItem(`${this.getWeek() + 1}-${this.allWeek[i]}`))
        myTasks.map((task, index) => {
          elements[index].textContent = task.task
        })
      }
    }
  }
  setWeekData(element, oldValue, index) {
    let weekTrobleshot
    let isMyWeek = this.getDay() <= index - 1
    if (isMyWeek) { weekTrobleshot = this.getWeek() }
    else { weekTrobleshot = this.getWeek() + 1 }

    let value = element.value
    //add
    if (value.trim() !== '' && oldValue.trim() == '') {
      let tasks = Array()
      if (localStorage.hasOwnProperty(`${weekTrobleshot}-${this.allWeek[index - 1]}`)) {
        tasks = JSON.parse(localStorage.getItem(`${weekTrobleshot}-${this.allWeek[index - 1]}`))
      }
      tasks.push({ task: value, week: weekTrobleshot, weekDay: index - 1 })
      localStorage.setItem(`${weekTrobleshot}-${this.allWeek[index - 1]}`, JSON.stringify(tasks))
      //remove
    } else if (value.trim() == '' && oldValue.trim() !== '') {
      let myTasks = JSON.parse(localStorage.getItem(`${weekTrobleshot}-${this.allWeek[index - 1]}`))
      myTasks = myTasks.filter(task => {
        return task.task !== oldValue
      })
      localStorage.setItem(`${weekTrobleshot}-${this.allWeek[index - 1]}`, JSON.stringify(myTasks))
      //iqual
    } else if (oldValue.trim() == value.trim()) {
      console.log('...')
      //change
    } else {
      let myNewTasks = Array()
      let myTasks = JSON.parse(localStorage.getItem(`${weekTrobleshot}-${this.allWeek[index - 1]}`))
      myTasks = myTasks.filter(task => {
        return task.task !== oldValue
      })
      myNewTasks = myTasks
      myNewTasks.push({ task: value, week: weekTrobleshot, weekDay: index - 1 })
      localStorage.setItem(`${weekTrobleshot}-${this.allWeek[index - 1]}`, JSON.stringify(myNewTasks))
    }
  }
}