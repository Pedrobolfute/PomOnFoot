window.addEventListener('DOMContentLoaded', () => {
  getTodoData()
  mainPomodore()
  load()
})

function mainPomodore() {
  const insert = document.getElementsByClassName('insert')[0];
  insert.onsubmit = function (parameter) {
    parameter.preventDefault();
    const inputAdd = document.getElementsByClassName('inputAdd')[0];

    if (inputAdd.value.trim() !== '') {
      setTodoData(inputAdd.value)
      insert.reset();
      loadLastTodoData()
      load()
    }
  }
}

//Funcões Auxiliares
function load() {
  let checkboxList = document.querySelectorAll('input[type="checkbox"]')
  checkboxList.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      removeTodoData(checkbox)
    })
  })
}
