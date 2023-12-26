const list = document.querySelector('.list')

window.addEventListener('DOMContentLoaded', () => {
  data.removePast()
  data.getTodoData(list)
  mainPomodore()
  load()
})

function mainPomodore() {
  const insert = document.getElementsByClassName('insert')[0];
  insert.onsubmit = function (parameter) {
    parameter.preventDefault();
    const inputAdd = document.getElementsByClassName('inputAdd')[0];

    if (inputAdd.value.trim() !== '') {
      data.setTodoData(inputAdd.value)
      insert.reset();
      data.loadLastTodoData(list)
      load()
    }
  }
}

//Funcões Auxiliares
function load() {
  let checkboxList = document.querySelectorAll('input[type="checkbox"]')
  let i = 0;
  checkboxList.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      console.log('mudo ' + i+1)
      data.removeTodoData(checkbox)
    })
  })
}